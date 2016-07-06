'use strict';

import express from 'express';
const router = express.Router();

import User from '../models/user';
import Duolingo from '../controllers/Duolingo';

router.get('/duolingo', Duolingo.getUser);

module.exports = router;
