# Jaiditya Dev's Personal Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://jaiditya-dev.netlify.app/) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern, responsive portfolio website built with **Next.js 13** and **React**, showcasing my work as a Data Scientist & Full Stack Developer.

---

## 🚀 Live Demo

👉 [jaiditya-dev.netlify.app](https://jaiditya-dev.netlify.app/)

---

## 📑 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Development](#installation--development)
- [Build & Production](#build--production)
- [Customization](#customization)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 📝 Overview

This repository contains the source code for my personal portfolio website. It leverages:
- **Next.js 13 (App Router)**
- **React with TypeScript**
- **Google Fonts (Inter)**
- **Tailwind CSS** for utility-first styling
- SEO-friendly metadata and favicons

---

## ✨ Features
- **Responsive design** for mobile, tablet, and desktop
- **Reusable React component library** (buttons, cards, badges, avatar, etc.)
- **Dynamic routing** for `/`, `/about`, `/projects`, and `/contact`
- **Easy metadata and favicon customization** via `src/app/layout.tsx`
- **Google Fonts (Inter) integration**
- **Dark/light mode support** (optional, via CSS variables)

---

## 📁 Project Structure

```text
Personal-Portfolio/
├── public/
│   └── images/
│       ├── profile.jpg       # Profile photo
│       └── tax.png           # Sample project thumbnail
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout & metadata
│   │   ├── page.tsx          # Home page
│   │   ├── about/page.tsx    # About page
│   │   ├── projects/page.tsx # Projects listing
│   │   └── contact/page.tsx  # Contact form
│   ├── components/           # Reusable UI components
│   └── lib/                  # Utility functions & hooks
├── globals.css               # Global Tailwind imports & overrides
├── package.json
└── README.md
```

---

## 🛠️ Installation & Development

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

4. **Open your browser** at [http://localhost:3000](http://localhost:3000)

---

## 🔧 Build & Production

To build and start the production server:

```bash
npm run build
npm run start
```

---

## ⚙️ Customization
- **Metadata & Favicon:** Update `export const metadata` in `src/app/layout.tsx` to change your site title, description, and icons.
- **Fonts:** Modify the Google Font import in `layout.tsx` to use a different font.
- **Styling:** Tweak Tailwind classes or edit `globals.css` for custom theming.
- **Images:** Add your assets to `public/images/` and reference them with `/images/<filename>`.

---

## 📚 Technologies
- [Next.js 13](https://nextjs.org/)
- [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

---

## 🤝 Contributing

Contributions are welcome! Feel free to [open an issue](https://github.com/jaidityadev/Personal-Portfolio/issues) or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Jaiditya Dev**  
_Data Scientist & Full Stack Developer_

- [GitHub](https://github.com/jaidityadev)
- [LinkedIn](https://www.linkedin.com/in/jaidityadev)
- 📧 [jaidityadev1402@gmail.com](mailto:jaidityadev1402@gmail.com)