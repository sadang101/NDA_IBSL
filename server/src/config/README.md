# Configuration Directory

Contains configuration files for the application.

## Files

- **env.js**: Environment variable validation and configuration management
- **database.js**: MongoDB connection configuration (Milestone 5)
- **cloudinary.js**: Cloudinary SDK configuration (Milestone 5)

## Usage

```javascript
const { validateEnv, getConfig } = require('./config/env');

// Validate environment on startup
validateEnv();

// Get configuration
const config = getConfig();
console.log(config.port); // 5000
```
