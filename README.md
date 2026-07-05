# Xai – Intelligence Workspace

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.0.4-black?style=flat&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.3.3-blue?style=flat&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.6-06B6D4?style=flat&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-10.16.16-0055FF?style=flat&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Three.js-0.160.0-000000?style=flat&logo=three.js" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel" alt="Vercel" />
</div>

<br />

**Xai** is a premium AI-powered SaaS platform that transforms raw business data into structured intelligence, actionable insights, and AI-powered automations through a calm, modern, interactive experience.

> 🎯 **Live Demo**: [xai-workspace-delta.vercel.app](https://xai-workspace-delta.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Core Narrative](#-core-narrative)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)


---

## 🎯 Overview

**Xai – Intelligence Workspace** is a single-page interactive product experience that visually explains how Xai turns raw data into insights. The experience feels:

- ✨ **Calm but powerful** – Clean, professional UI with purposeful animations
- 🧠 **Technically confident** – Advanced motion & 3D interactions
- 👔 **Designed for decision-makers** – Clear visual hierarchy and minimal text
- 🤖 **Clearly "AI product"** – Not marketing fluff, a real product experience

### Key Features

- **Hero Section** – Abstract geometry/particle animation representing "raw data" transforming into structured intelligence
- **Interactive Insight Flow** – Scroll-driven 3-stage workflow: Ingest → Analyze → Generate
- **Intelligence Dashboard Preview** – Production-ready UI with sidebar, charts, cards, and tab transitions
- **Signature 3D Interaction** – Rotating cube with depth-based parallax and geometry morphing
- **Fully Responsive** – Desktop-first with mobile and tablet support
- **Accessibility First** – WCAG 2.1 AA compliant with keyboard navigation and reduced motion support

---

## 🔄 Core Narrative

The UI visually walks the user through this transformation using:
- Scroll-driven animations (GSAP + ScrollTrigger)
- UI choreography (Framer Motion)
- 3D geometry and particles (Three.js)

---

## 🛠️ Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js (App Router) | 14.0.4 |
| Language | TypeScript | 5.3.3 |
| Styling | Tailwind CSS | 3.3.6 |
| UI Animations | Framer Motion | 10.16.16 |
| Scroll Animations | GSAP + ScrollTrigger | 3.12.2 |
| 3D Graphics | React Three Fiber / Three.js | 8.15.16 / 0.160.0 |
| Icons | Lucide React | Latest |
| Utils | clsx, tailwind-merge | Latest |
| Deployment | Vercel | – |

---

## 📁 Project Structure
xai-workspace/
├── app/
│ ├── layout.tsx # Root layout with metadata
│ ├── page.tsx # Main single-page experience
│ └── globals.css # Global styles & design tokens
├── components/
│ ├── ui/ # Reusable UI components
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── Badge.tsx
│ │ ├── StatCard.tsx
│ │ └── FeatureCard.tsx
│ ├── sections/ # Page sections
│ │ ├── Hero.tsx
│ │ ├── FeatureGrid.tsx
│ │ ├── InsightFlow.tsx
│ │ ├── Dashboard.tsx
│ │ ├── Testimonials.tsx
│ │ ├── Signature3D.tsx
│ │ └── CTA.tsx
│ └── animations/ # Animation components
│ └── ParticleSystem.tsx
├── lib/
│ ├── utils/
│ │ └── cn.ts # Class name utility
│ └── animations/
│ ├── framer-configs.ts
│ └── gsap-timelines.ts
├── hooks/
│ ├── useReducedMotion.ts
│ └── useScrollAnimation.ts
├── types/
│ └── index.ts
├── public/ # Static assets
├── next.config.mjs # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Dependencies & scripts
└── README.md # This file


---

## 🚀 Installation

### Prerequisites

- Node.js 18.17.0 or later
- npm 9.0.0 or later

### Steps

```bash
# Clone the repository
git clone https://github.com/Rincosa/xai-workspace
cd xai-workspace

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Run development server
npm run dev
