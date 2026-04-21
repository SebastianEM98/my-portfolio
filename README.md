<div align="center">

# Sebastian Echeverri Mejia — Portfolio

**A modern, production-grade personal portfolio built with Next.js App Router**

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

[🌐 Live Demo](https://sebastianecheverri.dev) · [📄 CV / Resume](https://sebastianecheverri.dev/#experience) · [📬 Contact](https://sebastianecheverri.dev/#contact)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Modern UI** | Clean, production-grade interface with a dark-first design system |
| 🎨 **Dark-first Design** | Carefully crafted dark theme with consistent color tokens via CSS variables |
| 🎬 **Smooth Animations** | Scroll-triggered reveals and transitions powered by Framer Motion |
| 📱 **Fully Responsive** | Mobile-first layout that works seamlessly across all screen sizes |
| 🧭 **Active Section Tracking** | Scroll-based navigation that highlights the current section in real time |
| 🌙 **Optimized Dark Mode** | Native dark mode handling — no flash, no flicker |
| 🖼️ **Project Gallery & Lightbox** | Interactive project previews with a full-screen lightbox experience |
| 📦 **Optimized Performance** | Next.js image optimization, code splitting, and fast page loads |
| 🔍 **SEO Ready** | Metadata, Open Graph tags, and semantic HTML for full search engine visibility |

---

## 🛠️ Tech Stack

### Core

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

### Animations & UI

[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square&logo=lucide&logoColor=white)](https://lucide.dev/)
[![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat-square&logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)

### Tooling & Deployment

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)](https://prettier.io/)

---

## 📁 Project Structure

```
src/
└── app/
    ├── components/
    │   ├── ui/                      # Reusable UI primitives
    │   ├── About.tsx
    │   ├── AnimatedSection.tsx      # Scroll-triggered animation wrapper
    │   ├── Contact.tsx
    │   ├── Experience.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── HeroAnimations.tsx
    │   ├── Lightbox.tsx             # Full-screen image lightbox
    │   ├── Logo.tsx
    │   ├── Navbar.tsx
    │   ├── ProjectCard.tsx
    │   ├── Projects.tsx
    │   ├── SectionHeading.tsx
    │   ├── TechStack.tsx
    │   └── ThemeToggle.tsx
    ├── data/                        # Static content (projects, experience...)
    ├── hooks/                       # Custom React hooks
    ├── lib/                         # Utilities (cn, etc.)
    ├── types/                       # TypeScript type definitions
    ├── globals.css                  # Global styles and CSS variables
    ├── layout.tsx                   # Root layout with metadata and theme setup
    ├── opengraph-image.tsx          # Dynamic OG image generation
    ├── page.tsx                     # Main page — composes all sections
    ├── robots.ts                    # SEO robots config
    └── sitemap.ts                   # Auto-generated sitemap
```

---

## 📐 Design Decisions

- **App Router** — Used Next.js App Router for clean layouts, native metadata support, and better SEO control compared to Pages Router.
- **Dark-first** — The color system is built dark by default. CSS variables handle all theming tokens, making future changes trivial.
- **`cn()` utility** — `clsx` + `tailwind-merge` combo for clean, conflict-free conditional class merging across all components.
- **Framer Motion (`motion`)** — Scroll-triggered animations via a reusable `AnimatedSection` wrapper, keeping animation logic decoupled from content.
- **No UI library** — All components are built from scratch to keep the bundle lean and the design fully custom.

---

## 📬 Contact

Feel free to reach out if you want to collaborate, hire, or just say hi.

[![Email](https://img.shields.io/badge/Email-sebastianecheverri.dev%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:sebastianecheverri.dev@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sebastianem98-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/sebastianem98)
[![GitHub](https://img.shields.io/badge/GitHub-SebastianEM98-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/SebastianEM98)

---

<div align="center">

Designed & built by **Sebastian Echeverri Mejia** · © 2025

</div>
