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
    logo: "https://www.novasbe.unl.pt/images/logo-novasbe.svg",
    description: "Nova School of Business and Economics - Host venue"
  },
  {
    name: "oikos International",
    tier: "Host",
    url: "https://oikos-international.org",
    logo: "https://oikos-international.org/wp-content/uploads/2021/03/oikos-logo.svg",
    description: "International student organization for sustainable economics and management"
  },
  {
    name: "oikos Lisbon",
    tier: "Host",
    url: "https://oikos-lisbon.org",
    logo: "https://oikos-international.org/wp-content/uploads/2021/03/oikos-logo.svg",
    description: "Local chapter organizing Blue Futures 2026"
  },

  // Main Sponsors (placeholder for future sponsors)

  // Partners
  {
    name: "Municipality of Cascais",
    tier: "Partner",
    url: "https://www.cascais.pt",
    logo: "https://www.cascais.pt/sites/default/files/logo_cascais.svg",
    description: "Local government partner supporting ocean sustainability initiatives"
  },
  {
    name: "Global Shapers Lisbon",
    tier: "Partner",
    url: "https://www.globalshapers.org",
    logo: "https://widgets.weforum.org/globalshapers/images/GS-Logo-Blue.svg",
    description: "World Economic Forum community of young leaders"
  },
  {
    name: "Calouste Gulbenkian Foundation",
    tier: "Partner",
    url: "https://gulbenkian.pt",
    logo: "https://gulbenkian.pt/wp-content/themes/starter/assets/images/logo.svg",
    description: "Portuguese private institution supporting arts, charity, science, and education"
  },
  {
    name: "WWF Portugal",
    tier: "Partner",
    url: "https://www.wwf.pt",
    logo: "https://wwfint.awsassets.panda.org/img/wwf_logo.svg",
    description: "World Wide Fund for Nature - Conservation organization"
  },
  {
    name: "Goparity",
    tier: "Partner",
    url: "https://www.goparity.com",
    logo: "https://www.goparity.com/hubfs/goparity-logo-primary.svg",
    description: "Sustainable investment platform"
  },

  // Institutional Partners
  {
    name: "Blue Ocean Foundation",
    tier: "Institutional Partner",
    url: "https://www.oceanoazulfoundation.org",
    logo: "https://www.oceanoazulfoundation.org/wp-content/uploads/2020/06/logo-oceano-azul.svg",
    description: "Foundation dedicated to ocean literacy and conservation"
  }
];
