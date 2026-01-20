# 🚀 Quick Setup Guide

## Prerequisites
- Node.js 18 or higher installed
- npm (comes with Node.js)

## Step-by-Step Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Formspree (Important!)

**Option A: Get a Free Formspree Account**
1. Go to https://formspree.io
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint ID (looks like: `abc123xyz`)

**Option B: Skip for Now (Forms won't work)**
- You can skip this and set it up later
- Forms will show errors until configured

Update in `src/data/siteConfig.ts`:
```typescript
formspreeEndpoint: 'YOUR_FORMSPREE_ID', // Replace with your actual ID
```

### 3. Customize Your Business Info

Edit `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  siteName: 'Your Business Name Here',
  tagline: 'Your tagline',
  
  contact: {
    phone: '+91 1234567890',        // ← Your phone number
    email: 'your@email.com',         // ← Your email
    whatsapp: '+91 1234567890',      // ← Your WhatsApp
    address: 'Your City, State',     // ← Your address
  },
  
  // Update these with your social media links
  social: {
    facebook: 'https://facebook.com/yourpage',
    twitter: 'https://twitter.com/yourhandle',
    instagram: 'https://instagram.com/yourhandle',
    linkedin: 'https://linkedin.com/company/yourcompany',
  },
};
```

### 4. Update Services (Optional)

Edit `src/data/servicesData.ts` to add/remove/modify services.

### 5. Run Development Server

```bash
npm run dev
```

Your website will open at: http://localhost:3000

### 6. Test the Website

✅ **Things to Check:**
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact modal appears (after 2 seconds)
- [ ] Dark/light mode toggle works
- [ ] Mobile menu works on small screens
- [ ] All pages (About, Services, Contact, FAQ) load
- [ ] Click on sticky call bar (on mobile view)

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#YOUR_PRIMARY_COLOR', // Main brand color
  },
  secondary: {
    500: '#YOUR_SECONDARY_COLOR', // Accent color
  },
}
```

### Add Your Logo
Replace the emoji (🔧) in `src/components/common/Header.tsx` with:
```tsx
<img src="/your-logo.png" alt="Logo" className="w-12 h-12" />
```

### Add Real Images
Place images in `src/assets/images/placeholders/` and update references in:
- `src/data/servicesData.ts`
- Component files

## 🚀 Build for Production

```bash
npm run build
```

Files will be in the `dist/` folder - ready to deploy!

## 📤 Deploy to Netlify (Free & Easy)

1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

Your site will be live in minutes! 🎉

## Deploy to Vercel (Alternative)

1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel auto-detects Vite settings
4. Click "Deploy"

## 🐛 Troubleshooting

**Problem: Modal doesn't show**
- Clear browser cache/session storage
- Check browser console for errors

**Problem: Forms don't work**
- Verify Formspree endpoint is configured
- Check Formspree dashboard for submissions

**Problem: Build fails**
- Run `npm install` again
- Delete `node_modules` and reinstall
- Check Node.js version (must be 18+)

**Problem: Images not showing**
- Ensure images are in correct folder
- Check file paths in code
- Verify image file extensions match

## 📞 Need Help?

- Check README.md for detailed docs
- Review FAQ page on the website
- Check console for error messages
- Verify all configuration files

## ✅ Pre-Launch Checklist

Before going live:
- [ ] Replace all placeholder content
- [ ] Add real images
- [ ] Update contact information
- [ ] Configure Formspree
- [ ] Test contact forms
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify social media links
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Test dark/light mode
- [ ] Check SEO meta tags
- [ ] Verify all services are listed
- [ ] Proofread all text content

---

**Congratulations! Your website is ready to launch! 🎊**

For detailed documentation, see README.md
