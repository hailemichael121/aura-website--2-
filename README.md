# AURA — Alliance for Understanding Recovery & Awareness

<div align="center">

**Mental Wellbeing for All**

A modern, accessible, community-centered digital portal for **AURA (Alliance for Understanding Recovery & Awareness)** — an Ethiopian Civil Society Organization dedicated to normalizing mental wellness, reducing stigma, and connecting individuals and families to accessible support pathways.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.8-orange?logo=pnpm)](https://pnpm.io/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

</div>

---

## 📖 About the Organization

**AURA (Alliance for Understanding Recovery & Awareness)** is an officially registered Ethiopian Civil Society Organization (CSO) operating under Proclamation No. 1113/2011.

- **Mission:** Create accessible, culturally attuned safe spaces for mental health support and stigma reduction through youth empowerment, digital innovation, and multi-stakeholder collaboration.
- **Vision:** A society where mental wellness is understood, valued, protected, and accessible to all — free from stigma and exclusion.
- **Headquarters:** Bole, Addis Ababa, Ethiopia
- **Telegram Community:** [@AURA_MHP](https://t.me/AURA_MHP)
- **Email:** hello@auraethiopia.org / contact@aura-ethiopia.org

---

## 🌟 Core Initiatives & Features

- **Safe Support Pathways (`/get-help`):** Peer listening circles, guided coping tools, and verified professional healthcare referrals.
- **Community Gathering (`/community`):** Safe, moderated discussion spaces and local support circles.
- **Anonymous Confessions (`/confessions`):** Stigma-free, privacy-first peer sharing platform.
- **Community Forum (`/forum`):** Categorized discussion boards covering youth wellness, recovery journeys, and self-care.
- **Recovery Stories (`/stories`):** Personal accounts of healing, resilience, and growth across Ethiopian communities.
- **Resource Hub (`/resources`):** Culturally tailored articles, podcasts, videos, and downloadable guides (in English, Amharic, and Afan Oromo).
- **Youth & Family Programs (`/programs`):** Interactive workshops, student mental wellness initiatives, and Family Time events.
- **Partnerships & Volunteering (`/get-involved`, `/join-us`):** Collaborative pathways for educators, clinicians, volunteers, and donors.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with custom design tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **UI Primitives** | Radix UI accessible primitives (`@radix-ui/react-*`) |
| **Package Manager** | [pnpm v11+](https://pnpm.io/) |
| **Media Pipeline** | Python + Pillow + FFmpeg (WebP image conversion & streaming H.264 video encoding) |
| **Backend & Auth** | Supabase client integration ready |

---

## 📁 Repository Structure

```
.
├── app/                        # Next.js App Router (Pages, layouts, API routes)
│   ├── layout.tsx              # Global root layout (Navbar, Footer, Providers)
│   ├── page.tsx                # High-performance hero landing page
│   ├── about/                  # Mission, vision, board & executive leadership
│   ├── founders/               # Founder profiles & organizational history
│   ├── get-help/               # Immediate & peer support pathways
│   ├── community/              # Community circles & participation
│   ├── forum/                  # Discussion boards, categories, new post forms
│   ├── stories/                # Recovery stories & community experiences
│   ├── confessions/            # Anonymous peer confession space
│   ├── programs/               # Program directory & registration
│   ├── resources/              # Educational hub (articles, podcasts, videos)
│   ├── contact/                # Contact information & message routing
│   ├── get-involved/           # Volunteering & partnership opportunities
│   └── admin/                  # Content & administrative overview
├── components/                 # Reusable UI & business components
│   ├── ui/                     # Accessible UI primitives (Button, Card, Sheet, etc.)
│   ├── navbar.tsx              # Floating / responsive navigation with dock animation
│   ├── footer.tsx              # Global footer with newsletter & quick links
│   ├── hero-section.tsx        # Dynamic carousel with WebP stills & streaming video
│   ├── aura-hero-lockup.tsx    # Responsive branding emblem & typography
│   ├── team-member-card.tsx    # Leadership & board showcase cards
│   └── brand-icons.tsx         # Custom social & brand SVG icons
├── contexts/                   # Global React state providers
│   ├── language-context.tsx    # Multi-language translation provider (EN, AM, OM)
│   └── theme-context.tsx       # Zero-dependency light/dark theme system
├── docs/                       # Official documentation & branding assets
│   ├── branding/               # Brand guidelines PDF, logo variations, and banners
│   └── WEBSITE_UPDATE_PLAN.md  # Architecture & update roadmap
├── hooks/                      # Custom hooks (e.g. useBrandDock)
├── lib/                        # Core utilities, Supabase client, and i18n dictionary
├── public/                     # Static assets served at root
│   ├── images/                 # Optimized WebP images & team portraits
│   └── videos/                 # H.264 stream-optimized background videos
└── scripts/                    # Automation & database tools
    ├── optimize-media.py       # Automated WebP & video compression script
    └── create-tables.sql       # Database schema initialization script
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or `v22.x`+ recommended
- **pnpm**: `v11.x`+ (Install via `npm install -g pnpm` or `corepack enable`)
- **Python 3.x** + **Pillow** (Optional, for media optimization)
- **FFmpeg** (Optional, for video re-encoding)

### 1. Clone & Install Dependencies

```bash
git clone <repository-url>
cd aura-website--2-

pnpm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory if connecting to a Supabase backend:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Start the Development Server

```bash
pnpm dev
```

Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
pnpm build
pnpm start
```

---

## ⚡ Media Optimization Tooling

To keep load times fast and bandwidth low, an automated asset optimizer is included:

```bash
pnpm optimize:media
```

This script:
- Traverses `public/images/` and converts `.png`/`.jpg` images into lightweight `.webp` format.
- Automatically updates file references across `app/`, `components/`, and `lib/`.
- Re-encodes videos in `public/videos/` with H.264, `-crf 28`, and `+faststart` (moov atom at head for zero-buffering instant web streaming).

---

## 🔒 License & Confidentiality

**PROPRIETARY & CONFIDENTIAL**

Copyright © 2024–2026 Alliance for Understanding Recovery & Awareness (AURA). All rights reserved.

This codebase and all associated design assets, branding, and documentation are the private property of AURA. Unauthorized copying, modification, redistribution, or deployment is strictly prohibited. See [LICENSE](LICENSE) for details.
