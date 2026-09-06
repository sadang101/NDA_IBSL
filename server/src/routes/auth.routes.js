/**
 * Auth Routes — /api/auth/*
 */

const express = require('express');
const router = express.Router();
const {
  googleLogin,
  googleCallback,
  register,
  login,
  getMe,
  logout,
} = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth');

// Google OAuth
router.get('/google', googleLogin);
router.get('/google/callback', googleCallback);

// Email / Password
router.post('/register', register);
router.post('/login', login);

// Session
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);

module.exports = router;
