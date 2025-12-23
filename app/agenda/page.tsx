import { agenda, AgendaItem } from "@/lib/data/agenda";

const typeColors: Record<AgendaItem["type"], string> = {
  opening: "bg-brand-light/20 border-brand-light",
  panel: "bg-blue-50 border-blue-300",
  talk: "bg-purple-50 border-purple-300",
  fireside: "bg-amber-50 border-amber-300",
  break: "bg-gray-50 border-gray-200",
  closing: "bg-brand/10 border-brand",
  partner: "bg-green-50 border-green-300"
};

const typeLabels: Record<AgendaItem["type"], string> = {
  opening: "Opening",
  panel: "Panel Discussion",
  talk: "Keynote",
  fireside: "Fireside Chat",
  break: "Break",
  closing: "Closing",
  partner: "Partner Session"
};

export default function AgendaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920"
            alt="Ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Conference Agenda</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-4">
            February 27, 2026 — Starting at 14:00
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            One day of inspiring talks, panels, and networking opportunities
          </p>
        </div>
      </section>

      {/* Agenda Timeline */}
      <section className="py-16 bg-gradient-to-br from-brand-light/5 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Legend */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {Object.entries(typeLabels).map(([type, label]) => (
                <div key={type} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 rounded-full ${typeColors[type as AgendaItem["type"]].split(" ")[0]}`}></div>
                  <span className="text-gray-600">{label}</span>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {agenda.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border-l-4 p-6 md:p-8 ${typeColors[item.type]} bg-blue-100 shadow-sm`}
                >
                  {/* Time and Type Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="text-xl font-bold text-brand">
                      {item.time}
                      {item.endTime && <span className="text-gray-400 font-normal"> — {item.endTime}</span>}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === "panel" ? "bg-blue-100 text-blue-700" :
                      item.type === "talk" ? "bg-purple-100 text-purple-700" :
                      item.type === "fireside" ? "bg-amber-100 text-amber-700" :
                      item.type === "partner" ? "bg-green-100 text-green-700" :
                      item.type === "break" ? "bg-gray-100 text-gray-600" :
                      "bg-brand/10 text-brand"
                    }`}>
                      {typeLabels[item.type]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{item.title}</h3>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  )}

                  {/* Speakers, Moderator, Partner */}
                  <div className="flex flex-wrap gap-4 mt-4">
                    {item.speakers && item.speakers.length > 0 && (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-sm text-gray-600">
                          <strong>Speakers:</strong> {item.speakers.join(", ")}
                        </span>
                      </div>
                    )}
                    {item.moderator && (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        <span className="text-sm text-gray-600">
                          <strong>Moderator:</strong> {item.moderator}
                        </span>
                      </div>
                    )}
                    {item.partner && (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-600">
                          <strong>Presented by:</strong> {item.partner}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-brand/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600">
              <strong>Note:</strong> This agenda is a draft and subject to change. Speaker confirmations
              and detailed session information will be updated as we approach the event date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
