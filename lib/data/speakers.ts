export type Speaker = {
  slug: string;
  name: string;
  title: string;
  org?: string;
  bio: string;
  headshot?: string;
};

export const speakers: Speaker[] = [
  {
    slug: "sergio-carvalho",
    name: "Sérgio Carvalho",
    title: "Deputy Director – International Advocacy",
    org: "Oceano Azul Foundation",
    bio: "Ocean affairs and law of the sea expert with over fifteen years of professional experience. Currently Deputy Director for International Advocacy at the Oceano Azul Foundation. Former Counsellor for Legal Affairs, Oceans and the Law of the Sea at the Permanent Mission of Portugal to the United Nations, and former Head of Unit for Ocean Affairs and Sustainable Development at the Portuguese Ministry of Foreign Affairs. Holds a Law degree from the University of Coimbra, a Master’s in European Affairs from the Catholic University of Lisbon, and completed the first phase of a PhD in International Ocean Law and Policy.",
    headshot: "https://ffms.pt/sites/default/files/styles/autor_profile/public/2025-09/S%C3%A9rgio%20Carvalho.jpg.webp?itok=4SWLPCQk"
  },
  {
    slug: "marta-martins",
    name: "Marta Martins",
    title: "Associate Professor & Researcher",
    org: "Nova FCT",
    bio: "Associate Professor at the Faculty of Science and Technology of NOVA University Lisbon (NOVA FCT). Holds a PhD in Environmental Sciences and teaches Aquatic Ecology, Ecotoxicology, Aquatic Pollution, and Environmental Risk Assessment. Coordinator of MARlab – Marine Research and Environmental Risk Lab, part of the Marine and Environmental Sciences Centre (MARE).",
    headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQkGRb7HjxtVOSbB-ZUmyFNW8WUmPK4Qdog&s"
  },
  {
    slug: "assuncao-cristas",
    name: "Assunção Cristas",
    title: "Former Minister of the Sea",
    org: "Nova School of Law",
    bio: "Former Portuguese Minister of the Sea with extensive experience in public policy, governance, and maritime affairs. Currently affiliated with NOVA School of Law.",
    headshot: "https://novalaw.unl.pt/wp-content/uploads/2023/12/SITE-AssuncaoCristas_VicePresidente_CF_mobile_cinza.jpg"
  },
  {
    slug: "emanuel-goncalves",
    name: "Emanuel Gonçalves",
    title: "Chief Scientist & Board Member",
    org: "Oceano Azul Foundation",
    bio: "Chief Scientist and Member of the Board of the Oceano Azul Foundation, contributing scientific leadership on marine conservation, ocean sustainability, and blue economy initiatives.",
    headshot: "https://oceanoazulfoundation.org/wp-content/uploads/2022/08/fotografias-cortadas-equipa-FOA-150x150.png"
  },
  {
    slug: "susana-fonseca",
    name: "Susana Fonseca",
    title: "Vice-President",
    org: "ZERO – Environmental Association",
    bio: "Vice-President of ZERO, a leading Portuguese environmental NGO, working on sustainability, environmental policy, and climate action.",
    headshot: "https://cpsa.pt/wp-content/uploads/2025/01/Susana-Fonseca.jpg"
  }
];