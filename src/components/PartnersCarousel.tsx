
import { Building2, Handshake, Heart, Lightbulb, Shield, Users } from "lucide-react";

const partners = [
  { id: 1, name: "شريك 1", icon: Building2 },
  { id: 2, name: "شريك 2", icon: Handshake },
  { id: 3, name: "شريك 3", icon: Heart },
  { id: 4, name: "شريك 4", icon: Lightbulb },
  { id: 5, name: "شريك 5", icon: Shield },
  { id: 6, name: "شريك 6", icon: Users }
];

export function PartnersCarousel() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            className="group relative"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-square bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center border-2 border-transparent hover:border-[#08704C]/30 group-hover:scale-110 card-elevated">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <partner.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-bold text-gray-700 group-hover:text-[#08704C] transition-colors">
                  {partner.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
