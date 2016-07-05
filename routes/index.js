'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'App!'});
});

router.get('/register', function(req, res) {
  res.render('register', {title: 'App!'});
});

router.get('/secret', User.auth(), (req, res) => {
  res.send('this is top secret stuff, dude');
});

router.get('/admin', User.auth('admin'), (req, res) => {
  res.send('you must be an admin');
});

module.exports = router;
