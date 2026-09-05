/**
 * Auth Controller
 */

const passport = require('../config/passport');
const { signToken } = require('../utils/jwt');
const User = require('../models/User');
const logger = require('../utils/logger');

// ── Google OAuth ──────────────────────────────────────────────────────────────

/**
 * GET /api/auth/google
 */
const googleLogin = passport.authenticate('google', {
  scope: ['profile', 'email'],
  session: false,
});

/**
 * GET /api/auth/google/callback
 */
const googleCallback = (req, res, next) => {
  passport.authenticate('google', { session: false }, (err, user) => {
    if (err || !user) {
      logger.error('Google OAuth callback error:', {
        message: err?.message,
        name: err?.name,
        oauthError: err?.oauthError,
        stack: err?.stack?.split('\n')[0],
      });
      return res.redirect(`${process.env.FRONTEND_URL}/login?error=oauth_failed`);
    }

    const token = signToken(user._id);

    res.cookie('token', token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    const redirectUrl =
      user.role === 'admin'
        ? `${process.env.FRONTEND_URL}/admin/dashboard`
        : `${process.env.FRONTEND_URL}/student/dashboard`;

    logger.info(`Google login: ${user.email} (${user.role})`);
    return res.redirect(redirectUrl);
  })(req, res, next);
};

// ── Email / Password ──────────────────────────────────────────────────────────

/**
 * POST /api/auth/register
 */
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: { message: 'Name, email, and password are required' },
      });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        error: { message: 'An account with this email already exists' },
      });
    }

    const user = await User.create({ name, email, password });
    const token = signToken(user._id);

    res.cookie('token', token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    logger.info(`New user registered: ${email}`);
    res.status(201).json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar },
    });
  } catch (error) {
    console.error('FULL REGISTER ERROR:', error);
    logger.error('Register error:', { message: error.message || String(error), code: error.code, name: error.name });
    // MongoDB duplicate key
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: { message: 'An account with this email already exists. Please sign in instead.' },
      });
    }
    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const msg = Object.values(error.errors).map(e => e.message).join(', ');
      return res.status(400).json({ success: false, error: { message: msg } });
    }
    res.status(500).json({ success: false, error: { message: error.message || 'Registration failed. Please try again.' } });
  }
};

/**
 * POST /api/auth/login
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: { message: 'Email and password are required' },
      });
    }

    // Explicitly select password (it's excluded by default)
    const user = await User.findOne({ email }).select('+password');

    if (!user || !user.password) {
      return res.status(401).json({
        success: false,
        error: { message: 'Invalid email or password' },
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        error: { message: 'Account is deactivated' },
      });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: { message: 'Invalid email or password' },
      });
    }

    const token = signToken(user._id);

    res.cookie('token', token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    logger.info(`Email login: ${email}`);
    res.status(200).json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar },
    });
  } catch (error) {
    logger.error('Login error:', { message: error.message });
    res.status(500).json({ success: false, error: { message: 'Login failed' } });
  }
};

// ── Session ───────────────────────────────────────────────────────────────────

/**
 * GET /api/auth/me
 */
const getMe = (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      avatar: req.user.avatar,
    },
  });
};

/**
 * POST /api/auth/logout
 */
const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};

module.exports = { googleLogin, googleCallback, register, login, getMe, logout };
