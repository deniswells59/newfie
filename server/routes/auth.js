import Auth from '../controllers/Auth';
import express from 'express';
const router = express.Router();

router.post('/login', Auth.login);
router.post('/google', Auth.google);
router.post('/facebook', Auth.facebook);

module.exports = router;
