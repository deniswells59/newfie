'use strict';

import express from 'express';
const router = express.Router();

import Airbnb from '../controllers/Airbnb.js';

router.put('/search', Airbnb.getResults);

module.exports = router;
