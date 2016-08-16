'use strict';

var express = require('express');
var router = express.Router();

router.use('/airbnb', require('./airbnb'));
router.use('/location', require('./location'));
router.use('/mail', require('./mail'));
router.use('/trips', require('./trips'));
router.use('/users', require('./users'));

module.exports = router;
