/**
 * Admission Model
 */

const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // Personal Info
    fullName: { type: String, required: true, trim: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['female', 'male', 'other'], required: true },
    phone: { type: String, required: true, trim: true },
    parentName: { type: String, required: true, trim: true },
    parentPhone: { type: String, required: true, trim: true },

    // Address
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    pincode: { type: String, required: true, trim: true },

    // Course
    branch: {
      type: String,
      enum: ['loni', 'akole', 'sangamner', 'rahuri'],
      default: 'loni',
    },
    course: { type: String, default: 'Bharatanatyam' },
    experience: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    preferredBatch: {
      type: String,
      enum: ['morning', 'evening', 'weekend'],
      default: 'evening',
    },

    // Status
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    adminNote: { type: String, default: '' },
    reviewedAt: { type: Date, default: null },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  { timestamps: true }
);

// Only one active application per student
admissionSchema.index({ student: 1 }, { unique: true });

module.exports = mongoose.model('Admission', admissionSchema);
