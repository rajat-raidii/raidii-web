// Formspree Setup Helper
// Run this in your browser console to test the form setup

console.log('🚀 Raidii Contact Form Setup Helper');
console.log('=====================================');

// Check if form exists
const form = document.querySelector('.contact-form');
if (form) {
    console.log('✅ Contact form found');
    
    // Check form action
    const action = form.getAttribute('action');
    if (action && action.includes('formspree.io')) {
        if (action.includes('YOUR_FORM_ID')) {
            console.log('❌ Form action needs to be updated with your Formspree ID');
            console.log('📝 Current action:', action);
            console.log('🔧 Replace YOUR_FORM_ID with your actual Formspree form ID');
        } else {
            console.log('✅ Form action looks good:', action);
        }
    } else {
        console.log('❌ Form action not set to Formspree');
    }
    
    // Check form method
    const method = form.getAttribute('method');
    if (method === 'POST') {
        console.log('✅ Form method is POST');
    } else {
        console.log('❌ Form method should be POST');
    }
    
    // Check form handler
    const onsubmit = form.getAttribute('onsubmit');
    if (onsubmit && onsubmit.includes('handleFormspreeSubmit')) {
        console.log('✅ Form handler is set correctly');
    } else {
        console.log('❌ Form handler should be handleFormspreeSubmit');
    }
    
} else {
    console.log('❌ Contact form not found');
}

console.log('\n📋 Next Steps:');
console.log('1. Go to https://formspree.io');
console.log('2. Sign up and create a new form');
console.log('3. Set email to: hello@raidii.com');
console.log('4. Copy your form endpoint URL');
console.log('5. Replace YOUR_FORM_ID in index.html with your actual form ID');
console.log('6. Deploy to GitHub Pages');
console.log('7. Test your live site!');

console.log('\n🎉 Your contact form will work perfectly on GitHub Pages!');
