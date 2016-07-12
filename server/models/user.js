'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var moment = require('moment');
var jwt = require('jsonwebtoken');

if(process.env.TESTING){
  var JWT_SECRET='testing!';
} else {
  var JWT_SECRET = process.env.JWT_SECRET;
}

var userSchema = new mongoose.Schema({
  registered: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  type: { type: String, enum: ['User', 'Guide', 'Admin'], default: 'User' },
  name: String,
  img: String,
  location: String,
  languages: [{
    code: { type: String, required: true},
    name: { type: String, required: true},
    nativeName: { type: String, required: true},
    value: { type: String, required: true},
    verified: { type: Boolean }
  }],
  visited: [ { type: String } ],
  badges: [{
    name: String,
    receivedAt: { type: Date, default: Date.now() }
  }],
  wishlist: [{ type: String }],
  interests: [{type: String }],
  expertise: [{ type: String }],
  companions: [{ type: mongoose.Types.ObjectId }],
  google: String,
  facebook: String
}, { timestamps: true });

userSchema.statics.addBadge = (id, badgeName, cb) => {
  User.findById(id, (err, user) => {
    if(err) return cb(err);

    user.badges.push({ name: badgeName });

    user.save((err, savedUser) => {
      cb(err, savedUser);
    })
  });
};

userSchema.statics.auth = role => {
  return (req, res, next) => {
    if (!req.header('Authorization')) {
      return res.status(401).send('No header');
    }

    var token = req.header('Authorization').split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if(err) return res.status(401).send({error: 'Authentication required.'});
      User.findById(payload._id, (err, user) => {
        if(err || !user) return res.status(401).send({error: 'User not found.'});
        req.user = user;

        if(role === 'admin' && !req.user.admin) {
          return res.status(403).send({error: 'Not authorized'});
        }
        next();
      }).select('-password');
    });
  };
};

userSchema.statics.register = (userObj, cb) => {
  User.findOne({email: userObj.email}, (err, dbUser) => {
    if(err || dbUser) return cb(err || {error: 'Email not available.'});

    bcrypt.hash(userObj.password, 12, (err, hash) => {
      if(err) return cb(err);

      var user = new User({
        email: userObj.email,
        password: hash
      });
      user.save((err, savedUser) => {
        savedUser.password = null;
        cb(err, savedUser);
      });
    });
  });
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

userSchema.methods.generateToken = function() {
  var payload = {
    _id: this._id,
    exp: moment().add(1, 'day').unix()
  };

  return jwt.sign(payload, JWT_SECRET);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
