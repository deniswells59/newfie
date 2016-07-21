'use strict';

var express = require('express');
var router = express.Router();

router.use('/users', require('./users'));
router.use('/location', require('./location'));
router.use('/airbnb', require('./airbnb'));
router.use('/trips', require('./trips'));

module.exports = router;
