## Stack adaptation

Your project runs on TanStack Start (not Express/Mongo). I'll build the same features using the supported equivalents — the visible app is identical to the MERN spec.

| You asked for | Built with |
|---|---|
| Express REST API for contact form | TanStack server route (`/api/contact`) |
| MongoDB storage | Lovable Cloud Postgres (`contact_messages` table) |
| Nodemailer | Skipped for now — submissions saved to DB; can wire up Lovable Email later |
| React + Tailwind + Framer Motion + React Icons | Exactly as specified |

## Defaults I'm picking (since you skipped clarifications)

- **Profile photo**: AI-themed stylized avatar placeholder (you can swap your real photo by replacing one file).
- **Resume button**: Placeholder link — drop `resume.pdf` into `public/` to make it live.
- **Contact form**: Saves to Postgres. Email notification can be added on request.

## Sections (all on a single scrolling landing page with sticky nav, per portfolio convention)

1. **Hero** — name, role, location, tagline, profile image, social icons, Resume + View Projects CTAs, animated AI glow background
2. **About** — bio paragraph
3. **Skills** — grouped cards (Frontend / Backend / Database / AI & Automation / Tools) with React Icons, hover glow, animated grid
4. **Experience** — vertical timeline, two entries, Framer Motion reveal
5. **Projects** — Resume Hub + Eco-Sort AI, glass cards with animated gradient border, tech badges, GitHub buttons
6. **Education** — JLU BCA, timeline card
7. **Certifications** — 6 cards with hover effects
8. **Contact** — form (name/email/message) with Zod validation → POST `/api/contact` → Postgres; plus phone/email/social links

Extras: sticky navbar with active-section highlight, scroll progress bar, smooth scroll, mobile hamburger with animated drawer, SEO meta tags.

## Design

- Dark theme: deep navy base (`oklch` near #0a0f1f), purple/violet accents (#a855f7 → #6366f1 gradients)
- Glassmorphism cards (`backdrop-blur`, subtle borders, soft inner glow)
- Typography: Space Grotesk display + Inter body
- Soft radial glow halos behind hero and sections
- All colors as semantic tokens in `src/styles.css` — no hardcoded hex in components

## Technical build

```text
src/
  routes/
    __root.tsx              # nav + scroll progress + outlet + footer
    index.tsx               # single-page portfolio composing all sections
    api/contact.ts          # POST handler → inserts into contact_messages
  components/
    Navbar.tsx
    ScrollProgress.tsx
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Experience.tsx
      Projects.tsx
      Education.tsx
      Certifications.tsx
      Contact.tsx
    ui/GlassCard.tsx
    ui/SectionHeading.tsx
  lib/
    portfolio-data.ts       # all content (skills, projects, certs) as typed constants
    contact-schema.ts       # shared Zod schema
  assets/
    avatar.jpg              # generated AI-themed placeholder
public/
  resume.pdf                # placeholder note file (swap with real PDF)
```

**Backend**
- Enable Lovable Cloud
- Migration: create `contact_messages` (id, name, email, message, created_at) with RLS — inserts allowed via service-role server route only; no public select
- Server route `src/routes/api/contact.ts`: validates with Zod, inserts via `supabaseAdmin`, returns JSON

**Dependencies to install**: `framer-motion`, `react-icons`, `zod` (likely already present), `react-intersection-observer` for scroll reveals.

## Out of scope (clearly noted)

- No literal Express/Node server process or MongoDB driver — the equivalents above replace them
- Nodemailer email delivery — can be added in a follow-up using Lovable Email
- No separate `client/` + `server/` deploy split; TanStack co-locates both