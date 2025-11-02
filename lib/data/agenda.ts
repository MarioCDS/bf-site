export type AgendaItem = {
  day: 1 | 2;
  time: string;
  title: string;
  description?: string;
  speakers?: string[];
  location?: string;
};

export const agenda: AgendaItem[] = [
  { day: 1, time: "08:30", title: "Check-in" },
  { day: 1, time: "09:00", title: "Exhibition: Documentary 'Oceans'" },
  { day: 1, time: "10:00", title: "Opening remarks" },
  { day: 1, time: "10:10", title: "Inspiration speech", speakers: [] },
  { day: 1, time: "10:30", title: "Talk 1 — Invited Speaker" },
  { day: 1, time: "11:00", title: "Panel debate 1 — open to public" },
  { day: 1, time: "12:15", title: "Partner talks 1" },
  { day: 1, time: "12:40", title: "Lunch Break" },
  { day: 1, time: "14:00", title: "Fireside Chat 1" },
  { day: 1, time: "14:20", title: "Talk 2 — Inspirational" },
  { day: 1, time: "15:00", title: "Coffee Break" },
  { day: 1, time: "15:00", title: "Panel debate 2" },
  { day: 1, time: "16:00", title: "Talk 3" },
  { day: 1, time: "16:30", title: "Partner talks 2" },
  { day: 1, time: "16:50", title: "Closing remarks – Day 1" },

  { day: 2, time: "08:30", title: "Check-in" },
  { day: 2, time: "09:00", title: "Opening remarks" },
  { day: 2, time: "09:10", title: "Partner talks 3" },
  { day: 2, time: "09:30", title: "Fireside Chat" },
  { day: 2, time: "09:45", title: "Coffee Break" },
  { day: 2, time: "10:00", title: "Talk 4" },
  { day: 2, time: "10:30", title: "Talk 5 — Inspirational" },
  { day: 2, time: "10:45", title: "Panel debate 3" },
  { day: 2, time: "11:15", title: "Coffee Break" },
  { day: 2, time: "11:30", title: "Panel debate 4" },
  { day: 2, time: "12:20", title: "Lunch Break" },
  { day: 2, time: "14:00", title: "Fireside Chat 2" },
  { day: 2, time: "14:20", title: "Talk 6" },
  { day: 2, time: "14:45", title: "Coffee Break" },
  { day: 2, time: "15:00", title: "Talk 7" },
  { day: 2, time: "16:00", title: "Fireside Chat 3" },
  { day: 2, time: "16:30", title: "Talk 8" },
  { day: 2, time: "16:50", title: "Closing remarks – Day 2" }
];
