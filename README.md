# Magdalena Mikurda - Professional Manicure Training Landing Page

A modern, responsive landing page for Magdalena Mikurda's professional manicure training services.

## Features

- Responsive design that works on all devices
- Modern and clean UI with sophisticated GSAP animations
- Scroll-triggered animations that enhance user experience
- Interactive elements including animated counters and smooth scrolling
- Optimized for performance and SEO
- Ready for GitHub Pages deployment

## Project Structure

```
magdalena-mikurda-landing-page/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
└── assets/
    └── images/             # Directory for images
```

## Deployment Instructions

### Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to the repository settings on GitHub
3. Scroll down to the "GitHub Pages" section
4. Select the main branch as the source
5. Click Save
6. Your site will be published at `https://[your-username].github.io/magdalena-mikurda-landing-page/`

## Customization Guide

### Replacing Placeholder Images

The landing page currently uses placeholder elements that need to be replaced with actual images:

1. **Profile Image**: Replace the placeholder in the About section with Magdalena's actual photo
   - Create an image named `magdalena-profile.jpg`
   - Place it in the `assets/images/` directory
   - Update the HTML in the About section to use the image

2. **Gallery Images**: Replace the placeholder colored boxes with actual nail art images
   - Create 6 images named `nail-art-1.jpg` through `nail-art-6.jpg`
   - Place them in the `assets/images/` directory
   - Update the HTML in the Gallery section to use these images

3. **Background Images**: Replace the gradient backgrounds with actual images
   - Create images named `hero-bg.jpg` and `courses-bg.jpg`
   - Place them in the `assets/images/` directory
   - The CSS is already set up to use these images once they exist

### Updating Content

- Update the text in `index.html` to reflect Magdalena's actual experience, services, and contact information
- Adjust the counter values in the Experience section to match actual statistics
- Update the link in the Courses section to point to the actual online training platform

### Customizing Animations

The website uses GSAP (GreenSock Animation Platform) for all animations:

- **Scroll-Triggered Animations**: Most animations are triggered when elements come into view using GSAP's ScrollTrigger plugin. These can be customized in the `main.js` file.
- **Hero Section**: The hero section uses a timeline-based animation sequence that can be adjusted for timing and effects.
- **Counter Animations**: The counter elements in the Experience section use GSAP to animate counting up to their target values.
- **Section Headers**: All section headers have special animations for both the text and underline elements.
- **Pulse Effect**: The "Explore Online Trainings" button uses a GSAP animation for its pulsing effect.

To modify animations:
1. Find the relevant animation in `js/main.js`
2. Adjust parameters like `duration`, `ease`, `delay`, or animation properties
3. For ScrollTrigger animations, you can modify when they trigger by changing the `start` and `toggleActions` parameters

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform) for advanced animations
- GSAP ScrollTrigger for scroll-based animations
- Font Awesome for icons
- Google Fonts for typography

## License

This project is available for Magdalena Mikurda's use. All rights reserved.

## Contact

For any questions or customization requests, please contact the developer.