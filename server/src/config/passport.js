/**
 * Google OAuth Passport Strategy
 */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const logger = require('../utils/logger');

// Admin email — Ms. Ananya's account is always admin
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'ananya.nrityangan@gmail.com';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value?.toLowerCase();
        const avatar = profile.photos?.[0]?.value;

        if (!email) {
          return done(new Error('No email returned from Google'), null);
        }

        // Find or create user
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Try matching by email (existing account without googleId)
          user = await User.findOne({ email });

          if (user) {
            user.googleId = profile.id;
            if (!user.avatar && avatar) user.avatar = avatar;
            await user.save();
          } else {
            // New user — create account
            user = await User.create({
              name: profile.displayName,
              email,
              googleId: profile.id,
              avatar,
              role: email === ADMIN_EMAIL ? 'admin' : 'student',
            });
            logger.info(`New user registered via Google: ${email}`);
          }
        }

        if (!user.isActive) {
          return done(new Error('Account is deactivated'), null);
        }

        return done(null, user);
      } catch (error) {
        logger.error('Google OAuth error:', { message: error.message });
        return done(error, null);
      }
    }
  )
);

// Not using sessions — JWT only
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
