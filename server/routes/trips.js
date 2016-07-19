'use strict';

import express from 'express';
const router = express.Router();

import User from '../models/user';

router.post('/new', User.auth(), (req, res) => {
  User.addTrip(req.user._id, req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  });
});

module.exports = router;
