import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/utilisateurControllers.js';
import { authentication } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authentication, getUserProfile);

export default router;


