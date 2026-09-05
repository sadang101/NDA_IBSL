/**
 * Express Application Setup
 */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('./config/passport');
const logger = require('./utils/logger');
const { getConfig } = require('./config/env');
const authRoutes = require('./routes/auth.routes');
const contactRoutes = require('./routes/contact.routes');
const admissionRoutes = require('./routes/admission.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
const config = getConfig();

// Security
app.use(helmet());

// CORS — allow frontend with credentials
app.use(
  cors({
    origin: config.frontendUrl,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parsing (required for JWT httpOnly cookie)
app.use(cookieParser());

// Passport (no sessions — JWT only)
app.use(passport.initialize());

// Request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.http(req, res, duration);
  });
  next();
});

// ── Routes ───────────────────────────────────────────────────────────────────

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Nrityangan API is running',
    timestamp: new Date().toISOString(),
    environment: config.env,
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Nrityangan Dance Academy API v1.0',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/users', userRoutes);

// ── Error Handlers ────────────────────────────────────────────────────────────

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: { message: 'Route not found', code: 'NOT_FOUND', status: 404 },
  });
});

app.use((err, req, res, _next) => {
  logger.error('Unhandled error:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
  });
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: config.env === 'development' ? err.message : 'Internal server error',
      code: err.code || 'SERVER_ERROR',
      status: err.status || 500,
    },
  });
});

module.exports = app;
