import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, Wrench, Newspaper, Info, Phone } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isScrolled: boolean;
}

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "الرئيسية", href: "#home", icon: Building2 },
    { label: "برامجنا", href: "#services", icon: Wrench },
    { label: "الأخبار", href: "#news", icon: Newspaper },
    { label: "من نحن", href: "#about", icon: Info },
    { label: "تواصل معنا", href: "#contact", icon: Phone }
  ];

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 ${isScrolled ? "text-gray-900" : "text-gray-700"}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-white shadow-2xl z-40 rounded-b-3xl border-t border-gray-200 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1 p-3">
              {[
                { label: "الرئيسية", href: "/#home" },
                { label: "برامجنا", href: "/programs" },
                { label: "الأخبار", href: "/#news" },
                { label: "من نحن", href: "/#about" },
                { label: "تواصل معنا", href: "/#contact" }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-6 border-t border-gray-200">
              <Button className="w-full bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-xl py-6 text-lg">
                المتجر الخيري
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
