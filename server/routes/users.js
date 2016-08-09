'use strict';

import express from 'express';
const router = express.Router();

import User from '../models/user';

router.use('/validate',  require('./validate'));

router.put('/', User.check(), (req, res) => {
  let userId = req.user ? req.user._id : null;
  User.find(req.body.query, (err, users) => {
    res.status(err ? 400 : 200).send(err || users);
  }).limit(10)
    .skip(req.body.page * 10)
    .populate('trip')
    .ne('_id', userId);
});

router.get('/check', User.auth(), (req, res) => {
  User.findById(req.user, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  }).populate('trip').select('-password');
});

router.get('/one/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  }).populate('trip').select('-password');
})

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
  });
});

router.put('/update', User.auth(), (req, res) => {
  User.findByIdAndUpdate(req.user._id, req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
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

router.post('/companion', User.auth(), (req, res) => {
  User.addCompanion(req.user._id, req.body.companionId, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

router.post('/request', User.auth(), (req, res) => {
  User.sendRequest(req.user._id, req.body.companionId, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

router.post('/messages', User.auth(), (req, res) => {
  User.newMessage(req.user._id, req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

router.put('/read', User.auth(), (req, res) => {
  User.readMessage(req.body._id, (err, message) => {
    res.status(err ? 400 : 200).send(err || message);
  });
});

module.exports = router;
