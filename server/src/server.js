/**
 * Server Entry Point
 */

require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const logger = require('./utils/logger');
const { validateEnv, getConfig } = require('./config/env');

// Validate environment variables
validateEnv();

const config = getConfig();

// Connect to MongoDB, then start server
connectDB().then(() => {
  const server = app.listen(config.port, () => {
    logger.info('Server started', {
      port: config.port,
      environment: config.env,
      url: `http://localhost:${config.port}`,
    });
  });

  // Graceful shutdown
  const shutdown = (signal) => {
    logger.info(`${signal} received — shutting down`);
    server.close(() => {
      logger.info('HTTP server closed');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}).catch((err) => {
  logger.error('Failed to start server:', { message: err.message });
  process.exit(1);
});

// Unhandled rejections
process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection:', { reason });
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', { message: error.message });
  process.exit(1);
});
