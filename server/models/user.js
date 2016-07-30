'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import Trip from './trip';

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
  trip: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
  google: String,
  facebook: String
}, { timestamps: true });

userSchema.statics.addTrip = (id, tripObj, cb) => {
  if (!tripObj._id) {
    Trip.create(tripObj, (err, trip) => {
      if (err) return cb(err);

      User.findById(id, (err, user) => {
        if(err) return cb(err);
        user.trip.push(trip._id);

        user.save(cb);
      });
    });
  } else {
    Trip.findById(tripObj._id, (err, trip) => {

    })
  }
}

userSchema.statics.register = (id, updateObj, cb) => {
  User.findById(id, (err, user) => {
    if(err) return cb(err);

    user.languages = updateObj.languages;
    user.interests = updateObj.interests;
    user.location = updateObj.location;
    user.registered = true;
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
