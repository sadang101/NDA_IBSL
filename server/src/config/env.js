/**
 * Environment Variable Validation
 */

const logger = require('../utils/logger');

const REQUIRED_ENV_VARS = [
  'NODE_ENV',
  'PORT',
  'MONGODB_URI',
  'JWT_SECRET',
  'JWT_EXPIRE',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'GOOGLE_CALLBACK_URL',
  'FRONTEND_URL',
];

function validateEnv() {
  const missing = REQUIRED_ENV_VARS.filter((v) => !process.env[v]);

  if (missing.length > 0) {
    logger.error('Missing required environment variables:', { missing });
    process.exit(1);
  }

  logger.info('Environment validated successfully');
}

function getConfig() {
  return {
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT, 10) || 5000,
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
    mongoUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE || '7d',
  };
}

module.exports = { validateEnv, getConfig };
