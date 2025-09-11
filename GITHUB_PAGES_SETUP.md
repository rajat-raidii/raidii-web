# GitHub Pages Setup Guide

## Why GitHub Pages + Contact Forms Need Special Setup

GitHub Pages only serves **static files** (HTML, CSS, JS) and doesn't support:
- ❌ PHP files
- ❌ Server-side processing
- ❌ Database connections

This means `contact-handler.php` won't work on GitHub Pages.

---

## Solution 1: Formspree (Recommended - 5 minutes)

### Step 1: Set Up Formspree
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Click "New Form"
4. Set form name: "Raidii Contact Form"
5. Set email to receive messages: `hello@raidii.com`
6. Copy your form endpoint (looks like: `https://formspree.io/f/abc123def`)

### Step 2: Update Your Code
Replace `YOUR_FORM_ID` in `index.html` with your actual form ID:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST" onsubmit="handleFormspreeSubmit(event)">
```

### Step 3: Deploy to GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Step 4: Test
- Visit your live site
- Fill out the contact form
- Check `hello@raidii.com` for messages

**Benefits:**
- ✅ Works immediately
- ✅ Free (50 submissions/month)
- ✅ Spam protection
- ✅ Email notifications
- ✅ Form analytics

---

## Solution 2: Netlify Forms (Alternative)

If you prefer Netlify over GitHub Pages:

### Step 1: Update Form HTML
```html
<form class="contact-form" name="contact" method="POST" netlify netlify-honeypot="bot-field" onsubmit="handleFormspreeSubmit(event)">
    <input type="hidden" name="form-name" value="contact" />
    <div style="display: none;">
        <label>Don't fill this out: <input name="bot-field" /></label>
    </div>
    <!-- rest of your form fields -->
</form>
```

### Step 2: Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically
3. Forms work without any backend setup

---

## Solution 3: EmailJS (Client-side only)

### Step 1: Set Up EmailJS
1. Go to [emailjs.com](https://emailjs.com)
2. Create account
3. Create email service (Gmail, Outlook, etc.)
4. Create email template
5. Get your Service ID, Template ID, and Public Key

### Step 2: Update HTML
Add to your `<head>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

### Step 3: Update JavaScript
```javascript
// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

function handleFormspreeSubmit(event) {
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

## Current GitHub Pages Setup

### Files to Upload:
- ✅ `index.html` (main page)
- ✅ `styles.css` (styling)
- ✅ `script.js` (functionality)
- ✅ `contact-handler.php` (won't work on GitHub Pages)
- ✅ All image files

### Files to Remove/Modify:
- ❌ `contact-handler.php` (not needed with Formspree)
- ✅ Update form action to use Formspree

---

## Quick Start (Formspree Method):

1. **Set up Formspree account** (2 minutes)
2. **Get your form ID** from Formspree dashboard
3. **Replace `YOUR_FORM_ID`** in `index.html` with your actual ID
4. **Push to GitHub** and enable Pages
5. **Test your live site** - form will work immediately!

---

## Troubleshooting

### Form Not Working?
- Check that you replaced `YOUR_FORM_ID` with actual Formspree ID
- Verify Formspree form is set to receive emails at `hello@raidii.com`
- Check browser console for errors

### GitHub Pages Not Updating?
- Wait 5-10 minutes for GitHub Pages to rebuild
- Check repository Settings → Pages for build status
- Ensure files are in the correct branch

### Still Having Issues?
- Use browser developer tools to check for JavaScript errors
- Verify all file paths are correct
- Test form submission and check Formspree dashboard

Your contact form will work perfectly on GitHub Pages once you set up Formspree!
