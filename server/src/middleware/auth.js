/**
 * Auth Middleware — Protect routes with JWT
 */

const User = require('../models/User');
const { verifyToken } = require('../utils/jwt');

/**
 * protect — require valid JWT cookie
 */
async function protect(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        error: { message: 'Not authenticated', code: 'UNAUTHORIZED' },
      });
    }

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id).select('-__v');

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        error: { message: 'User not found or deactivated', code: 'UNAUTHORIZED' },
      });
    }

    req.user = user;
    next();
  } catch {
    return res.status(401).json({
      success: false,
      error: { message: 'Invalid or expired token', code: 'UNAUTHORIZED' },
    });
  }
}

/**
 * adminOnly — require admin role
 */
function adminOnly(req, res, next) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({
      success: false,
      error: { message: 'Admin access required', code: 'FORBIDDEN' },
    });
  }
  next();
}

module.exports = { protect, adminOnly };
