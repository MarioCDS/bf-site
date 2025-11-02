# Blue Futures – Lisbon 2026 (Static Next.js on Vercel)

Created with Next.js 14 + Tailwind CSS. 


## Edit content
- `lib/data/speakers.ts`
- `lib/data/agenda.ts`
- `lib/data/partners.ts`
- `lib/data/news.ts`
- Hero text: `app/page.tsx`
- Branding colors: `tailwind.config.ts`
- Logo: replace `public/logo.svg`
- Images: put files in `public/` (e.g., `public/speakers/ana.jpg`)

## TO:DO Contact form (free, no server)
- Create a free form at **Formspree** and copy its endpoint.
- Edit `app/contact/page.tsx`, replace `https://formspree.io/f/REPLACE_WITH_YOUR_ID`.

## Pages included
Home, About, Speakers (+details), Agenda (2-day), Partners, Sponsorship, Tickets,
Team, News, Search, Contact. SEO: `sitemap.ts` and `robots.ts` included.
