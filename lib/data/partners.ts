export type Partner = { name: string; url?: string; tier?: "Host"|"Main"|"Partner"|"Supporter"|"Supporting" };
export const partners: Partner[] = [
  { name: "Nova SBE", tier: "Host" },
  { name: "oikos International", tier: "Host" },
  { name: "Municipality of Cascais", tier: "Partner" },
  { name: "Global Shapers Lisbon", tier: "Partner" },
  { name: "Calouste Gulbenkian Foundation", tier: "Partner" },
  { name: "WWF / ANP", tier: "Partner" },
  { name: "Goparity", tier: "Partner" }
];
