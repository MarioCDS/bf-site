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
    bio: "Advisor and special guest invited to support the program."
  },
  {
    slug: "tiago-pitta-e-cunha",
    name: "Tiago Pitta e Cunha",
    title: "CEO",
    org: "Blue Ocean Foundation",
    bio: "Invited to contribute to debates on ocean policy."
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
    bio: "Blue carbon and regenerative oceans."
  }
];
