export type NewsItem = {
  date: string;
  title: string;
  url?: string;
  excerpt?: string;
};

export const news: NewsItem[] = [
  {
    date: "2025-12-20",
    title: "Blue Futures Partners with Ocean Conservation Alliance",
    url: "https://example.com/ocean-partnership",
    excerpt: "New partnership announced to promote sustainable ocean practices and marine biodiversity protection."
  },
  {
    date: "2025-12-15",
    title: "Call for Speakers: Submit Your Proposals",
    url: "https://example.com/call-for-speakers",
    excerpt: "We're inviting experts, researchers, and changemakers to share their insights at Blue Futures 2026."
  },
  {
    date: "2025-12-10",
    title: "Early Bird Tickets Now Available",
    url: "/tickets",
    excerpt: "Limited early bird tickets are now available for Blue Futures Lisbon 2026."
  },
  {
    date: "2025-11-25",
    title: "UN Decade of Ocean Science: Our Role",
    url: "https://example.com/un-ocean-decade",
    excerpt: "Blue Futures aligns with the UN Decade of Ocean Science for Sustainable Development (2021-2030)."
  },
  {
    date: "2025-11-08",
    title: "Website operational (draft)",
    excerpt: "Our website is now live! Stay tuned for updates on speakers, agenda, and registration."
  }
];
