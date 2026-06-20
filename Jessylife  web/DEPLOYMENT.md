# Deployment Guide - JessyLife Clinic Website

## ✅ Pre-Deployment Checklist

### File Structure
- ✅ All image paths use `assets/` prefix
- ✅ HTML file properly linked to CSS and JavaScript
- ✅ All assets are in the `assets/` folder
- ✅ No console errors or warnings

### Required Assets
Before deploying, ensure these image files exist in the `assets/` folder:
- `j.logo.jpeg` - Clinic logo
- `pic1.jpeg` - Nursing Care Services
- `pic2.jpeg` - Orthopedic Clinic
- `pic3.jpeg` - Stroke & Physiotherapy
- `pic4.jpeg` - Occupational Therapy
- `pic5.jpeg` - Neurosurgery Clinic
- `pic6.jpeg` - Dietitian Services

## 🚀 Hosting Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the main branch
3. Go to Settings → Pages
4. Select "Deploy from a branch" 
5. Choose `main` branch
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the project folder
4. Your site will be live instantly

### Option 3: Vercel (Free)
1. Go to vercel.com
2. Click "Create New Project"
3. Import from Git or upload files
4. Your site will be live in seconds

### Option 4: Traditional Hosting (Shared/VPS)
1. Upload all files via FTP to your hosting server
2. Ensure index.html is in the root directory
3. Check that all file permissions are correct (644 for files, 755 for folders)

## 📋 Files to Upload

Upload these files to your hosting server:
```
/
├── index.html
├── main.js
├── style.css
├── README.md
├── assets/
│   ├── j.logo.jpeg
│   ├── pic1.jpeg
│   ├── pic2.jpeg
│   ├── pic3.jpeg
│   ├── pic4.jpeg
│   ├── pic5.jpeg
│   ├── pic6.jpeg
│   └── logo.svg
└── tools/
    └── validate_html.py
```

## 🔍 Post-Deployment Verification

After deploying, verify:
1. ✅ Homepage loads correctly
2. ✅ All images display properly
3. ✅ Slideshow works (auto-rotates and manual controls)
4. ✅ Responsive design works on mobile
5. ✅ Navigation menu toggles on mobile
6. ✅ Forms are functional
7. ✅ WhatsApp links work
8. ✅ Smooth scrolling works
9. ✅ Map loads correctly
10. ✅ No console errors (F12 → Console tab)

## 🌐 Domain Setup

To use a custom domain:
1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Update nameservers or DNS records to point to your hosting
3. Configure SSL certificate (HTTPS) - most platforms offer free SSL

## ⚙️ SEO & Performance

The site is already optimized with:
- ✅ Proper meta tags
- ✅ Semantic HTML structure
- ✅ Accessibility features (WCAG AA compliant)
- ✅ Mobile responsive design
- ✅ Optimized CSS and JavaScript

## 📱 Mobile Testing

Test on these devices:
- iPhone (various sizes)
- Android phones
- Tablets
- Desktop browsers

Use Chrome DevTools (F12) for responsive testing.

## 🐛 Troubleshooting

### Images not loading
- Check that all images are in the `assets/` folder
- Verify file names match exactly (case-sensitive)
- Check file permissions are readable

### Form not working
- Ensure JavaScript is enabled
- Check that WhatsApp phone number is correct: +233201300714

### Slow loading
- Optimize images (compress JPEG files)
- Consider enabling GZIP compression on server
- Use a CDN for faster delivery

## 📞 Support

For hosting-specific issues, contact your hosting provider's support team.

---

**Last Updated**: 2026-06-20  
**Status**: Ready for Deployment ✅
