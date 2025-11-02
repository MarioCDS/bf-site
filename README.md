# Blue Futures – Lisbon 2026 (Static Next.js on Vercel)

Next.js 14 + Tailwind CSS. No backend/CMS required.

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```

If you hit an ESLint ERESOLVE on Windows:
```powershell
npm pkg set devDependencies.eslint=8.57.0
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. In Vercel, **New Project → Import** the repo.
3. Framework preset: **Next.js**. Keep defaults.
4. **Deploy**.

## Edit content (no code knowledge needed)
- `lib/data/speakers.ts`
- `lib/data/agenda.ts`
- `lib/data/partners.ts`
- `lib/data/news.ts`
- Hero text: `app/page.tsx`
- Branding colors: `tailwind.config.ts`
- Logo: replace `public/logo.svg`
- Images: put files in `public/` (e.g., `public/speakers/ana.jpg`)

## Contact form (free, no server)
- Create a free form at **Formspree** and copy its endpoint.
- Edit `app/contact/page.tsx`, replace `https://formspree.io/f/REPLACE_WITH_YOUR_ID`.
- That’s it — submissions go to your email.

## Pages included
Home, About, Speakers (+details), Agenda (2-day), Partners, Sponsorship, Tickets,
Team, News, Search, Contact. SEO: `sitemap.ts` and `robots.ts` included.
