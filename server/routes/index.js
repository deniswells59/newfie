'use strict';

import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'newfie' });
});

module.exports = router;
