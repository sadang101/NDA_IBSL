/**
 * MongoDB Connection
 */

const mongoose = require('mongoose');
const logger = require('../utils/logger');

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error('MongoDB connection failed:', { message: error.message });
    process.exit(1);
  }
}

module.exports = connectDB;
