# Company Landing Page

A modern, responsive single-page React application designed for companies to showcase their services. Built with React and Vite, optimized for deployment on GitHub Pages.

## Features

- **Sticky Header**: Navigation with logo, menu items (About, Services, Contact), and quick contact phone number
- **Hero Section**: Eye-catching hero with background image and rotating text slideshow
- **Services Section**: Responsive carousel showcasing services (3 cards on desktop, 2 on tablet, 1 on mobile)
- **Service Modals**: Detailed service information with features and contact redirect
- **About Section**: Company information with collage images, stats, and core values
- **Contact Modal**: Complete contact details with email, phone, address, and social links
- **Footer**: Company branding, services list, contact details, and embedded map
- **Responsive Design**: Fully responsive across all device sizes
- **Blue & White Theme**: Professional, trustable color scheme

## Tech Stack

- React 19
- Vite 7
- Pure CSS (no frameworks)
- Data-driven architecture (all content in data.json)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/company-landing-page.git
cd company-landing-page
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

All content is stored in `/public/data.json`. Edit this file to customize:

- Company name, tagline, and logo
- Contact information (phone, email, address)
- Social media links
- Hero slideshow text
- Services (title, description, features)
- About section (description, mission, values, stats, images)
- Map location

### Updating Images

Replace image URLs in `data.json`:
- Hero background image
- Service icons (currently emoji, can be replaced with image URLs)
- About section images
- Or add images to `/public` folder and reference them as `/image-name.jpg`

### Changing Colors

Update the CSS variables in `/src/index.css`:
```css
--primary-blue: #2563eb;
--primary-blue-dark: #1e40af;
--primary-blue-light: #3b82f6;
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Update base path** in `vite.config.js`:
   ```js
   base: '/your-repository-name/',
   ```

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

The site will automatically build and deploy. Access it at:
`https://YOUR_USERNAME.github.io/your-repository-name/`

### Option 2: Manual Deployment

1. **Update base path** in `vite.config.js`
2. **Deploy using npm**:
   ```bash
   npm run deploy
   ```

This will build the project and push the `dist` folder to the `gh-pages` branch.

## Project Structure

```
company-landing-page/
├── public/
│   └── data.json          # All application content
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Hero section with slideshow
│   │   ├── Services.jsx   # Services carousel
│   │   ├── ServiceModal.jsx
│   │   ├── About.jsx      # About section
│   │   ├── ContactModal.jsx
│   │   └── Footer.jsx     # Footer with map
│   ├── App.jsx           # Main app component
│   ├── App.css
│   ├── index.css         # Global styles
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── vite.config.js        # Vite configuration
└── package.json
```

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue on GitHub.
