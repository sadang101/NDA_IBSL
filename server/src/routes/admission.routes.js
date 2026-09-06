/**
 * Admission Routes — /api/admissions
 */

const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/auth');
const {
  submitAdmission,
  getMyAdmission,
  getAllAdmissions,
  reviewAdmission,
} = require('../controllers/admission.controller');

// Student
router.post('/', protect, submitAdmission);
router.get('/my', protect, getMyAdmission);

// Admin
router.get('/', protect, adminOnly, getAllAdmissions);
router.patch('/:id', protect, adminOnly, reviewAdmission);

module.exports = router;
