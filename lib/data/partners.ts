export type Partner = {
  name: string;
  url?: string;
  logo?: string;
  tier: "Host" | "Main Sponsor" | "Partner" | "Institutional Partner";
  description?: string;
};

export const partners: Partner[] = [
  // Hosts
  {
    name: "Nova SBE",
    tier: "Host",
    url: "https://www.novasbe.pt",
    description: "Nova School of Business and Economics - Host venue"
  },
  {
    name: "oikos International",
    tier: "Host",
    url: "https://oikos-international.org",
    description: "International student organization for sustainable economics and management"
  },
  {
    name: "oikos Lisbon",
    tier: "Host",
    url: "https://oikos-lisbon.org",
    description: "Local chapter organizing Blue Futures 2026"
  },

  // Main Sponsors (placeholder for future sponsors)

  // Partners
  {
    name: "Municipality of Cascais",
    tier: "Partner",
    url: "https://www.cascais.pt",
    description: "Local government partner supporting ocean sustainability initiatives"
  },
  {
    name: "Global Shapers Lisbon",
    tier: "Partner",
    url: "https://www.globalshapers.org",
    description: "World Economic Forum community of young leaders"
  },
  {
    name: "Calouste Gulbenkian Foundation",
    tier: "Partner",
    url: "https://gulbenkian.pt",
    description: "Portuguese private institution supporting arts, charity, science, and education"
  },
  {
    name: "WWF Portugal",
    tier: "Partner",
    url: "https://www.wwf.pt",
    description: "World Wide Fund for Nature - Conservation organization"
  },
  {
    name: "Goparity",
    tier: "Partner",
    url: "https://www.goparity.com",
    description: "Sustainable investment platform"
  },

  // Institutional Partners
  {
    name: "Blue Ocean Foundation",
    tier: "Institutional Partner",
    url: "https://www.oceanoazulfoundation.org",
    description: "Foundation dedicated to ocean literacy and conservation"
  }
];
