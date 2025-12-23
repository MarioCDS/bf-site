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
    slug: "vitorino-mello-oliveira",
    name: "Vitorino Mello Oliveira",
    title: "Diplomat; Assistant Professor",
    org: "Nova SBE",
    bio: "Advisor and special guest invited to support the program.",
    headshot: "https://www.novasbe.unl.pt/Portals/0/Faculty/14137.jpg"
  },
  {
    slug: "tiago-pitta-e-cunha",
    name: "Tiago Pitta e Cunha",
    title: "CEO",
    org: "Blue Ocean Foundation",
    bio: "Invited to contribute to debates on ocean policy.",
    headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0sYKSR0XikRBMKPWE5lAOEdzo-esBfYaLA&s"
  },
  {
    slug: "emanuel-goncalves",
    name: "Emanuel Gonçalves",
    title: "Scientist",
    org: "Blue Ocean Foundation",
    bio: "Marine science perspective on blue economy."
  },
  {
    slug: "carlos-duarte",
    name: "Carlos Duarte",
    title: "Director",
    org: "Gulbenkian Blue Carbon Initiative",
    bio: "Blue carbon and regenerative oceans.",
    headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqRev5yPctdqjA1OYuMSFdY2ecKfcz6Y5bA&s"
  }
];
