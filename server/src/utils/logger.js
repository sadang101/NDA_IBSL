/**
 * Basic Logger Utility
 * Provides structured logging for development and production
 */

// Try to load chalk, fallback to plain logs if not available
let chalk;
try {
  chalk = require('chalk');
} catch (error) {
  // Fallback to plain console if chalk is not available
  chalk = {
    red: (str) => str,
    yellow: (str) => str,
    blue: (str) => str,
    gray: (str) => str,
    green: (str) => str,
  };
}

const LOG_LEVELS = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
};

class Logger {
  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  /**
   * Format timestamp
   */
  getTimestamp() {
    return new Date().toISOString();
  }

  /**
   * Log error messages
   */
  error(message, meta = {}) {
    if (this.isDevelopment) {
      console.error(
        chalk.red(`[${this.getTimestamp()}] ERROR:`),
        message,
        meta.stack ? `\n${meta.stack}` : ''
      );
    } else {
      console.error(
        JSON.stringify({
          timestamp: this.getTimestamp(),
          level: LOG_LEVELS.ERROR,
          message,
          ...meta,
        })
      );
    }
  }

  /**
   * Log warning messages
   */
  warn(message, meta = {}) {
    if (this.isDevelopment) {
      console.warn(chalk.yellow(`[${this.getTimestamp()}] WARN:`), message, meta);
    } else {
      console.warn(
        JSON.stringify({
          timestamp: this.getTimestamp(),
          level: LOG_LEVELS.WARN,
          message,
          ...meta,
        })
      );
    }
  }

  /**
   * Log info messages
   */
  info(message, meta = {}) {
    if (this.isDevelopment) {
      console.log(chalk.blue(`[${this.getTimestamp()}] INFO:`), message, meta);
    } else {
      console.log(
        JSON.stringify({
          timestamp: this.getTimestamp(),
          level: LOG_LEVELS.INFO,
          message,
          ...meta,
        })
      );
    }
  }

  /**
   * Log debug messages (only in development)
   */
  debug(message, meta = {}) {
    if (this.isDevelopment) {
      console.log(chalk.gray(`[${this.getTimestamp()}] DEBUG:`), message, meta);
    }
  }

  /**
   * Log HTTP requests
   */
  http(req, res, responseTime) {
    if (this.isDevelopment) {
      console.log(
        chalk.green(`[${this.getTimestamp()}] HTTP:`),
        `${req.method} ${req.url}`,
        chalk.gray(`${responseTime}ms`)
      );
    } else {
      console.log(
        JSON.stringify({
          timestamp: this.getTimestamp(),
          level: 'HTTP',
          method: req.method,
          url: req.url,
          responseTime: `${responseTime}ms`,
          status: res.statusCode,
        })
      );
    }
  }
}

const logger = new Logger();

module.exports = logger;
