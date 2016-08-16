'use strict';

import express from 'express';
const router = express.Router();

import Mail from '../controllers/Mail.js';

router.post('/', Mail.sendMail);

module.exports = router;
