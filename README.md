# TAMS Dental Clinic — Website

Modern, conversion-focused website for **TAMS Dental Clinic** in Rangapara, Sonitpur, Assam, led by **Dr. Tabarak Hussain (B.D.S)**.

Built with Next.js 14, Tailwind CSS, Framer Motion and React Three Fiber.

---

## Features

- 🦷 **3D animated tooth** in hero (React Three Fiber)
- ✨ **Glassmorphism** UI with frosted glass cards
- 🎬 **Smooth scroll animations** powered by Framer Motion
- 📱 **Floating WhatsApp + Call buttons** linked directly to the clinic phone
- 🗺️ **Embedded Google Map** for the clinic address
- 📝 **WhatsApp appointment form** — submissions open WhatsApp pre-filled
- 🔍 **SEO optimized** — JSON-LD `Dentist` schema, robots, sitemap, Open Graph
- 📲 **Fully responsive** (mobile-first)
- 🎨 Teal + cyan + white premium color palette
- ⚡ Static export friendly, deploys for free on Vercel / Netlify

---

## Tech Stack

| Layer        | Tech                                               |
| ------------ | -------------------------------------------------- |
| Framework    | Next.js 14 (App Router) + TypeScript               |
| Styling      | Tailwind CSS 3 + custom glass utilities            |
| Animations   | Framer Motion 11                                   |
| 3D           | React Three Fiber + Drei + Three.js                |
| Icons        | Lucide React                                       |
| Fonts        | Inter (body) + Poppins (display) via `next/font`   |

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx        # Root layout, fonts, JSON-LD SEO
│   ├── page.tsx          # Composes all sections
│   ├── globals.css       # Tailwind + glass + helpers
│   ├── robots.ts         # /robots.txt
│   └── sitemap.ts        # /sitemap.xml
├── components/
│   ├── Navbar.tsx        # Glass navbar + mobile menu
│   ├── Hero.tsx          # 3D hero section
│   ├── ToothModel.tsx    # React Three Fiber tooth
│   ├── Services.tsx      # Glass service cards
│   ├── About.tsx         # Doctor bio + stats
│   ├── WhyUs.tsx         # Features grid (dark gradient)
│   ├── Contact.tsx       # Form + map + info
│   ├── Footer.tsx        # Footer with links
│   ├── FloatingButtons.tsx # WhatsApp + Call buttons
│   └── Logo.tsx          # SVG logo
├── lib/
│   └── data.ts           # Single source of truth for clinic data
├── public/
│   ├── doctor.jpg        # ⚠️ REPLACE with real photo
│   └── favicon.svg
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

### Build for production

```bash
npm run build
npm run start
```

---

## ✏️ How to Update Clinic Info

All clinic data lives in **`lib/data.ts`**. Update once, and it propagates across the site (navbar, footer, contact, schema, meta, etc.).

```ts
export const clinic = {
  name: "TAMS Dental",
  doctor: { name: "Dr. Tabarak Hussain", ... },
  contact: { phone: "+919678470718", whatsapp: "919678470718", ... },
  address: { ... },
  hours: [ ... ],
  ...
};
```

### Replace placeholder photos

1. Doctor photo → drop your file at `public/doctor.jpg` (recommended 800×1000, portrait)
2. Add more clinic photos to `public/` and reference them as `/your-image.jpg`

---

## Deployment (Free)

### Vercel (recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import → select repo
3. Click Deploy — done!
4. Add custom domain in Vercel → Settings → Domains

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## SEO Notes

- The site ships JSON-LD `Dentist` schema with hours, address, phone, rating
- Update `metadataBase` in `app/layout.tsx` once your domain is live
- Update the canonical URLs in `app/sitemap.ts` and `app/robots.ts`
- Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- Claim/optimize the Google Business Profile for *TAMS Dental* — local SEO
  is the #1 driver of new patients

---

## Phone & WhatsApp

The phone is wired through `clinic.contact.phone` (`tel:` link) and `clinic.contact.whatsapp` (`wa.me/` link). The contact form submission opens WhatsApp with the user's name, phone, service and message pre-filled.

---

## License

Proprietary — © TAMS Dental Clinic. All rights reserved.
