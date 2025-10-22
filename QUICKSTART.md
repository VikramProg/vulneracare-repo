# Quick Start Guide

Get your company landing page up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
cd company-landing-page
npm install
```

## Step 2: Customize Your Content

Edit `/public/data.json` with your company information:

```json
{
  "company": {
    "name": "Your Company Name",
    "tagline": "Your Tagline",
    "phone": "+1 (555) 123-4567",
    "email": "info@yourcompany.com",
    "address": "Your Address"
  }
}
```

Update:
- Company details
- Services
- About section
- Social media links

## Step 3: Test Locally

```bash
npm run dev
```

Visit http://localhost:5173 to see your site.

## Step 4: Build for Production

```bash
npm run build
```

## Step 5: Deploy to GitHub Pages

### Quick Deploy:
```bash
npm run deploy
```

### Then enable GitHub Pages:
1. Go to your repository settings
2. Click "Pages"
3. Select "gh-pages" branch
4. Click "Save"

Your site will be live at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Important: Update Base Path

Before deploying, edit `vite.config.js`:

```js
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

Replace `YOUR-REPO-NAME` with your actual repository name.

## What's Included

- Responsive header with navigation
- Hero section with text slideshow
- Services carousel
- About section with images
- Contact modal
- Footer with map
- Mobile-friendly design
- Blue and white professional theme

## Next Steps

1. **Customize Colors**: Edit `/src/index.css`
2. **Add Your Logo**: Replace text logo in data.json
3. **Update Images**: Add to `/public` folder or use URLs
4. **Customize Layout**: Modify components in `/src/components`

## Need Help?

- **Full Instructions**: See [README.md](./README.md)
- **Customization**: See [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

## Troubleshooting

**Port already in use?**
```bash
# Kill the process and try again
npm run dev
```

**Build errors?**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Site not loading after deploy?**
- Check the base path in vite.config.js
- Wait 2-3 minutes for deployment
- Clear browser cache

That's it! You're ready to go. Enjoy your new landing page!
