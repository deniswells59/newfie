'use strict';

import express from 'express';
const router = express.Router();

import User from '../models/user';

router.get('/', function(req, res) {
  res.render('index', {title: 'App!'});
});

module.exports = router;
