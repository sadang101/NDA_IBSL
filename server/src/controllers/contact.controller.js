/**
 * Contact Controller — handles incoming contact-form submissions
 * Sends an email to the academy Gmail using Nodemailer + Gmail App Password
 */

const nodemailer = require('nodemailer');
const logger = require('../utils/logger');

// Create a reusable transporter (created once at startup, reused per request)
let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,        // nrityanganacademy@gmail.com
      pass: process.env.CONTACT_EMAIL_APP_PWD, // Gmail App Password (NOT the normal Gmail password)
    },
  });

  return transporter;
}

/**
 * POST /api/contact
 * Body: { name, email, phone, subject, message }
 */
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: { message: 'All fields are required' },
      });
    }

    const subjectMap = {
      admission: 'Admission Enquiry',
      course: 'Course Information',
      general: 'General Question',
      feedback: 'Feedback',
      other: 'Other',
    };
    const readableSubject = subjectMap[subject] || subject;

    // Build HTML email body
    const htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #6B1025, #4a0b1a); padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h2 style="color: #D4AF37; margin: 0; font-size: 20px;">🪷 New Contact Form Submission</h2>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Nrityangan Dance Academy Website</p>
        </div>
        <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #6B1025; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #6B1025; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #6B1025;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #6B1025; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #333;"><a href="tel:${phone}" style="color: #6B1025;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #6B1025; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #333;">${readableSubject}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 16px 0 8px; font-weight: 600; color: #6B1025;">Message</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 12px 16px; background: #f9fafb; border-radius: 8px; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="font-size: 12px; color: #9ca3af; text-align: center;">
            This message was sent from the Nrityangan Dance Academy website contact form.
          </p>
        </div>
      </div>
    `;

    // Send the email
    await getTransporter().sendMail({
      from: `"Nrityangan Website" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,          // sends TO the academy gmail
      replyTo: email,                          // reply goes back to the visitor
      subject: `[Website] ${readableSubject} — from ${name}`,
      html: htmlBody,
    });

    logger.info(`Contact form email sent from: ${email}`);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    logger.error('Contact form error:', { message: error.message, stack: error.stack });
    res.status(500).json({
      success: false,
      error: { message: 'Failed to send message. Please try again later.' },
    });
  }
};

module.exports = { submitContact };
