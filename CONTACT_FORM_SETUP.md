# Contact Form Setup Guide

## Option 1: Formspree (Recommended - Easiest)

### Setup Steps:
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Set the email to receive messages: `hello@raidii.com`
5. Copy your form endpoint URL (looks like `https://formspree.io/f/YOUR_FORM_ID`)
6. Replace `YOUR_FORM_ID` in the HTML with your actual form ID

### Benefits:
- ✅ No server setup required
- ✅ Free tier available (50 submissions/month)
- ✅ Spam protection included
- ✅ Email notifications
- ✅ Form analytics

---

## Option 2: Netlify Forms (If hosting on Netlify)

### Setup Steps:
1. Add `netlify` attribute to the form
2. Deploy to Netlify
3. Forms will automatically work

### Code Changes:
```html
<form class="contact-form" name="contact" method="POST" netlify netlify-honeypot="bot-field" onsubmit="handleSubmit(event)">
    <input type="hidden" name="form-name" value="contact" />
    <div style="display: none;">
        <label>Don't fill this out: <input name="bot-field" /></label>
    </div>
    <!-- rest of form fields -->
</form>
```

---

## Option 3: EmailJS (Client-side only)

### Setup Steps:
1. Go to [emailjs.com](https://emailjs.com)
2. Create account and email service
3. Get your service ID, template ID, and public key
4. Update the JavaScript code

### Code Changes:
Add this to your HTML head:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

Update JavaScript:
```javascript
// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

function handleSubmit(event) {
    event.preventDefault();
    
    // Validation code here...
    
    // Send email
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
        .then(function() {
            alert('Thank you for your message! We\'ll get back to you soon.');
            event.target.reset();
        }, function(error) {
            alert('Sorry, there was an error sending your message. Please try again.');
        });
}
```

---

## Option 4: Custom Backend (Advanced)

### Using Node.js + Nodemailer:
1. Create a backend server
2. Set up Nodemailer with SMTP
3. Create API endpoint
4. Update form to submit to your API

### Using Python + Flask:
1. Create Flask backend
2. Set up email service
3. Create form handler endpoint
4. Update form action

---

## Current Status

The form is currently set up for **Option 1 (Formspree)** but needs your Form ID.

### To Activate:
1. Sign up at formspree.io
2. Replace `YOUR_FORM_ID` in index.html with your actual form ID
3. Test the form

### Form Fields:
- **name** (required)
- **email** (required) 
- **company** (optional)
- **message** (required)

All messages will be sent to `hello@raidii.com` once configured.
