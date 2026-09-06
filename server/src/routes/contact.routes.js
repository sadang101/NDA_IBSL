/**
 * Contact Routes — /api/contact
 */

const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contact.controller');

// POST /api/contact — public (no auth required)
router.post('/', submitContact);

module.exports = router;
