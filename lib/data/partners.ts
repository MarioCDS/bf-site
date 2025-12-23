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
    logo: "https://www.novasbe.unl.pt/ImageToBytesHandler.ashx?id=6513",
    description: "Nova School of Business and Economics - Host venue"
  },
  {
    name: "oikos International",
    tier: "Host",
    url: "https://oikos-international.org",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Oikos_International.jpg",
    description: "International student organization for sustainable economics and management"
  },
  {
    name: "oikos Lisbon",
    tier: "Host",
    url: "https://oikos-lisbon.org",
    logo: "https://www.novasbe.unl.pt/Portals/0/Images/clubs_logos/oikos_lisbon.png",
    description: "Local chapter organizing Blue Futures 2026"
  },

  // Main Sponsors (placeholder for future sponsors)

  // Partners
  {
    name: "Municipality of Cascais",
    tier: "Partner",
    url: "https://www.cascais.pt",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4E0GO_dls3-bYaGsqCW9sGqRuSw0HGA9rA&s",
    description: "Local government partner supporting ocean sustainability initiatives"
  },
  {
    name: "Global Shapers Lisbon",
    tier: "Partner",
    url: "https://www.globalshapers.org",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Global_Shapers_Logo.svg/1200px-Global_Shapers_Logo.svg.png",
    description: "World Economic Forum community of young leaders"
  },
  {
    name: "Calouste Gulbenkian Foundation",
    tier: "Partner",
    url: "https://gulbenkian.pt",
    logo: "https://www.impacteurope.net/sites/www.impacteurope.net/files/styles/large/public/logo-images/Calouste_Gulbenkian_Foundation.jpg?itok=z5i2yIRx",
    description: "Portuguese private institution supporting arts, charity, science, and education"
  },
  {
    name: "WWF Portugal",
    tier: "Partner",
    url: "https://www.wwf.pt",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVt7qD8-SzPuiXxBSlE3FGe4rFwXuz8AGoqw&s",
    description: "World Wide Fund for Nature - Conservation organization"
  },
  {
    name: "Goparity",
    tier: "Partner",
    url: "https://www.goparity.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB21_Q8pRYBz-IT4MbS2jGo6l_qxJIhvcyCg&s",
    description: "Sustainable investment platform"
  },

  // Institutional Partners
  {
    name: "Blue Ocean Foundation",
    tier: "Institutional Partner",
    url: "https://www.oceanoazulfoundation.org",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpVRMV3kw826xZhKi_6XULn_K2DMF82dH1w&s",
    description: "Foundation dedicated to ocean literacy and conservation"
  }
];
