# Customization Guide

This guide will help you customize the landing page for your company.

## Quick Start Customization

The easiest way to customize your site is by editing the `/public/data.json` file. This single file contains all the text content, links, and configuration for the entire website.

## Editing data.json

### Company Information

```json
"company": {
  "name": "TechSolutions",           // Your company name
  "tagline": "Your Trusted Partner",  // Your tagline
  "logo": "TS",                       // Logo text (or use image URL)
  "phone": "+1 (555) 123-4567",      // Contact phone
  "email": "info@company.com",        // Contact email
  "address": "123 Street, City",      // Physical address
  "mapUrl": "..."                     // Google Maps embed URL
}
```

### Hero Section

The hero section displays rotating text over a background image:

```json
"hero": {
  "backgroundImage": "https://...",   // Background image URL
  "slides": [
    {
      "id": 1,
      "title": "Main Headline",       // Large title text
      "subtitle": "Supporting text"   // Smaller subtitle
    }
    // Add more slides (text will rotate every 4 seconds)
  ]
}
```

### Services

Each service appears as a card in the carousel:

```json
"services": [
  {
    "id": 1,
    "title": "Service Name",
    "icon": "🌐",                      // Emoji or image URL
    "shortDescription": "Brief text",  // Shows on card
    "fullDescription": "Detailed...",  // Shows in modal
    "features": [                      // List of key features
      "Feature 1",
      "Feature 2"
    ]
  }
]
```

**Tips:**
- Keep shortDescription under 60 characters
- Add 4-6 features per service
- Use emojis for icons or replace with image URLs

### About Section

```json
"about": {
  "title": "About Us",
  "description": "Main description",   // First paragraph
  "mission": "Our mission statement",  // Highlighted quote
  "values": [                          // Core values grid
    {
      "title": "Innovation",
      "description": "What this means"
    }
  ],
  "stats": [                           // Statistics display
    {
      "number": "500+",
      "label": "Projects"
    }
  ],
  "images": [                          // Collage images
    "https://...",
    "https://...",
    "https://..."
  ]
}
```

### Social Links

```json
"socialLinks": {
  "facebook": "https://facebook.com/yourpage",
  "twitter": "https://twitter.com/yourhandle",
  "linkedin": "https://linkedin.com/company/yourcompany",
  "instagram": "https://instagram.com/yourhandle"
}
```

## Using Your Own Images

### Option 1: External Images (Unsplash, etc.)

Simply use the full URL in data.json:
```json
"backgroundImage": "https://images.unsplash.com/photo-..."
```

### Option 2: Local Images

1. Place your images in the `/public` folder:
   ```
   public/
   ├── data.json
   ├── logo.png
   ├── hero-bg.jpg
   └── about-1.jpg
   ```

2. Reference them in data.json with a leading slash:
   ```json
   "backgroundImage": "/hero-bg.jpg",
   "images": ["/about-1.jpg", "/about-2.jpg"]
   ```

## Changing Colors

Edit `/src/index.css` to change the color scheme:

```css
:root {
  --primary-blue: #2563eb;        /* Main brand color */
  --primary-blue-dark: #1e40af;   /* Darker shade */
  --primary-blue-light: #3b82f6;  /* Lighter shade */
  --bg-white: #ffffff;            /* Background */
  --bg-light: #f8fafc;            /* Light background */
  --text-dark: #1e293b;           /* Main text */
  --text-gray: #475569;           /* Secondary text */
}
```

**Popular Color Schemes:**

**Green & White (Trust, Growth):**
```css
--primary-blue: #10b981;
--primary-blue-dark: #059669;
--primary-blue-light: #34d399;
```

**Purple & White (Creative, Modern):**
```css
--primary-blue: #8b5cf6;
--primary-blue-dark: #7c3aed;
--primary-blue-light: #a78bfa;
```

**Orange & White (Energy, Confidence):**
```css
--primary-blue: #f59e0b;
--primary-blue-dark: #d97706;
--primary-blue-light: #fbbf24;
```

## Customizing the Logo

### Text Logo (Current)
The logo displays text initials. Change in data.json:
```json
"logo": "AC"  // Your company initials
```

### Image Logo
To use an image logo instead:

1. Add your logo image to `/public/logo.png`

2. Edit `/src/components/Header.jsx` and `/src/components/Footer.jsx`:
   ```jsx
   // Replace this:
   <div className="logo-icon">{data.company.logo}</div>

   // With this:
   <img src="/logo.png" alt="Logo" className="logo-icon" />
   ```

3. Update CSS in the respective component CSS files to size appropriately.

## Changing Fonts

Edit `/src/index.css`:

```css
:root {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

**Popular Font Choices:**

**Modern & Clean:**
```css
font-family: 'Inter', system-ui, sans-serif;
```

**Professional & Traditional:**
```css
font-family: 'Georgia', 'Times New Roman', serif;
```

**Tech & Modern:**
```css
font-family: 'Roboto', 'Helvetica', sans-serif;
```

To use Google Fonts:
1. Add to `/index.html` in the `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
   ```

## Adjusting Animation Speeds

### Hero Text Rotation
Edit `/src/components/Hero.jsx`:
```js
// Change 4000 to your desired milliseconds (e.g., 5000 = 5 seconds)
}, 4000);
```

### Services Carousel
Edit `/src/components/Services.jsx`:
```js
// Change 3000 to your desired milliseconds
}, 3000);
```

## Google Maps Integration

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the `src` URL from the iframe
5. Paste into data.json under `company.mapUrl`

## Removing Sections

To remove a section, simply comment it out in `/src/App.jsx`:

```jsx
return (
  <div className="app">
    <Header data={data} />
    <Hero data={data} />
    <Services data={data} />
    {/* <About data={data} /> */}  // This section won't show
    <Footer data={data} />
  </div>
);
```

## Adding Custom Content

### Adding a New Service

Add a new object to the `services` array in data.json:

```json
{
  "id": 7,
  "title": "Your New Service",
  "icon": "🎯",
  "shortDescription": "Brief description",
  "fullDescription": "Full details about the service...",
  "features": ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Adding More Hero Slides

Add to the `hero.slides` array:

```json
{
  "id": 4,
  "title": "New Headline",
  "subtitle": "New supporting text"
}
```

## Testing Your Changes

After making changes:

1. **Check in development:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173

2. **Test production build:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy when satisfied:**
   ```bash
   npm run deploy
   ```

## Common Issues

**Issue:** Images not loading
- **Solution:** Check URLs are correct and images are in `/public` folder

**Issue:** Text overlapping on mobile
- **Solution:** Reduce text length in data.json or adjust font sizes in CSS

**Issue:** Colors look different
- **Solution:** Clear browser cache or test in incognito mode

**Issue:** Map not showing
- **Solution:** Verify Google Maps embed URL is correct and not blocked

## Need More Help?

- Review the [README.md](./README.md) for general information
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Open an issue on GitHub for specific problems
