# 🚀 Quick Start Guide

Get your Elite Chimney Services website up and running in minutes!

## Step 1: Install Dependencies

```bash
cd chimney-services
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## Step 3: Customize Your Site

### Update Business Information

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Business Name",
  contact: {
    phone: "(555) 123-4567",
    email: "your@email.com",
    address: {
      street: "123 Main Street",
      city: "Your City",
      state: "ST",
      zip: "12345",
    },
  },
  // ... more settings
};
```

### Change Colors

Edit `app/globals.css` or search and replace throughout:
- `orange-600` → your primary color
- `red-600` → your secondary color

### Replace Images

Search for `images.unsplash.com` and replace with your own images.

## Step 4: Test Your Site

```bash
npm run build
npm start
```

## Step 5: Deploy

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live! 🎉

## What's Included

✅ **11 Pages**
- Home (with 7+ sections)
- About
- 5 Service pages
- Gallery
- Contact
- Booking

✅ **Key Features**
- Floating call/text/chat widget
- Social media feed integration
- Reviews section
- Booking system
- Contact forms
- Smooth animations
- Mobile responsive
- SEO optimized

## Next Steps

1. **Add Real Content**
   - Replace placeholder text
   - Add your own images
   - Update service descriptions

2. **Connect Integrations**
   - Google Business Profile
   - Social media APIs
   - Booking system
   - Analytics

3. **Customize Design**
   - Adjust colors
   - Modify layouts
   - Add your logo

4. **Test Everything**
   - Test on mobile devices
   - Check all forms
   - Verify all links

## Need Help?

- 📖 Read `README.md` for detailed documentation
- 🔧 Check `SETUP.md` for integration guides
- 📊 Review `PROJECT_OVERVIEW.md` for feature details

## Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Tips

💡 **Performance**: Images are optimized automatically by Next.js

💡 **SEO**: Update metadata in each page's `metadata` export

💡 **Mobile**: Test on real devices, not just browser dev tools

💡 **Forms**: Connect to a backend or use services like Formspree

## Support

Questions? Check the documentation or open an issue!

---

**Happy building!** 🎉
