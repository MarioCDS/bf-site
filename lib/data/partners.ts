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
    name: "oikos Lisbon",
    tier: "Host",
    url: "https://oikos-lisbon.org",
    logo: "https://www.novasbe.unl.pt/Portals/0/Images/clubs_logos/oikos_lisbon.png",
    description: "Local chapter organizing Blue Futures 2026"
  },
  {
    name: "oikos International",
    tier: "Host",
    url: "https://oikos-international.org",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Oikos_International.jpg",
    description: "International student organization for sustainable economics and management"
  },
  // Institutional Partners
  {
    name: "Blue Ocean Foundation",
    tier: "Institutional Partner",
    url: "https://www.oceanoazulfoundation.org",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpVRMV3kw826xZhKi_6XULn_K2DMF82dH1w&s",
    description: "Foundation dedicated to ocean literacy and conservation"
  },
  {
    name: "Municipality of Cascais",
    tier: "Institutional Partner",
    url: "https://www.cascais.pt",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4E0GO_dls3-bYaGsqCW9sGqRuSw0HGA9rA&s",
    description: "Local government partner supporting ocean sustainability initiatives"
  },
  {
    name: "Nova SU",
    tier: "Institutional Partner",
    url: "https://www.novasu.pt/",
    logo: "https://static.wixstatic.com/media/204375_a54f0dc10ce24690b0f2566ecd967328~mv2.png/v1/fit/w_2500,h_1330,al_c/204375_a54f0dc10ce24690b0f2566ecd967328~mv2.png",
    description: "Nova Student Union"
  }
];
