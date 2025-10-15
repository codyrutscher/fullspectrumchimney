# Elite Chimney Services - Next.js Website

A modern, feature-rich chimney services website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✅ **Responsive Design** - Mobile-first, fully responsive across all devices
✅ **Smooth Animations** - Framer Motion animations and 3D effects
✅ **Floating Widget** - Call, Text, and Chat functionality
✅ **Social Media Feed** - Instagram & Facebook integration ready
✅ **Booking System** - Online appointment scheduling
✅ **Contact Forms** - Customizable contact forms
✅ **Reviews Section** - Connected to Google Business Profile
✅ **GBP Posts** - Latest updates and news section
✅ **CTAs Everywhere** - Call-to-action on every section
✅ **5+ Pages** - Home, About, Services (with sub-pages), Gallery, Contact, Booking
✅ **Dynamic Interactions** - Hover effects, scroll animations, transitions

## Pages Structure

```
/                    - Home (Hero, Services, Why Choose Us, Reviews, GBP Posts, Social Feed)
/about              - About Us
/services/cleaning  - Chimney Cleaning
/services/inspection - Chimney Inspection
/services/repair    - Chimney Repair
/services/installation - Chimney Installation
/services/fireplace - Fireplace Services
/gallery            - Work Gallery
/contact            - Contact Form
/booking            - Appointment Scheduling
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Drei
- **Icons**: Lucide React
- **Carousel**: Embla Carousel

## Getting Started

### Installation

```bash
cd chimney-services
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Update Contact Information

Edit the following files:
- `components/Footer.tsx` - Footer contact info
- `components/Navbar.tsx` - Navigation
- `app/contact/page.tsx` - Contact page details

### 2. Connect Social Media Feed

To connect real social media feeds:
- Instagram: Use Instagram Basic Display API
- Facebook: Use Facebook Graph API
- Update `components/home/SocialFeed.tsx`

### 3. Connect Google Business Profile

For reviews and posts:
- Use Google My Business API
- Update `components/home/ReviewsSection.tsx`
- Update `components/home/GBPPostsSection.tsx`

### 4. Add Chat Bot

Replace the chat widget in `components/FloatingWidget.tsx` with:
- Intercom
- Drift
- Tawk.to
- WhatsApp Business API

### 5. Booking System Integration

Connect to a real booking system:
- Calendly
- Acuity Scheduling
- Custom backend API
- Update `app/booking/page.tsx`

### 6. Update Images

Replace placeholder images with real photos:
- Use high-quality images (1920x1080 recommended)
- Optimize images with Next.js Image component
- Update image URLs throughout the site

### 7. SEO Optimization

Update metadata in each page:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
};
```

### 8. Color Scheme

Customize colors in `app/globals.css`:
```css
:root {
  --primary: 14 100% 57%; /* Orange */
  /* Add your brand colors */
}
```

## Features to Implement

### Social Media Integration
```bash
npm install react-instagram-embed react-facebook
```

### WhatsApp Integration
Update `components/FloatingWidget.tsx`:
```typescript
onClick={() => window.open('https://wa.me/1234567890', '_blank')}
```

### Analytics
```bash
npm install @vercel/analytics
```

### Form Handling
```bash
npm install react-hook-form zod
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean

## Performance Optimizations

- ✅ Image optimization with Next.js Image
- ✅ Code splitting with dynamic imports
- ✅ Lazy loading for animations
- ✅ Optimized fonts with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use for your projects!

## Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js
