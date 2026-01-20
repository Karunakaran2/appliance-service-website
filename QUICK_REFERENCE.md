# 🚀 Quick Reference Guide

## 📦 Installation (First Time)

```bash
npm install
```

## 🏃 Run Development Server

```bash
npm run dev
```
Opens at: http://localhost:3000

## 🔨 Build for Production

```bash
npm run build
```
Output: `dist/` folder

## 📝 Essential Files to Edit

### 1. Business Information
**File**: `src/data/siteConfig.ts`
- Company name
- Phone, email, WhatsApp
- Address
- Social media links
- Service areas

### 2. Services
**File**: `src/data/servicesData.ts`
- Add/remove services
- Update descriptions
- Modify features

### 3. Testimonials
**File**: `src/data/testimonialsData.ts`
- Customer reviews
- Ratings
- Locations

### 4. FAQs
**File**: `src/data/faqData.ts`
- Questions & answers
- Categories

### 5. Colors/Theme
**File**: `tailwind.config.js`
- Primary color
- Secondary color
- Font families

## 🎨 Customize Branding

### Change Logo
**File**: `src/components/common/Header.tsx`
Line ~25: Replace 🔧 emoji with:
```tsx
<img src="/logo.png" alt="Logo" />
```

### Update Favicon
Replace: `public/vite.svg`

### Change Site Title
**File**: `index.html`
Line ~7: Update `<title>` tag

## 📧 Setup Contact Forms

1. Go to https://formspree.io
2. Sign up (free)
3. Create new form
4. Copy form ID
5. Update `src/data/siteConfig.ts`:
   ```typescript
   formspreeEndpoint: 'YOUR_FORM_ID'
   ```

## 🖼️ Add Images

**Folder**: `src/assets/images/placeholders/`

Required images:
- `washing-machine.jpg`
- `ac-service.jpg`
- `refrigerator.jpg`
- `tv-repair.jpg`
- `microwave.jpg`
- `water-purifier.jpg`
- `technician.jpg`

## 📱 Test Checklist

- [ ] All pages load (Home, About, Services, Contact, FAQ)
- [ ] Contact form works
- [ ] Phone/WhatsApp buttons work
- [ ] Dark mode toggle works
- [ ] Mobile menu works
- [ ] All service links work
- [ ] Scroll animations work
- [ ] Contact modal appears

## 🚀 Deploy to Netlify

1. Push to GitHub
2. Login to Netlify
3. "New site from Git"
4. Select repository
5. Build: `npm run build`
6. Publish: `dist`
7. Deploy!

## 🐛 Common Issues

**Modal not showing?**
- Clear browser session storage
- Hard refresh (Ctrl+Shift+R)

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Forms not working?**
- Check Formspree ID is set
- Check browser console
- Verify email in Formspree dashboard

## 📊 Project Structure

```
src/
├── components/    → UI components
│   ├── common/   → Header, Footer, etc.
│   └── home/     → Homepage sections
├── pages/        → Full pages
├── data/         → Content & config
├── theme/        → Styling
└── routes/       → Navigation
```

## 🎯 Key Features

✅ 5 Pages (Home, About, Services, Contact, FAQ)
✅ Dark/Light Mode
✅ Contact Modal
✅ Mobile Responsive
✅ WhatsApp Integration
✅ Click-to-Call
✅ Service Showcase
✅ Testimonials
✅ FAQ System
✅ Animated Sections

## 📞 Support Files

- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Step-by-step setup
- `PROJECT_OVERVIEW.md` - Feature details
- `QUICK_REFERENCE.md` - This file

## ⚡ Quick Commands

```bash
# Install
npm install

# Run dev server
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## 🎨 Customization Priority

1. ✅ Update `siteConfig.ts` (business info)
2. ✅ Setup Formspree
3. ✅ Add real images
4. ✅ Customize services
5. ✅ Update testimonials
6. ✅ Modify FAQs
7. ✅ Change colors (optional)
8. ✅ Add logo (optional)

## 📈 Ready to Launch?

- [ ] All content updated
- [ ] Images added
- [ ] Contact info correct
- [ ] Forms tested
- [ ] Mobile tested
- [ ] Social links updated
- [ ] Formspree configured
- [ ] Domain configured

---

**Need Help?** Check README.md or SETUP_GUIDE.md

**Ready to Code?** `npm run dev`

**Ready to Deploy?** `npm run build`
