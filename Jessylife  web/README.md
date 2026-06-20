# JessyLife Physiotherapy & Rehabilitation Clinic

## 📋 Overview
JessyLife is a modern, accessible website for a physiotherapy and rehabilitation clinic. The site is designed with a focus on accessibility, user experience, and mobile responsiveness. It features a clean, professional interface that highlights services, allows online booking, and provides essential clinic information.

## ✨ Features

### 🎨 Design & Accessibility
- **WCAG AA Compliant**: High contrast ratios (4.5:1 for text) optimized for people with vision impairments
- **Colorblind-Friendly**: Teal and orange color scheme safe for colorblind users
- **Eye-Friendly**: Soft off-white backgrounds to reduce glare and eye strain
- **Responsive Design**: Fully mobile-friendly interface
- **Skip Link**: Accessibility feature allowing users to jump directly to main content

### 📱 Core Sections
1. **Header/Navigation**: Sticky nav bar with logo, responsive hamburger menu
2. **Services**: Showcase of physiotherapy services offered
3. **About**: Clinic information and details
4. **How It Works**: Step-by-step guide for customers
5. **Booking**: Online appointment booking form with validation
6. **Location Map**: Find the clinic on a map
7. **Contact**: Contact information and form

### 🤖 Interactive Features
- **WhatsApp Integration**: Dynamic WhatsApp link that hides when map section is visible
- **Form Validation**: Real-time booking form validation
- **Date Validation**: Prevents booking appointments in the past
- **Mobile Menu**: Responsive hamburger navigation toggle

## 📁 Project Structure

```
.
├── index.html              # Main HTML file
├── main.js                 # JavaScript functionality
├── style.css               # Styling and responsive design
├── README.md               # Project documentation
├── DEPLOYMENT.md           # Hosting and deployment guide
├── .htaccess               # Apache server configuration
├── web.config              # IIS server configuration
├── .gitignore              # Git ignore file
├── assets/                 # Images and media files
│   ├── j.logo.jpeg         # Clinic logo
│   ├── pic1.jpeg           # Service image 1
│   ├── pic2.jpeg           # Service image 2
│   ├── pic3.jpeg           # Service image 3
│   ├── pic4.jpeg           # Service image 4
│   ├── pic5.jpeg           # Service image 5
│   ├── pic6.jpeg           # Service image 6
│   └── logo.svg            # Alternative logo format
└── tools/
    └── validate_html.py    # HTML validation script
```

## 🎯 Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build process required - pure HTML/CSS/JavaScript

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. No additional dependencies needed!

## 🛠️ Technical Stack
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with CSS variables for easy customization
- **Vanilla JavaScript**: No frameworks - lightweight and fast

## 🎨 Color Scheme

The site uses an accessible, colorblind-safe color palette:

| Color | Use | Hex Code |
|-------|-----|----------|
| Teal | Primary brand color | #005a6b |
| Orange | Accent highlights | #d97706 |
| Dark | Text and headings | #1a2332 |
| Light | Background | #f5f7fa |

## � Deployment & Hosting

This site is ready for immediate deployment to any web hosting platform!

### Quick Deploy Options
- **GitHub Pages** - Free, deploy with one push
- **Netlify** - Free tier, drag & drop deployment
- **Vercel** - Free, automatic deployments
- **Traditional Hosting** - Apache/IIS servers via FTP

For complete deployment instructions, see **[DEPLOYMENT.md](DEPLOYMENT.md)**.

### Pre-Deployment Checklist
✅ All image paths use `assets/` prefix  
✅ HTML properly linked to CSS and JavaScript  
✅ No dependencies or build process required  
✅ HTTPS-ready with security headers configured  
✅ Mobile responsive and accessible  

## �📝 Customization

### Update Content
Edit the HTML file directly in `index.html` to:
- Change clinic name, logo, and branding
- Update services offered
- Modify contact information
- Adjust booking form fields

### Styling
Modify `style.css` to:
- Change colors (update CSS variables in `:root`)
- Adjust layouts and spacing
- Customize fonts and typography
- Adapt to your specific needs

### Functionality
Edit `main.js` to:
- Add/modify form handling logic
- Integrate with booking systems
- Add analytics or other features

## ✅ Validation

Use the included HTML validation tool:
```bash
python tools/validate_html.py
```

## 🚀 Future Enhancements
- Backend integration for appointment bookings
- Patient management system
- Online payment processing
- Multi-language support
- Blog/resources section

## 📞 Support
For issues, questions, or feature requests, please contact the development team or clinic directly.

---

**Created for JessyLife Physiotherapy & Rehabilitation Clinic**  
Optimized for accessibility and user experience.
