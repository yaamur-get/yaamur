
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isScrolled: boolean;
}

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={isScrolled ? "text-gray-900" : "text-gray-700"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 shadow-xl">
          <nav className="flex flex-col p-6 space-y-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-3 border-b border-gray-100"
            >
              الرئيسية
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-3 border-b border-gray-100"
            >
              برامجنا
            </a>
            <a
              href="#news"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-3 border-b border-gray-100"
            >
              الأخبار
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-3 border-b border-gray-100"
            >
              من نحن
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-3 border-b border-gray-100"
            >
              تواصل معنا
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
