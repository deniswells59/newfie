'use strict';

import express from 'express';
const router = express.Router();

import Google from '../controllers/Google.js';

router.post('/city', Google.getCity);

module.exports = router;
