# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   cd chimney-services
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Essential Customizations

### 1. Update Site Information

Edit `config/site.ts`:
```typescript
export const siteConfig = {
  name: "Your Business Name",
  contact: {
    phone: "(555) 123-4567",
    email: "your@email.com",
    // ... more settings
  }
};
```

### 2. Environment Variables

Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Then update with your actual values.

### 3. Replace Images

Update image URLs in:
- Home page sections
- Service pages
- Gallery page
- About page

Use your own images or stock photos from:
- Unsplash
- Pexels
- Your own photography

### 4. Update Colors

Edit `app/globals.css` to match your brand:
```css
:root {
  --primary: 14 100% 57%; /* Your primary color */
}
```

Or update Tailwind classes throughout components:
- `bg-orange-600` → `bg-your-color-600`
- `text-orange-600` → `text-your-color-600`

## Feature Integration

### Google Business Profile Reviews

1. Get API credentials from Google Cloud Console
2. Enable Google My Business API
3. Update `components/home/ReviewsSection.tsx`

```typescript
// Example API call
const fetchReviews = async () => {
  const response = await fetch(
    `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`
  );
  return response.json();
};
```

### Social Media Feed

#### Instagram
```bash
npm install react-instagram-embed
```

Update `components/home/SocialFeed.tsx`:
```typescript
import InstagramEmbed from 'react-instagram-embed';

<InstagramEmbed
  url='https://www.instagram.com/p/your-post-id/'
  maxWidth={320}
/>
```

#### Facebook
```bash
npm install react-facebook
```

### WhatsApp Integration

Update `components/FloatingWidget.tsx`:
```typescript
const whatsappNumber = "1234567890";
const message = "Hi, I'd like to schedule a service";

onClick={() => {
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}}
```

### Chat Bot Integration

#### Option 1: Intercom
```bash
npm install react-use-intercom
```

#### Option 2: Tawk.to
Add script to `app/layout.tsx`:
```typescript
<Script id="tawk-to">
  {`
    var Tawk_API=Tawk_API||{};
    // Tawk.to script
  `}
</Script>
```

### Booking System

#### Option 1: Calendly
```bash
npm install react-calendly
```

```typescript
import { InlineWidget } from "react-calendly";

<InlineWidget url="https://calendly.com/your-link" />
```

#### Option 2: Custom Backend
Create API routes in `app/api/booking/route.ts`

### Form Handling

#### Using Formspree
```typescript
<form action="https://formspree.io/f/your-form-id" method="POST">
  {/* form fields */}
</form>
```

#### Using React Hook Form
```bash
npm install react-hook-form zod @hookform/resolvers
```

### Analytics

#### Google Analytics
```bash
npm install @next/third-parties
```

Update `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use Next.js Image component

2. **Enable Caching**
   - Configure CDN
   - Set cache headers

3. **Lazy Load Components**
   ```typescript
   const Component = dynamic(() => import('./Component'), {
     loading: () => <p>Loading...</p>
   });
   ```

## SEO Checklist

- [ ] Update metadata in all pages
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Configure Open Graph tags
- [ ] Add structured data (JSON-LD)
- [ ] Submit to Google Search Console

## Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build test
npm run build
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npm run type-check

# Check for unused dependencies
npm prune
```

## Support

Need help? Check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

Happy building! 🚀
