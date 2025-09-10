# Raidii Ally Company Website

A modern, responsive company website built with HTML, CSS, and JavaScript. This is a simple, static website that can be easily deployed to any web hosting service.

## Features

- **Modern Design**: Clean, professional layout with dark theme and blue accents
- **Responsive**: Fully responsive design that works on all devices
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: Subtle animations and hover effects
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## File Structure

```
company-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Deployment

This website can be deployed to any static web hosting service:

### Option 1: GitHub Pages
1. Upload the files to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch and folder
4. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop the `company-website` folder to Netlify
2. Your site will be automatically deployed and available at a Netlify URL

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the company-website directory
3. Follow the prompts to deploy

### Option 4: Traditional Web Hosting
1. Upload all files to your web hosting provider's public_html or www directory
2. Ensure `index.html` is in the root directory
3. Your site will be available at your domain

## Customization

### Company Information
- Edit the company name, description, and contact information in `index.html`
- Update the logo and branding in the header section
- Modify the solutions/services in the solutions section

### Styling
- Customize colors, fonts, and layout in `styles.css`
- The main color scheme uses blue (#3b82f6) and green (#10b981) accents
- Background uses dark blue gradients

### Contact Form
- The contact form currently shows a success message after submission
- To make it functional, integrate with a form service like:
  - Formspree
  - Netlify Forms
  - EmailJS
  - Custom backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized for fast loading
- Minimal dependencies (only Google Fonts)
- Compressed and minified CSS and JavaScript
- Responsive images and efficient animations

## License

This project is open source and available under the MIT License.
