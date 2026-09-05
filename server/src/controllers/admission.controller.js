/**
 * Admission Controller
 */

const Admission = require('../models/Admission');
const logger = require('../utils/logger');

/**
 * POST /api/admissions
 * Submit a new admission form (student only)
 */
const submitAdmission = async (req, res) => {
  try {
    const studentId = req.user._id;

    // Check if already submitted
    const existing = await Admission.findOne({ student: studentId });
    if (existing) {
      return res.status(400).json({
        success: false,
        error: { message: 'You have already submitted an admission application.' },
      });
    }

    const {
      fullName, dateOfBirth, gender, phone,
      parentName, parentPhone, address, city, pincode,
      branch, experience, preferredBatch,
    } = req.body;

    const admission = await Admission.create({
      student: studentId,
      fullName, dateOfBirth, gender, phone,
      parentName, parentPhone, address, city, pincode,
      branch: branch || 'loni',
      course: 'Bharatanatyam',
      experience: experience || 'beginner',
      preferredBatch: preferredBatch || 'evening',
    });

    logger.info(`Admission submitted by student: ${req.user.email}`);
    res.status(201).json({ success: true, admission });
  } catch (error) {
    logger.error('Submit admission error:', { message: error.message });
    res.status(500).json({ success: false, error: { message: 'Failed to submit admission' } });
  }
};

/**
 * GET /api/admissions/my
 * Get current student's admission (student only)
 */
const getMyAdmission = async (req, res) => {
  try {
    const admission = await Admission.findOne({ student: req.user._id });
    res.status(200).json({ success: true, admission: admission || null });
  } catch (error) {
    logger.error('Get my admission error:', { message: error.message });
    res.status(500).json({ success: false, error: { message: 'Failed to fetch admission' } });
  }
};

/**
 * GET /api/admissions — Admin: get all admissions
 */
const getAllAdmissions = async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = status ? { status } : {};

    const total = await Admission.countDocuments(filter);
    const admissions = await Admission.find(filter)
      .populate('student', 'name email avatar')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({ success: true, admissions, total, page: Number(page) });
  } catch (error) {
    logger.error('Get all admissions error:', { message: error.message });
    res.status(500).json({ success: false, error: { message: 'Failed to fetch admissions' } });
  }
};

/**
 * PATCH /api/admissions/:id — Admin: approve or reject
 */
const reviewAdmission = async (req, res) => {
  try {
    const { status, adminNote } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: { message: 'Status must be approved or rejected' },
      });
    }

    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      {
        status,
        adminNote: adminNote || '',
        reviewedAt: new Date(),
        reviewedBy: req.user._id,
      },
      { new: true }
    ).populate('student', 'name email');

    if (!admission) {
      return res.status(404).json({ success: false, error: { message: 'Admission not found' } });
    }

    logger.info(`Admission ${req.params.id} ${status} by admin ${req.user.email}`);
    res.status(200).json({ success: true, admission });
  } catch (error) {
    logger.error('Review admission error:', { message: error.message });
    res.status(500).json({ success: false, error: { message: 'Failed to update admission' } });
  }
};

module.exports = { submitAdmission, getMyAdmission, getAllAdmissions, reviewAdmission };
