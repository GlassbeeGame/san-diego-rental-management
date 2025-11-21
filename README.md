# San Diego Rental Management Website

A modern, SEO-optimized website for a San Diego short-term rental management company built with Astro, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Fast & Optimized**: Built with Astro for optimal performance and PageSpeed scores
- **Mobile-First Design**: Fully responsive across all devices
- **SEO Optimized**: Meta tags, semantic HTML, and optimized for "San Diego short term rental management" keywords
- **TypeScript**: Type-safe development with strict TypeScript configuration
- **Tailwind CSS**: Modern, utility-first styling with custom design system
- **Service Pages**: Complete information about rental management services
- **Location Pages**: Coverage of all major San Diego neighborhoods
- **Contact Form**: Easy-to-use contact form for lead generation

## 📁 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Route pages
│   │   ├── index.astro       # Homepage
│   │   ├── services.astro    # Services page
│   │   ├── locations.astro   # San Diego locations
│   │   ├── about.astro       # About us
│   │   └── contact.astro     # Contact form
│   └── styles/         # Global styles
│       └── global.css
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd san-diego-rental-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   ```

   Configure any optional services:
   - Form endpoint (Formspree, Basin, Web3Forms, etc.)
   - Google Analytics tracking ID

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:1234](http://localhost:1234) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

   For production deployment:
   ```bash
   vercel --prod
   ```

### Deploy via GitHub + Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Astro settings
   - Click "Deploy"

### Other Deployment Options

- **Netlify**: Connect your GitHub repo at [netlify.com](https://netlify.com)
- **Cloudflare Pages**: Follow [Astro Cloudflare guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
- **Static Hosting**: Build with `npm run build` and upload `dist/` folder

## 🎨 Customization

### Update Contact Information

Edit the following files:
- `src/components/Footer.astro` - Footer contact details
- `src/pages/contact.astro` - Contact page information

### Modify Services

Update service offerings in:
- `src/pages/index.astro` - Homepage services overview
- `src/pages/services.astro` - Detailed services page

### Add New Locations

Add San Diego neighborhoods in:
- `src/pages/locations.astro` - Update locations array

### SEO Optimization

Each page has customizable meta tags:
```astro
<Layout
  title="Your Page Title"
  description="Your page description"
  keywords="your, keywords, here"
>
```

## 📧 Form Handling

The contact form currently shows an alert on submission. To connect a real form service:

1. **Choose a form service:**
   - [Formspree](https://formspree.io) (Easy, generous free tier)
   - [Web3Forms](https://web3forms.com) (Free, no backend needed)
   - [Basin](https://usebasin.com) (Developer-friendly)

2. **Update contact.astro:**
   ```javascript
   // Replace the fetch URL with your form endpoint
   const response = await fetch('YOUR_FORM_ENDPOINT', {
     method: 'POST',
     body: JSON.stringify(data)
   });
   ```

## 🔍 SEO Keywords

The site is optimized for:
- San Diego short term rental management
- Airbnb management San Diego
- Vacation rental management San Diego
- Property management La Jolla
- Pacific Beach rentals
- Downtown San Diego vacation rentals

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized images and assets
- Fast loading on mobile networks

## 🎯 Performance

Built for excellent PageSpeed scores:
- Static site generation (SSG)
- Optimized asset loading
- Minimal JavaScript
- Efficient CSS with Tailwind

## 📄 License

Proprietary - All rights reserved

## 🤝 Support

For questions or support:
- Email: info@sandiegorentals.com
- Phone: (951) 760-0070

---

Built with [Astro](https://astro.build) 🚀
