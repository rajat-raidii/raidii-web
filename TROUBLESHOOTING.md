# Contact Form Troubleshooting Guide

## Current Error: "Sorry, there was an error sending your message. Please try again."

### Why This Happens:
1. **No PHP Server** - The form tries to submit to `contact-handler.php` but there's no PHP server running
2. **CORS Issues** - Browser blocks requests when testing locally
3. **Server Configuration** - PHP not enabled or configured properly

---

## Quick Fixes (Choose One):

### **Option 1: Use Formspree (Easiest - 2 minutes)**

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create new form
4. Set email to: `hello@raidii.com`
5. Copy your form endpoint (looks like: `https://formspree.io/f/abc123`)
6. Replace `YOUR_FORM_ID` in `index.html` with your actual form ID
7. Test the form - it will work immediately!

**Benefits:**
- ✅ Works immediately
- ✅ No server setup needed
- ✅ Free (50 submissions/month)
- ✅ Spam protection included

---

### **Option 2: Use Netlify Forms (If hosting on Netlify)**

1. Add `netlify` attribute to form:
```html
<form class="contact-form" name="contact" method="POST" netlify netlify-honeypot="bot-field" onsubmit="handleFormspreeSubmit(event)">
    <input type="hidden" name="form-name" value="contact" />
    <div style="display: none;">
        <label>Don't fill this out: <input name="bot-field" /></label>
    </div>
    <!-- rest of form -->
</form>
```

2. Deploy to Netlify
3. Forms work automatically!

---

### **Option 3: Use EmailJS (Client-side only)**

1. Go to [emailjs.com](https://emailjs.com)
2. Create account and email service
3. Get your service ID, template ID, and public key
4. Add to HTML head:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

5. Update JavaScript:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');

function handleFormspreeSubmit(event) {
    event.preventDefault();
    // validation code...
    
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

### **Option 4: Set Up PHP Server (Advanced)**

If you want to use the PHP backend:

1. **Local Development:**
   - Install XAMPP, WAMP, or MAMP
   - Start Apache server
   - Place files in `htdocs` folder
   - Access via `http://localhost/your-folder`

2. **Production Server:**
   - Upload `contact-handler.php` to your web server
   - Ensure PHP is enabled
   - Test the form

3. **Test PHP:**
   - Create `test.php` with: `<?php echo "PHP is working!"; ?>`
   - Access it in browser to confirm PHP works

---

## Current Setup Status:

- ✅ Form validation working
- ✅ Beautiful design implemented
- ❌ Backend not configured (causing the error)

## Recommended Next Steps:

1. **For immediate fix:** Use Formspree (Option 1)
2. **For production:** Choose based on your hosting setup
3. **For development:** Set up local PHP server (Option 4)

The form will work perfectly once you implement any of these solutions!
