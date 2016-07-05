'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    res.status(err ? 400 : 200).send(err || users);
  });
});

router.get('/check', User.auth(), (req, res) => {
  User.findById(req.user._id, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  }).select('-password');
});

router.post('/register', function(req, res) {
  User.register(req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

router.post('/authenticate', (req, res) => {
  User.authenticate(req.body, (err, token) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.cookie('accessToken', token).end();
    }
  });
});

router.post('/logout', (req, res) => {
  res.clearCookie('accessToken').send();
});

router.post('/badge', User.auth(), (req, res) => {
  User.addBadge(req.user._id, req.body.badge, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

router.put('/guide', User.auth(), (req, res) => {
  User.findByIdAndUpdate(req.user.id, (err, user) => {
    user.type = 'Guide';
    user.save((err, saved) => {
      res.status(err ? 400 : 200).send(err || user);
    });
  });
});
module.exports = router;
