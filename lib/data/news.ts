export type NewsItem = { date: string; title: string; url?: string; description?: string };
export const news: NewsItem[] = [
  {
    date: "2025-11-08",
    title: "Blue Futures website goes live",
    description: "Our official website is now operational! Stay tuned for updates on speakers, agenda, and registration.",
    url: "/"
  },
  {
    date: "2025-10-15",
    title: "Blue Futures 2026 announced",
    description: "oikos Lisbon announces Blue Futures conference for February 2026 at Nova SBE, focusing on ocean sustainability.",
    url: "/about"
  }
];
