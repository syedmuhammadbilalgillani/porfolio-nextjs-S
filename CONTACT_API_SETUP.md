# Contact Form API Setup

This document explains how to set up the contact form API with Nodemailer.

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# SMTP Configuration for Nodemailer
# Get these values from your email service provider (Gmail, Outlook, SendGrid, etc.)

# SMTP Server Host
SMTP_HOST=smtp.gmail.com

# SMTP Port (587 for TLS, 465 for SSL, 25 for non-encrypted)
SMTP_PORT=587

# Use SSL/TLS (true for port 465, false for port 587)
SMTP_SECURE=false

# SMTP Username (usually your email address)
SMTP_USER=your-email@gmail.com

# SMTP Password (for Gmail, use an App Password: https://support.google.com/accounts/answer/185833)
SMTP_PASS=your-app-password

# Admin email address (where contact form submissions will be sent)
ADMIN_EMAIL=sarfarazkhanwattoo@gmail.com

# Site name (used in email templates)
SITE_NAME=Portfolio Website
```

## Gmail Setup

If you're using Gmail:

1. Enable 2-Step Verification on your Google Account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an app password for "Mail"
4. Use this app password as your `SMTP_PASS` value

## Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## How It Works

1. When a user submits the contact form, the data is sent to `/api/contact`
2. The API validates the form data
3. Two emails are sent:
   - **Admin Email**: Sent to `ADMIN_EMAIL` with the form submission details
   - **User Confirmation Email**: Sent to the user's email address confirming their message was received
4. The user sees a success or error message based on the result

## Testing

After setting up your environment variables, restart your Next.js development server:

```bash
npm run dev
```

Then test the contact form on your website. Check both your admin email and the user's email to confirm both messages are being sent.

