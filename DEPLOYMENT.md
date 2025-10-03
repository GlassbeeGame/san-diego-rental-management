# Deployment Guide

This guide will walk you through deploying your San Diego Rental Management website to GitHub and Vercel.

## Prerequisites

- Git installed on your machine
- A GitHub account
- A Vercel account (free tier available at [vercel.com](https://vercel.com))

## Option 1: Deploy via GitHub + Vercel (Recommended)

This is the easiest method and enables automatic deployments when you push changes.

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository (e.g., `san-diego-rental-management`)
3. Keep it **Public** or **Private** (your choice)
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Push to GitHub

Run these commands in your project directory:

```bash
# Navigate to project directory
cd san-diego-rental-management

# Add all files to git (already initialized)
git add .

# Commit your changes
git commit -m "Initial commit: San Diego rental management website"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/san-diego-rental-management.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"** or **"Import Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository (`san-diego-rental-management`)
5. Vercel will **auto-detect Astro** settings:
   - Framework Preset: **Astro**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**

That's it! Your site will be live in ~2 minutes.

### Step 4: Set Up Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Click **"Domains"**
3. Add your custom domain (e.g., `sandiegorentals.com`)
4. Follow Vercel's DNS configuration instructions
5. Vercel will automatically provision SSL certificate

### Step 5: Configure Environment Variables (If Needed)

If you need to add environment variables (form endpoints, API keys):

1. In Vercel dashboard, go to **Settings** → **Environment Variables**
2. Add your variables:
   - `FORM_ENDPOINT` (if using form service)
   - `GA_TRACKING_ID` (if using Google Analytics)
3. Redeploy to apply changes

---

## Option 2: Direct Deploy with Vercel CLI

For quick deployments without GitHub:

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# From project directory
vercel

# For production deployment
vercel --prod
```

The CLI will guide you through the setup process.

---

## Option 3: Deploy to Netlify

### Via Netlify UI

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to your GitHub repository
4. Netlify will auto-detect Astro:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy"**

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

---

## Option 4: Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click **"Save and Deploy"**

---

## Updating Your Site

### With GitHub + Vercel/Netlify (Automatic)

Simply push changes to GitHub:

```bash
git add .
git commit -m "Update content"
git push
```

Your site will automatically redeploy!

### With Vercel CLI

```bash
vercel --prod
```

---

## Important Post-Deployment Tasks

### 1. Update Contact Information

Edit these files with your actual contact details:
- `src/components/Footer.astro`
- `src/pages/contact.astro`

### 2. Configure Form Service

The contact form needs a backend. Choose one:

**Formspree** (Easiest):
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Update `src/pages/contact.astro`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

**Web3Forms** (Free, no signup):
1. Get API key at [web3forms.com](https://web3forms.com)
2. Update form with their integration code

### 3. Add Google Analytics (Optional)

1. Get tracking ID from [Google Analytics](https://analytics.google.com)
2. Add to `src/layouts/Layout.astro` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. SEO Optimization

1. **Submit sitemap to Google Search Console:**
   - Your sitemap is at: `https://yourdomain.com/sitemap.xml`
   - Add property at [search.google.com/search-console](https://search.google.com/search-console)

2. **Update meta tags** in each page with accurate information

3. **Add Google My Business** listing for local SEO

### 5. Performance Monitoring

- Check PageSpeed: [pagespeed.web.dev](https://pagespeed.web.dev)
- Monitor Core Web Vitals in Search Console
- Use Vercel/Netlify analytics for traffic insights

---

## Troubleshooting

### Build Fails

Check that all dependencies are in `package.json`:
```bash
npm install
npm run build
```

### Form Not Working

Ensure you've configured a form endpoint in `contact.astro`

### 404 Errors

Make sure all routes are in `src/pages/` directory

### Slow Performance

- Optimize images in `public/` folder
- Check Lighthouse score: DevTools → Lighthouse
- Enable compression on your hosting platform

---

## Support

For deployment issues:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Astro**: [docs.astro.build](https://docs.astro.build)

For website customization, refer to the main [README.md](README.md)
