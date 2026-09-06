/**
 * User Controller
 */

const User = require('../models/User');
const logger = require('../utils/logger');

/**
 * GET /api/users/profile
 */
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, error: { message: 'User not found' } });
    res.status(200).json({ success: true, user });
  } catch (error) {
    logger.error('Get profile error:', { message: error.message });
    res.status(500).json({ success: false, error: { message: 'Failed to fetch profile' } });
  }
};

/**
 * PUT /api/users/profile
 * Update name only (email & avatar managed by Google)
 */
const updateProfile = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: { message: 'Valid name is required' } });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name: name.trim() },
      { new: true, runValidators: true }
    );

    logger.info(`Profile updated: ${user.email}`);
    res.status(200).json({ success: true, user });
  } catch (error) {
    logger.error('Update profile error:', { message: error.message });
    res.status(500).json({ success: false, error: { message: 'Failed to update profile' } });
  }
};

module.exports = { getProfile, updateProfile };
