# Template.astro Usage Guide

## Overview

`template.astro` is a reusable backbone template that accepts all content as data variables. This allows you to create new pages (especially location pages) by simply copying the template and updating the data section.

## How to Use

### Step 1: Copy the Template

```bash
cp src/pages/template.astro src/pages/locations/new-location.astro
```

### Step 2: Update the Data Section (Lines 10-173)

All content is defined at the top of the file in clearly labeled data structures. Simply replace the example values with your actual content.

## Data Structure Reference

### 1. SEO & Page Info
```javascript
const pageTitle = "Your Page Title | Glassbee Solutions";
const pageDescription = "Your page description for SEO.";
```

### 2. Hero Section
```javascript
const hero = {
	title: "Main Title",
	titleHighlight: "Highlighted Part", // Shows in orange
	description: "Hero description text",
	backgroundImage: "https://images.unsplash.com/...", // Unsplash URL
	primaryButton: {
		text: "Button Text",
		link: "/contact"
	},
	secondaryButton: {
		text: "Button Text",
		link: "/services"
	}
};
```

### 3. Trust Signals Stats
```javascript
const trustStats = [
	{ value: "150+", label: "Properties Managed", icon: "properties" },
	{ value: "4.9★", label: "Average Rating", icon: "rating" },
	{ value: "35%", label: "Revenue Increase", icon: "revenue" },
	{ value: "82%", label: "Occupancy Rate", icon: "occupancy" }
];
```

### 4. About Section (Two Columns)
```javascript
const aboutSection = {
	title: "Section Title",
	titleHighlight: "Subtitle", // Shows in orange
	leftColumn: {
		heading: "Left Column Heading",
		description: "Description text",
		bullets: [
			"Bullet point one",
			"Bullet point two",
			"Bullet point three",
			"Bullet point four"
		]
	},
	rightColumn: {
		heading: "Right Column Heading",
		description: "Description text",
		revenueSeasons: [
			{ season: "Peak Season", price: "$350-600/night", occupancy: "95%+ occupancy" },
			{ season: "Shoulder Season", price: "$250-400/night", occupancy: "80-90% occupancy" },
			{ season: "Off-Season", price: "$180-300/night", occupancy: "65-75% occupancy" }
		]
	}
};
```

### 5. Black Box Section
```javascript
const blackBoxSection = {
	title: "Section Title",
	titleHighlight: "Highlight",
	items: [
		{
			heading: "Item One",
			description: "Description for item one."
		},
		{
			heading: "Item Two",
			description: "Description for item two."
		},
		{
			heading: "Item Three",
			description: "Description for item three."
		}
	]
};
```

### 6. Expertise Cards
```javascript
const expertiseCards = [
	{
		heading: "Expertise One",
		description: "Description for expertise card one."
	},
	{
		heading: "Expertise Two",
		description: "Description for expertise card two."
	},
	// ... up to 4 cards
];
```

### 7. Related Pages
```javascript
const relatedPages = [
	{
		title: "Our Services",
		description: "Explore our comprehensive solutions",
		link: "/services",
		icon: "services" // options: services, locations, contact, about, home
	},
	// ... up to 3 pages
];
```

### 8. Nearby Locations (Optional - for location pages)
```javascript
const nearbyLocations = [
	{ name: "Location One", description: "Description", href: "/locations/location-one" },
	{ name: "Location Two", description: "Description", href: "/locations/location-two" },
	// ... up to 4 locations
];
// Set to empty array [] if not needed
```

### 9. FAQs
```javascript
const faqs = [
	{
		question: "Question one?",
		answer: "Answer to question one."
	},
	// ... up to 5 FAQs
];
```

### 10. CTA Banner
```javascript
const ctaBanner = {
	title: "Ready to Get Started?",
	subtitle: "Contact us today for a free consultation",
	primaryButton: {
		text: "Get Free Consultation",
		link: "/contact"
	},
	secondaryButton: {
		text: "Call (951) 760-0070",
		link: "tel:+19517600070"
	}
};
```

## Example: Creating a Location Page

1. Copy `template.astro` to `src/pages/locations/encinitas.astro`
2. Update all data variables with Encinitas-specific content
3. The template handles all the HTML structure automatically
4. Result: A fully formatted page matching your site's design

## Benefits

- ✅ **Consistent Structure**: All pages follow the same layout
- ✅ **Easy Updates**: Change content without touching HTML
- ✅ **Maintainable**: Update template once, affects all pages
- ✅ **Type-Safe**: Clear data structure prevents errors
- ✅ **Fast Creation**: New pages in minutes, not hours

## Notes

- The template structure (HTML) stays the same
- Only the data section (lines 10-173) needs updating
- All styling and components are handled automatically
- Nearby locations section only shows if `nearbyLocations` array has items

