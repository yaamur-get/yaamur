
import { useEffect, useState } from "react";

const partners = [
  { id: 1, name: "شريك 1" },
  { id: 2, name: "شريك 2" },
  { id: 3, name: "شريك 3" },
  { id: 4, name: "شريك 4" },
  { id: 5, name: "شريك 5" },
  { id: 6, name: "شريك 6" },
  { id: 7, name: "شريك 7" },
  { id: 8, name: "شريك 8" },
];

export function PartnersCarousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {partners.map((partner) => (
          <div
            key={partner.id}
            onMouseEnter={() => setHoveredId(partner.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`aspect-square rounded-full bg-gray-50 border-2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
              hoveredId === partner.id
                ? "border-emerald-400 shadow-xl scale-110 bg-white"
                : "border-gray-200 hover:border-emerald-300 hover:shadow-lg"
            }`}
          >
            <span
              className={`font-bold transition-colors ${
                hoveredId === partner.id ? "text-emerald-600" : "text-gray-400"
              }`}
            >
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
