export type AgendaItem = {
  time: string;
  endTime?: string;
  title: string;
  description?: string;
  type: "opening" | "panel" | "talk" | "fireside" | "break" | "closing" | "partner";
  speakers?: string[];
  moderator?: string;
  partner?: string;
};

export const agenda: AgendaItem[] = [
  {
    time: "13:30",
    endTime: "14:30",
    title: "Check-in & Documentary Screening – ‘Ocean’",
    description:
        "Participant check-in and screening of David Attenborough’s ‘Ocean’ documentary. This opening moment sets the tone for the afternoon, inviting participants to reflect on the urgency of marine conservation and our collective responsibility for the future of the oceans.",
    type: "opening"
  },
  {
    time: "14:30",
    endTime: "14:50",
    title: "Opening Remarks",
    description:
        "Welcome and opening of the conference, setting a collective ambition for the day and highlighting the role of leadership, academia, and local communities in shaping a sustainable blue future.",
    type: "opening",
    speakers: [
      "Dean of Nova School of Business and Economics (TBC)",
      "Mayor of Cascais Municipality (TBC)"
    ]
  },
  {
    time: "14:50",
    endTime: "15:10",
    title: "Situation Sketch",
    description:
        "Scientific overview of the current state of marine ecosystems and conservation.",
    type: "talk",
    speakers: ["Emanuel Gonçalves – Oceano Azul Foundation"]
  },
  {
    time: "15:10",
    endTime: "15:30",
    title: "Fireside Chat – Marine Pollution & Solutions",
    description:
        "A conversation focused on marine pollution and solution-oriented approaches for a sustainable blue economy.",
    type: "fireside",
    speakers: ["Marta Martins – NOVA FCT & MARlab"],
    moderator: "Susana Fonseca – ZERO"
  },
  {
    time: "15:30",
    endTime: "16:15",
    title: "Panel Debate – Blue Carbon",
    description:
        "A discussion on Blue Carbon and the potential of Portugal’s maritime area for the Blue Economy.",
    type: "panel",
    speakers: [
      "Assunção Cristas – Former Minister of the Sea",
      "Maria Adelaide Ferreira – IPMA",
      "Carlos Duarte (TBC)"
    ]
  },
  {
    time: "16:15",
    endTime: "16:30",
    title: "Fortuna – Nova SBE’s Tuna",
    description:
        "Cultural interlude showcasing Portuguese academic tradition.",
    type: "partner",
    partner: "Nova School of Business and Economics"
  },
  {
    time: "16:30",
    endTime: "17:00",
    title: "Coffee Break – Blue Innovation Hub",
    description:
        "Networking break at the Blue Innovation Hub and Sustainable Food Court.",
    type: "break"
  },
  {
    time: "17:00",
    endTime: "17:10",
    title: "Inspirational Talk – The Ocean and Portugal",
    description:
        "Reflections on the importance of the ocean for Portugal.",
    type: "talk",
    speakers: ["President of the Portuguese Republic (TBC)"]
  },
  {
    time: "17:10",
    endTime: "17:30",
    title: "Talk – Legislative Issues",
    description:
        "Discussion on regulatory and governance challenges shaping ocean sustainability.",
    type: "talk",
    speakers: ["Sérgio Carvalho – Oceano Azul Foundation"]
  },
  {
    time: "17:30",
    endTime: "18:20",
    title: "Panel – EEKC (Environmental Economics Knowledge Center)",
    description:
        "Moderated debate on scaling impact in ocean sustainability and the blue economy.",
    type: "panel",
    speakers: ["Invited experts from EEKC (TBC)"]
  },
  {
    time: "18:20",
    endTime: "18:30",
    title: "Closing Remarks",
    description:
        "Key takeaways and next steps.",
    type: "closing",
    speakers: ["Diogo Silva – oikos Lisbon"]
  },
  {
    time: "18:30",
    endTime: "20:00",
    title: "Cocktail Reception – Blue Innovation Hub",
    description:
        "Informal networking with speakers and participants.",
    type: "break"
  }
];
