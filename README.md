# AURA — Alliance for Understanding Recovery & Awareness

A digital portal for AURA, a mental health awareness and support organization based in Addis Ababa, Ethiopia.

---

## About the Organization

**AURA (Alliance for Understanding Recovery & Awareness)** is a community-centered mental health organization working to reduce stigma, support recovery journeys, and connect people to trusted help across Ethiopian communities.

### Mission

To normalize mental health conversations and build accessible, community-based support pathways across Ethiopia.

### Vision

A society where mental wellness support is treated as a right, and seeking help is met with dignity, understanding, and care.

### What We Do

- **Safe support pathways** — From early listening to professional referrals, we help people find the right level of support without judgment.
- **Community understanding** — We host open conversations that reduce stigma and build healthier language around mental wellness.
- **Practical resources** — Simple, culturally aware resources for students, families, and working adults.
- **Youth programs** — Student-focused spaces addressing academic pressure, identity, anxiety, and transitions to adulthood.
- **Recovery support groups** — Ongoing support circles centered on hope, accountability, and community care.

### Team

- **Dr. Rediet Feleke** — Founder & Medical Director (Medical Student, Asela University)
- **Simret G. Dessie** — Community Outreach Coordinator
- **Messeret Gossa** — Program Development Specialist

### Location

Bole, Addis Ababa, Ethiopia

### Contact

- **Email:** hello@auraethiopia.org
- **Telegram:** [@AURA_MHP](https://t.me/AURA_MHP)
- **Instagram:** [@red8_fe](https://www.instagram.com/red8_fe)

---

## About the Portal

This website serves as AURA's digital community hub, designed to:

- Help people quickly find immediate and non-emergency mental health support
- Explain AURA's mission, values, and programs
- Encourage safe community participation through forums, stories, and anonymous confessions
- Support partnerships, volunteering, and outreach

### Target Audience

- Young people and students navigating stress, anxiety, and life transitions
- Adults and families seeking guidance and emotional support
- Community members who want to participate in mental wellness conversations
- Volunteers, schools, organizations, and health partners

### Design Principles

- **Warm minimalism** with deep green, white, and muted tones
- **Ethiopian/African contextual tone** and imagery
- **Accessible typography** with generous spacing and readable text
- **Subtle transitions** — no flashy effects, gradients, or unnecessary animations
- **Compassionate language** focused on listening, understanding, and healing
- **Privacy-first** approach to community features

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Overview, impact stats, quick links |
| About | `/about` | Organization story, mission, vision, team |
| Get Help | `/get-help` | Immediate support, peer support, professional referrals |
| Community | `/community` | Support circles, discussion spaces, safety commitments |
| Forum | `/forum` | Community discussion board with categories |
| Stories | `/stories` | Community recovery stories and experiences |
| Confessions | `/confessions` | Anonymous sharing platform |
| Programs | `/programs` | Awareness campaigns, workshops, youth programs, recovery groups |
| Contact | `/contact` | Contact form, information, and map |
| Get Involved | `/get-involved` | Volunteer, partner, donate, attend events |
| Join Us | `/join-us` | Volunteer roles, partnership types, events, donation |
| Resources | `/resources` | Articles, podcasts, videos, downloadable toolkits |
| Founders | `/founders` | Detailed founder and team profiles |
| Admin | `/admin` | Internal dashboard (mock data) |

---

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **UI Components:** Radix UI primitives via shadcn/ui
- **Icons:** Lucide React
- **Database:** Supabase (configured, not actively used in current pages)
- **Theme:** next-themes (light/dark/system)
- **Multi-language:** Custom i18n system (English, Amharic, Afan Oromo)

---

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout (navbar, footer, providers)
│   ├── globals.css         # Global styles and CSS variables
│   ├── about/              # About page
│   ├── get-help/           # Support resources
│   ├── community/          # Community overview
│   ├── forum/              # Discussion forum
│   ├── stories/            # Recovery stories
│   ├── confessions/        # Anonymous sharing
│   ├── programs/           # Programs listing
│   ├── contact/            # Contact form
│   ├── get-involved/       # Engagement opportunities
│   ├── join-us/            # Volunteer and partnership
│   ├── resources/          # Resource library
│   ├── founders/           # Founder profiles
│   └── admin/              # Admin dashboard
├── components/             # Reusable UI components
│   ├── ui/                 # shadcn/ui primitives
│   ├── navbar.tsx          # Site navigation
│   ├── footer.tsx          # Site footer
│   ├── welcome-modal.tsx   # First-visit welcome
│   ├── team-member-card.tsx# Team profile card
│   ├── theme-switcher.tsx  # Dark/light toggle
│   ├── language-switcher.tsx # Language selector
│   ├── floating-telegram.tsx# Telegram help bot
│   └── ...                 # Other components
├── contexts/               # React context providers
│   ├── theme-context.tsx   # Theme management
│   └── language-context.tsx # Language/i18n
├── lib/                    # Utilities and content
│   ├── utils.ts            # cn() helper
│   ├── i18n.ts             # Translation strings
│   └── content/            # Static content data
├── hooks/                  # Custom React hooks
├── public/images/          # Static images and branding
└── scripts/                # Database scripts
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20)
- pnpm (package manager)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Aura-community

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The site will be available at `http://localhost:3000`.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Environment Variables

Create a `.env.local` file if Supabase features are needed:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

---

## Features

### Current

- Responsive navigation with mobile menu
- Light/dark theme toggle
- Multi-language support (English, Amharic, Afan Oromo)
- Community forum with categories and search
- Anonymous confessions platform
- Recovery stories section
- Resource library with articles, podcasts, videos, and toolkits
- Contact form with map integration
- Program listings with registration
- Volunteer and partnership opportunities
- First-visit welcome modal
- Telegram help bot integration
- Admin dashboard (mock data)

### Planned

- Supabase-backed forum and user accounts
- Anonymous peer chat with escalation pathways
- Mental wellness resource library with Amharic/English content
- Event calendar and registration
- Referral tracking for partner clinics

---

## Content and UX Principles

- Use plain, compassionate language instead of corporate jargon
- Keep critical support actions visible and easy to access
- Prioritize emotional safety, consent, and privacy
- Maintain clarity for first-time visitors in distress
- Every number represents real people — measure impact with care

---

## License

This project is built for AURA — Alliance for Understanding Recovery & Awareness. All rights reserved.
