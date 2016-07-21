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
  }).populate('trip');
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

router.put('/register', User.auth(), (req, res) => {
  User.register(req.user._id, req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  })
});

router.put('/guide', User.auth(), (req, res) => {
  User.findById(req.user._id, (err, user) => {
    if(err) res.status(400).send(err);
    user.type = 'Guide';
    user = user.getScore(user);
    user.save((err, saved) => {
      res.status(err ? 400 : 200).send(err || user);
    });
  });
});

router.put('/place', User.auth(), (req, res) => {
  User.findById(req.user, (err, user) => {
    if(err) return res.status(400).send(err);
    user.places.push(req.body);
    user = user.getScore(user);
    user.save((err, savedUser) => {
      res.status(err ? 400 : 200).send(err || savedUser);
    });
  });
});

router.put('/update', User.auth(), (req, res) => {
  User.addTrip(req.user._id, req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

module.exports = router;
