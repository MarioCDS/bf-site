export type AgendaItem = {
  time: string;
  endTime?: string;
  title: string;
  type: "opening" | "panel" | "talk" | "fireside" | "break" | "closing" | "partner";
  description?: string;
  speakers?: string[];
  moderator?: string;
  partner?: string;
  location?: string;
};

export const agenda: AgendaItem[] = [
  {
    time: "14:00",
    endTime: "14:15",
    title: "Check-in & Welcome",
    type: "opening",
    description: "Registration and networking. Pick up your badge and conference materials."
  },
  {
    time: "14:15",
    endTime: "14:30",
    title: "Opening Remarks",
    type: "opening",
    description: "Welcome to Blue Futures 2026. Setting the stage for a day of ocean innovation and collaboration.",
    speakers: ["Diogo Silva", "Patricija Zizyte"]
  },
  {
    time: "14:30",
    endTime: "15:15",
    title: "Panel: The Future of the Blue Economy",
    type: "panel",
    description: "Exploring how sustainable ocean practices can drive economic growth while preserving marine ecosystems. Leaders from policy, business, and academia share their vision for a regenerative ocean economy.",
    speakers: ["TBA"],
    moderator: "TBA"
  },
  {
    time: "15:15",
    endTime: "15:45",
    title: "Fireside Chat: Ocean Innovation",
    type: "fireside",
    description: "An intimate conversation about breakthrough technologies and innovations shaping the future of ocean conservation and sustainable use.",
    speakers: ["TBA"]
  },
  {
    time: "15:45",
    endTime: "16:00",
    title: "Coffee Break",
    type: "break",
    description: "Network with fellow participants and visit the Blue Innovation Hub."
  },
  {
    time: "16:00",
    endTime: "16:45",
    title: "Panel: Marine Conservation & Biodiversity",
    type: "panel",
    description: "Protecting ocean biodiversity is crucial for planetary health. This panel brings together marine scientists, conservationists, and policy experts to discuss current challenges and innovative solutions.",
    speakers: ["TBA"],
    moderator: "TBA"
  },
  {
    time: "16:45",
    endTime: "17:15",
    title: "Partner Showcase",
    type: "partner",
    description: "Hear from our partners about their initiatives and commitment to ocean sustainability.",
    partner: "Conference Partners"
  },
  {
    time: "17:15",
    endTime: "18:00",
    title: "Panel: Youth Leadership in Ocean Action",
    type: "panel",
    description: "Young leaders are at the forefront of the ocean movement. This panel celebrates student-led initiatives and discusses how the next generation can drive meaningful change.",
    speakers: ["TBA"],
    moderator: "TBA"
  },
  {
    time: "18:00",
    endTime: "18:30",
    title: "Keynote: A Vision for Blue Futures",
    type: "talk",
    description: "An inspiring keynote address on the possibilities and pathways toward a thriving ocean future.",
    speakers: ["TBA"]
  },
  {
    time: "18:30",
    endTime: "18:45",
    title: "Closing Remarks",
    type: "closing",
    description: "Reflections on the day and a call to action for continued ocean stewardship.",
    speakers: ["Diogo Silva", "Patricija Zizyte"]
  },
  {
    time: "18:45",
    endTime: "20:00",
    title: "Networking Reception",
    type: "break",
    description: "Connect with speakers, partners, and fellow participants at the Plant-Based Food Court. Enjoy sustainable refreshments while continuing the conversation."
  }
];
