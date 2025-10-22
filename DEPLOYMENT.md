# Deployment Guide for GitHub Pages

This guide will help you deploy your company landing page to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your repository pushed to GitHub

## Step-by-Step Deployment

### 1. Update the Base Path

Open `vite.config.js` and update the base path to match your repository name:

```js
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

Replace `YOUR-REPO-NAME` with your actual GitHub repository name.

### 2. Choose Your Deployment Method

## Method A: Automatic Deployment (Recommended)

This method uses GitHub Actions to automatically deploy your site whenever you push to the main branch.

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages with Actions**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Click on "Pages" in the left sidebar
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"

3. **The deployment will start automatically**:
   - Go to the "Actions" tab to see the deployment progress
   - Once complete, your site will be available at:
     `https://YOUR_USERNAME.github.io/YOUR-REPO-NAME/`

### Method B: Manual Deployment

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Deploy using the deploy script**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Under "Build and deployment":
     - Source: Select "Deploy from a branch"
     - Branch: Select "gh-pages" and "/ (root)"
   - Click "Save"

4. **Access your site**:
   - Your site will be available at:
     `https://YOUR_USERNAME.github.io/YOUR-REPO-NAME/`

## Updating Your Site

### For Automatic Deployment:
Simply push your changes to the main branch:
```bash
git add .
git commit -m "Update content"
git push origin main
```

The site will automatically rebuild and redeploy.

### For Manual Deployment:
Run the deploy command again:
```bash
npm run deploy
```

## Troubleshooting

### Site Not Loading / 404 Error
- Make sure the `base` path in `vite.config.js` matches your repository name exactly
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes for DNS propagation

### Build Fails
- Run `npm run build` locally to check for errors
- Make sure all dependencies are installed: `npm install`
- Check the Actions tab on GitHub for error logs

### Images Not Loading
- Make sure image URLs in `data.json` are either:
  - Full URLs (https://...)
  - Or paths starting with `/` for images in the public folder

### Customizing Domain

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure your domain's DNS settings (see GitHub Pages documentation)
3. Enable "Enforce HTTPS" in repository settings

## Important Notes

- The first deployment may take 5-10 minutes to become available
- Changes may take a few minutes to reflect after deployment
- Keep your repository public or upgrade to GitHub Pro for private repository Pages

## Testing Locally Before Deployment

Always test your site locally before deploying:

```bash
# Development server
npm run dev

# Production build preview
npm run build
npm run preview
```

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- Open an issue in your repository
