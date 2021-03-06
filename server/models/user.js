'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import Trip from './trip';
import Message from './message';

if(process.env.TESTING){
  var JWT_SECRET='testing!';
} else {
  var JWT_SECRET = process.env.JWT_SECRET;
}

const userSchema = new mongoose.Schema({
  registered: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  type: { type: String, enum: ['User', 'Guide', 'Admin'], default: 'User' },
  name: String,
  img: String,
  location: {
    location: { type: String },
    verified: Boolean
  },
  languages: [{
    code: { type: String, required: true},
    name: { type: String, required: true},
    nativeName: { type: String, required: true},
    value: { type: String, required: true},
    level: { type: Number, required: true },
    verified: { type: Boolean }
  }],
  bio: String,
  places: [ {
     name: String,
     lat: Number,
     lng: Number
   } ],
  score: Number,
  interests: [{type: String }],
  companions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  trip: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  google: String,
  facebook: String
}, { timestamps: true });

userSchema.statics.queryUsers = (id, queryObj, cb) => {
  let userId = id ? id : null;
  let topic = Object.keys(queryObj.query)[0];

  if(topic) {
    User.find({}, cb)
      .where(topic).in([queryObj.query[topic]])
      .limit(10)
      .skip(queryObj.page * 10)
      .populate('trip')
      .ne('_id', userId);
  } else {
    User.find({}, cb)
      .limit(10)
      .skip(queryObj.page * 10)
      .populate('trip')
      .ne('_id', userId);
  }
}

userSchema.statics.addTrip = (id, tripObj, cb) => {
  if (!tripObj._id) {
    Trip.create(tripObj, (err, trip) => {
      if (err) return cb(err);
      User.findById(id, (err, user) => {
        if(err) return cb(err);
        user.trip.push(trip._id);

        user.save((err, user) => {
          if(err) return cb(err);
          user.trip = trip;
          cb(null, user);
        });
      }).select('-password');
    });
  } else {
    Trip.findByIdAndUpdate(tripObj._id, tripObj, (err, trip) => {
      User.findById(id, cb).select('-password').populate('trip');
    });
  }
}

userSchema.statics.register = (id, updateObj, cb) => {
  User.findById(id, (err, user) => {
    if(err) return cb(err);

    user.languages = updateObj.languages;
    user.interests = updateObj.interests;
    user.location = updateObj.location;
    user.registered = true;
    if(updateObj.name) user.name = updateObj.name;
    if(!user.img) user.img = '../..//assets/default-profile.png';
    user = user.getScore(user);

    user.save(cb);
  })
}

userSchema.statics.auth = role => {
  return (req, res, next) => {
    if (!req.header('Authorization')) {
      return res.status(401).send('No header');
    }

    const token = req.header('Authorization').split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if(err) return res.status(401).send({error: 'Authentication required.'});
      User.findById(payload._id, (err, user) => {
        if(err || !user) return res.status(401).send({error: 'User not found.'});
        req.user = user;

        if(role === 'admin' && !req.user.admin) {
          return res.status(403).send({error: 'Not authorized'});
        }
        next();
      }).select('-password').populate('trip companion');
    });
  };
};

userSchema.statics.check = () => {
  return (req, res, next) => {
    if(!req.header('Authorization')) {
      return next();
    }

    const token = req.header('Authorization').split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if(err) return next();
      User.findById(payload._id, (err, user) => {
        if(err) return res.status(401).send(err);
        req.user = user;

        next();
      }).select('_id');
    })
  }
};

userSchema.statics.authenticate = (userObj, cb) => {
  User.findOne({email: userObj.email}, (err, dbUser) => {
    if(err || !dbUser) {
      return cb(err || { error: 'Authentication failed. Invalid email or password.' });
    }

    bcrypt.compare(userObj.password, dbUser.password, (err, isGood) => {
      if(err || !isGood) {
        return cb(err || { error: 'Authentication failed. Invalid email or password.' });
      }
      var token = dbUser.generateToken();
      cb(null, token);
    });
  });
};

userSchema.statics.sendRequest = (userId, requestId, cb) => {
  User.findById(requestId, (err, user) => {
    if(user.companions.indexOf(userId) !== -1) return cb('Already Friends!');

    user.requests.push(userId);
    user.save(cb);
  });
}

userSchema.statics.declineRequest = (userId, requestId, cb) => {
  User.findById(userId, (err, user) => {
    const idx = user.requests.indexOf(requestId);
    if(idx === -1) return cb('Something Went Wrong!');

    user.requests.splice(idx, 1);
    user.save(cb);
  });
}

userSchema.statics.addCompanion = (userId, companionId, cb) => {
  User.findById(userId, (err1, user1) => {
    User.findById(companionId, (err2, user2) => {

      if(err1 || err2) return cb(err1 || err2);
      if(user1.companions.indexOf(user2._id) !== -1) return cb('Already Friends!');
      if(user2.companions.indexOf(user1._id) !== -1) return cb('Already Friends!');

      user1.companions.push(user2._id);
      user2.companions.push(user1._id);

      const idx = user1.requests.indexOf(user2._id);
      user1.requests.splice(idx, 1);

      user1.save((err1, user) => {
        user2.save(err2 => {
          if(err1 || err2) return cb(err1 || err2);
          User.populate(user, { path: 'requests trip companions' }, cb);
        });
      });
    });
  });
}

userSchema.statics.newMessage = (authorId, messageObj, cb) => {
  let message = new Message({
    author: authorId,
    content: messageObj.content
  });

  message.save((err, message) => {
    if(err) return cb(err);

    User.findById(messageObj._id, (err, user) => {
      if(err) return cb(err);

      user.messages.push(message._id);
      user.save(cb);
    });
  });
}

userSchema.statics.readMessage = (messageId, cb) => {
  Message.findById(messageId, (err, message) => {
    if(err) return cb(err);
    message.new = false;
    message.save(cb);
  }).populate('author');
}

userSchema.methods.getScore = (user) => {
  let score = 0;

  if(user.type === 'Guide') score += 50;

  user.languages.forEach(lang => {
    score += 5;
    if(lang.verified) score += lang.level;
  });

  user.places.forEach(place => {
    score += 10;
  });

  user.score = score;
  return user;
}

userSchema.methods.generateToken = function() {
  const payload = {
    _id: this._id,
    exp: moment().add(1, 'day').unix()
  };

  return jwt.sign(payload, JWT_SECRET);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
