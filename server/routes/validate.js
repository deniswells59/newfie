'use strict';

import express from 'express';
const router = express.Router();

import User from '../models/user';
import Duolingo from '../controllers/Duolingo';

router.post('/duolingo', Duolingo.getUser);
router.post('/languages', Duolingo.validateLangs);

module.exports = router;
