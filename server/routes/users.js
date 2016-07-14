'use strict';

import express from 'express';
const router = express.Router();

import User from '../models/user';

router.use('/validate',  require('./validate'));

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    res.status(err ? 400 : 200).send(err || users);
  });
});

router.get('/check', User.auth(), (req, res) => {
  User.findById(req.user, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

// router.post('/register', function(req, res) {
//   User.register(req.body, (err, user) => {
//     res.status(err ? 400 : 200).send(err || user);
//   });
// });

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
  User.findByIdAndUpdate(req.user._id, (err, user) => {
    user.type = 'Guide';
    user.save((err, saved) => {
      res.status(err ? 400 : 200).send(err || user);
    });
  });
});

router.put('/location', User.auth(), (req, res) => {
  User.findById(req.user, (err, user) => {
    if(err) return res.status(400).send(err);
    user.places.push(req.body);
    user.save((err, savedUser) => {
      res.status(err ? 400 : 200).send(err || savedUser);
    });
  });
});

router.put('/register', User.auth(), (req, res) => {
  User.register(req.user._id, req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  })
});

module.exports = router;
