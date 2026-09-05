# Nrityangan Academy - Backend

Node.js + Express.js API server for the Nrityangan Academy Dance Management System.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js 5** - Web framework
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
src/
├── config/           # Configuration files
│   └── env.js       # Environment validation
├── models/          # Database models (Mongoose schemas)
├── controllers/     # Request handlers
├── routes/          # API route definitions
├── middleware/      # Express middleware
├── services/        # Business logic layer
├── utils/           # Utility functions
│   └── logger.js    # Logging utility
├── app.js           # Express app configuration
└── server.js        # Server entry point
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Required environment variables:
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS

### Development

Start the development server with auto-reload:

```bash
npm run dev
```

The server will run on: http://localhost:5000

### Production

Start the production server:

```bash
npm start
```

## Available Endpoints

### Health Check
```
GET /health
```

Returns server status and environment information.

### Root
```
GET /
```

Returns API information and version.

## Code Quality

### Linting

Run ESLint:

```bash
npm run lint
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

## Windows Path Compatibility

All file paths use Node.js `path` module for cross-platform compatibility:

```javascript
const path = require('path');
const filePath = path.join(__dirname, 'folder', 'file.js');
```

## Logging

The application uses a custom logger utility (`utils/logger.js`):

- **Development**: Colored console output with timestamps
- **Production**: JSON structured logs

```javascript
const logger = require('./utils/logger');

logger.info('Info message', { meta: 'data' });
logger.error('Error message', { error: errorObject });
logger.warn('Warning message');
logger.debug('Debug message'); // Only in development
```

## Security

- **Helmet.js**: Security headers enabled
- **CORS**: Configured for frontend origin only
- **Environment Variables**: Validated on startup
- **Error Handling**: Global error handler with sanitized responses

## Development Guidelines

### Naming Conventions

- **Models**: PascalCase (`User.js`)
- **Files**: camelCase (`authController.js`)
- **Routes**: kebab-case (`/api/auth-routes`)
- **Constants**: SCREAMING_SNAKE_CASE
- **Variables/Functions**: camelCase

### Error Handling

All errors should use the global error handler:

```javascript
app.use((err, req, res, next) => {
  // Logs error and returns formatted response
});
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests (not implemented yet)
