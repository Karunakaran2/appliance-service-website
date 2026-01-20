# Home Appliance Service Website

A modern, responsive multi-brand home appliance repair and installation service website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- ✅ **Fully Responsive Design** - Mobile-first approach
- ✅ **Dark/Light Mode** - Theme toggle with persistence
- ✅ **Multi-Page Application** - Home, About, Services, Contact, FAQ
- ✅ **Service Showcase** - Detailed service pages with anchors
- ✅ **Contact Modal** - Auto-popup on first visit with Formspree integration
- ✅ **Sticky Call Bar** - Mobile-friendly quick action bar
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **SEO Optimized** - Semantic HTML and meta tags
- ✅ **Component-Based Architecture** - Reusable and scalable
- ✅ **TypeScript** - Type-safe development
- ✅ **Data-Driven** - Centralized configuration

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first styling
- **Styled Components** - Theme management
- **Framer Motion** - Animations
- **React Router DOM** - Routing
- **Formspree** - Form handling
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── assets/
│   └── images/
│       └── placeholders/
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ContactModal.tsx
│   │   └── StickyCallBar.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── EmergencyCTA.tsx
│   │   ├── AboutSnapshot.tsx
│   │   ├── StatsSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProcessTimeline.tsx
│   │   └── Testimonials.tsx
│   └── services/
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── FAQ.tsx
├── data/
│   ├── servicesData.ts
│   ├── testimonialsData.ts
│   ├── faqData.ts
│   └── siteConfig.ts
├── theme/
│   └── theme.ts
├── routes/
│   └── AppRoutes.tsx
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or extract the project**

2. **Install dependencies**
```bash
npm install
```

3. **Configure Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form
   - Copy your form endpoint ID
   - Update `src/data/siteConfig.ts`:
   ```typescript
   formspreeEndpoint: 'YOUR_FORMSPREE_ID'
   ```

4. **Customize site configuration**
   
   Edit `src/data/siteConfig.ts` to update:
   - Business name
   - Contact information
   - Service areas
   - Social media links

5. **Run development server**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📝 Customization Guide

### Update Business Information

Edit `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  siteName: 'Your Business Name',
  contact: {
    phone: '+91 XXXXXXXXXX',
    email: 'your@email.com',
    whatsapp: '+91 XXXXXXXXXX',
    address: 'Your Address',
  },
  // ... other settings
};
```

### Add/Modify Services

Edit `src/data/servicesData.ts`:

```typescript
export const servicesData: Service[] = [
  {
    id: 1,
    name: 'Service Name',
    slug: 'service-slug',
    icon: '🔧',
    description: 'Service description',
    // ... other properties
  },
];
```

### Customize Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#1a5276', // Your primary color
  },
  secondary: {
    500: '#ff9933', // Your secondary color
  },
}
```

### Add Images

Replace placeholder images in:
- `src/assets/images/placeholders/`

Update image references in components and data files.

## 🎨 Theme

The website supports both light and dark modes:
- Theme preference is saved in localStorage
- Toggle available in header
- Automatic system preference detection

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

## 📊 Key Features Explained

### Contact Modal
- Automatically appears on first visit
- Uses sessionStorage to prevent repeated popups
- Integrated with Formspree for form submissions
- Mobile-friendly design

### Sticky Call Bar
- Fixed bottom bar on mobile devices
- Quick access to Call and WhatsApp
- Hidden on desktop for better UX

### Service Pages
- Individual service sections with anchor links
- Dynamic routing with slugs
- Smooth scroll navigation
- SEO-friendly URLs

### Dark Mode
- System preference detection
- Manual toggle in header
- Persisted across sessions
- Smooth color transitions

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags in index.html
- Descriptive alt texts (when images added)
- Clean URL structure
- Mobile-responsive design

## 📄 License

This project is available for commercial use.

## 🤝 Support

For issues or questions:
- Check the FAQ page
- Review the documentation
- Contact support

## 📈 Future Enhancements

Potential features to add:
- [ ] Google Maps integration
- [ ] Live chat widget
- [ ] Service booking calendar
- [ ] Customer portal
- [ ] Payment gateway integration
- [ ] Review/rating system
- [ ] Blog section
- [ ] Multi-language support

## 🎯 Performance Tips

1. **Optimize images**: Use WebP format and lazy loading
2. **Code splitting**: Implemented via React.lazy
3. **Minimize bundle**: Tree shaking enabled
4. **Cache static assets**: Configure in hosting platform
5. **CDN usage**: For fonts and external resources

## 💡 Development Tips

- Run `npm run lint` to check code quality
- Use TypeScript strictly for better type safety
- Follow the component structure for consistency
- Keep data files separate from UI components
- Test on multiple devices and browsers

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
