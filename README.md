# FixWerk Berlin — Appliance Repair Service Website

A config-driven, bilingual (German/English) static website for **FixWerk Berlin**, a household appliance repair service based in Berlin-Mitte.

> **Status:** Demo / presentation site — placeholder contact data must be replaced before going live.

## Features

- **Bilingual** — Full German and English versions with `hreflang` alternates
- **Config-driven** — All content (services, FAQs, testimonials, contact info, theme colors) lives in `site-config.js`; change the config to rebrand the entire site
- **SEO-optimized** — Open Graph, Twitter Cards, canonical URLs, JSON-LD `LocalBusiness` structured data, XML sitemap
- **Responsive** — Mobile-first design with sticky CTA bar, hamburger menu, and fluid typography
- **Accessible** — Skip links, ARIA attributes, keyboard navigation, Escape-to-close
- **Cookie consent** — JS-rendered banner with accept/reject, persisted in `localStorage`
- **Contact form** — Client-side validation (demo mode, no backend)
- **WhatsApp button** — Floating CTA on all pages
- **Scroll animations** — `IntersectionObserver`-based reveal effects

## Services Covered

| Category | Examples |
|---|---|
| Waschmaschinen | Washing machine repairs |
| Geschirrspüler | Dishwasher repairs |
| Kühlschrank & Gefriergerät | Fridge & freezer repairs |
| Backofen & Herd | Oven & stove service |
| Kleingeräte | Microwaves, kettles, coffee machines |

Serves **10 Berlin districts** and supports **15 appliance brands** (Bosch, Siemens, Miele, Samsung, LG, etc.).

## Tech Stack

- **HTML / CSS / Vanilla JS** — no frameworks, no build step
- **Google Fonts** — DM Sans + Space Grotesk
- **CSS** — Custom properties, Grid, Flexbox, `clamp()` fluid typography
- **JS** — Token-based rendering engine (`{{PLACEHOLDER}}` replacement at runtime)

## Project Structure

```
├── index.html / index-de.html      # German homepage
├── index-en.html                   # English homepage
├── contact.html / contact-de.html  # German contact page
├── contact-en.html                 # English contact page
├── impressum.html / impressum-de.html  # German legal notice
├── impressum-en.html               # English legal notice
├── datenschutz.html / datenschutz-de.html  # German privacy policy
├── privacy-en.html                 # English privacy policy
├── sitemap.xml                     # XML sitemap with hreflang
├── robots.txt                      # Crawler directives
├── css/
│   └── styles.css                  # Full stylesheet
├── js/
│   ├── site-config.js              # Central config (content, theme, contact)
│   ├── main.js                     # Rendering engine & interactivity
│   ├── site-config.new.js          # WIP config variant
│   └── main.new.js                 # WIP engine variant
└── pages/
    └── service-template.html       # Reusable service landing page template
```

## How It Works

1. **HTML files** contain structural shells with `data-section` containers and `{{TOKEN}}` placeholders.
2. **`site-config.js`** holds all business data — brand name, phone, email, services, FAQs, testimonials, districts, brands, and theme colors.
3. **`main.js`** reads the config at runtime, replaces tokens, injects section HTML, and handles interactivity (mobile menu, cookie banner, form validation, structured data generation).

To rebrand: edit `site-config.js` with new business details — the entire site updates automatically.

## Getting Started

No build step required. Open `index.html` in a browser or serve the folder with any static file server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

## Before Launch

- [ ] Replace placeholder contact info in `site-config.js` (phone, email, address, legal representative)
- [ ] Replace `{{DOMAIN}}` tokens in `sitemap.xml` with the actual domain
- [ ] Update `robots.txt` sitemap URL
- [ ] Review legal pages (Impressum, Datenschutz) with a legal professional
- [ ] Add real testimonials
- [ ] Connect contact form to a backend or form service
