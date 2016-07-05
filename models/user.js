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

const interests = ['Food',
                   'Nature',
                   'Attractions',
                   'City',
                   'Home Life'];

var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, enum: ['User', 'Guide', 'Admin'], default: 'User' },
  name: String,
  location: String,
  languages: [{ type: String, required: true }],
  visited: [ { type: String } ],
  badges: [{
    name: String,
    receivedAt: { type: Date, default: Date.now() }
  }],
  wishlist: [{ type: String }],
  interests: [{type: String, enum: interests }],
  expertise: [{ type: String, enum: interests }],
  companions: [{ type: mongoose.Types.ObjectId }],
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
    var token = req.cookies.accessToken;

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
