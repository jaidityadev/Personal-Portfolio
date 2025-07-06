# Jaiditya Dev's Personal Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://jaiditya-dev.netlify.app/) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Live Demo:** [jaiditya-dev.netlify.app](https://jaiditya-dev.netlify.app/)

A modern, responsive personal website showcasing my work and expertise as a **Data Scientist & Full Stack Developer**. Built with Next.js 13 (App Router), TypeScript, and a suite of modern UI libraries and animations.

---

## 🚀 Table of Contents

* [About](#about)
* [Tech Stack](#tech-stack)
* [Key Features](#key-features)
* [Pages Overview](#pages-overview)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Customization](#customization)
* [Deployment](#deployment)
* [Contact](#contact)

---

## 🧐 About

This portfolio highlights my journey from developing word-clouds in Python to building scalable classification models in production, alongside my passion for data-driven storytelling and full-stack web development. Here you'll find:

* **Home:** A quick intro, skills snapshot, and featured projects.
* **About:** Detailed background, education, certifications, and professional experience.
* **Projects:** In-depth case studies with links to publications and code.
* **Contact:** Multiple ways to reach me for collaborations or opportunities.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 13 (App Router)
* **Language:** TypeScript & JavaScript
* **Styling:** Tailwind CSS, shadcn/UI (Radix + CVA)
* **Animations:** Framer Motion orchestration with custom hooks
* **Components:** Radix UI, Lucide Icons
* **Font:** Google Fonts (Inter)
* **Theme:** next-themes for dark/light toggle
* **Deployment:** Vercel / Netlify

---

## ✨ Key Features

* **Responsive Design:** Mobile-first layouts with Tailwind CSS utilities.
* **Dark/Light Mode:** Seamless theme switching powered by next-themes.
* **Animated UI:** Page transitions, staggered fades, and hover effects via Framer Motion.
* **SEO & Metadata:** Configured in `src/app/layout.tsx` for optimal sharing.
* **Dynamic Routing:** App Router handles `/`, `/about`, `/projects`, `/contact`.
* **Performance Optimized:** Image optimization with Next.js `Image` component.

---

## 📄 Pages Overview

### Home (`/`)

* Hero section with a brief introduction and call-to-action buttons.
* About preview with education and highlights.
* Skill badges under Data Science, Programming, and Machine Learning.
* Featured projects carousel with images, summaries, and links.

### About (`/about`)

* Personal bio as a Lester B. Pearson Scholar.
* Education timeline and major awards.
* Top certifications with credential links.
* Detailed technical skills matrix.
* Professional experience from Teaching Assistant roles to Data Science internships.
* Publications list with DOI links and PDF downloads.

### Projects (`/projects`)

* Comprehensive project list, filtering featured vs. other works.
* Tags for technologies and methods used in each project.
* Direct links to journal publications, GitHub code, or PDF chapters.

### Contact (`/contact`)

* Email, GitHub, LinkedIn, ORCID, and downloadable resume.
* Encouragement for research collaborations and professional inquiries.

---

## 🗂️ Project Structure

```
Personal-Portfolio/
├── public/                   # Static assets (images, favicons)
├── src/
│   ├── app/                  # Next.js App Router pages & layout
│   │   ├── layout.tsx        # Site metadata & theme config
│   │   ├── page.tsx          # Home page
│   │   ├── about/page.tsx    # About page
│   │   ├── projects/page.tsx # Projects page
│   │   └── contact/page.tsx  # Contact page
│   ├── components/           # Reusable UI components (cards, buttons, animations)
│   └── lib/                  # Utility hooks and functions
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies & scripts
└── README.md                 # <-- You are here
```

---

## 🏁 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/jaidityadev/Personal-Portfolio.git
   cd Personal-Portfolio
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Run the development server**

   ```bash
   npm run dev
   ```
4. **Open** `http://localhost:3000` in your browser.

---

## ⚙️ Customization

* **Site Metadata:** Update title, description, and icons in `src/app/layout.tsx` under the `metadata` export.
* **Theme Settings:** Configure default theme or disable system preference in `next-themes` setup.
* **Fonts & Colors:** Modify Tailwind variables or swap Google Fonts as desired.
* **Images & Content:** Replace assets in `public/images/` and edit page components under `src/app`.

---

## 🚀 Deployment

* **Vercel:** Connect your GitHub repo and deploy with zero-config automatic builds.
* **Netlify:** Use `netlify.toml` for custom redirects and build settings.

---

## ✉️ Contact

* **Email:** [jaidityadev1402@gmail.com](mailto:jaidityadev1402@gmail.com)
* **GitHub:** [jaidityadev](https://github.com/jaidityadev)
* **LinkedIn:** [Jaiditya Dev](https://linkedin.com/in/jaidityadev)
* **ORCID:** [0009-0005-2095-4383](https://orcid.org/0009-0005-2095-4383)

Feel free to reach out for collaborations, research discussions, or any questions!
