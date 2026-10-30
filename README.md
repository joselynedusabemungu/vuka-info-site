# VUKA Informational Website

The marketing and informational site for **VUKA** — a platform that turns everyday social media scrolling into structured, verifiable learning pathways and real-world opportunities for Kenyan high school graduates.

This site introduces VUKA, explains how the platform works, and funnels visitors into the main application.

🌐 **Live site:** [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)  
📱 **Main App:** [your-dashboard-url.vercel.app](https://your-dashboard-url.vercel.app)

---

## Overview

Built to be fast, static, and independent of the main product. It allows marketing content to be updated without touching the core app, keeping both codebases lightweight and easy to deploy.

**Sections included:**
- **Hero** — Animated display, tagline, and sign-up CTA.
- **How It Works** — A five-step journey from onboarding to unlocking opportunities.
- **About** — The problem VUKA solves and why it matters.
- **Contact** — A Formspree-powered contact form and office details.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Font:** Nunito (via `next/font`)
- **Contact Form:** Formspree
- **Deployment:** Vercel

---

## Project Structure

app/
├── components/
│   ├── about/         
│   │   ├── about.css
│   │   └── about.jsx
│   ├── Contact/        
│   │   ├── Contact.css
│   │   └── Contact.jsx
│   ├── home/          
│   │   ├── home.jsx
│   │   └── home.module.css
│   └── how it works/   
│       ├── howitworks.jsx
│       └── howitworks.module.css
├── informational/      
│   └── page.jsx
├── globals.css        
├── layout.jsx         
└── page.jsx           

public/              

# Config files
next.config.ts
postcss.config.mjs
eslint.config.mjs
tsconfig.json
package.json


## Getting Started

### 1. Install dependencies & run!
```bash
npm install
npm run dev
