import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, Wrench, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isScrolled: boolean;
}

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesSubmenu, setShowServicesSubmenu] = useState(false);
  const [showGovernanceSubmenu, setShowGovernanceSubmenu] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 p-2 h-12 w-12 ${isScrolled ? "text-gray-900" : "text-gray-700"}`}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-white shadow-2xl z-40 rounded-b-3xl border-t border-gray-200 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1 p-3">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl"
              >
                الرئيسية
              </Link>

              <div>
                <button
                  onClick={() => setShowServicesSubmenu(!showServicesSubmenu)}
                  className="w-full text-right text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl flex items-center justify-between"
                >
                  <span>خدماتنا</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showServicesSubmenu ? 'rotate-180' : ''}`} />
                </button>
                
                {showServicesSubmenu && (
                  <div className="mr-4 mt-1 space-y-1">
                    <Link
                      href="/services/construction"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl flex items-center gap-3"
                    >
                      <Building2 className="w-4 h-4" />
                      البناء
                    </Link>
                    <Link
                      href="/services/maintenance"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl flex items-center gap-3"
                    >
                      <Wrench className="w-4 h-4" />
                      الصيانة
                    </Link>
                    <Link
                      href="/services/operation"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl flex items-center gap-3"
                    >
                      <Sparkles className="w-4 h-4" />
                      التشغيل
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/programs"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl"
              >
                مشاريع يعمر 
              </Link>

              <Link
                href="/news"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl"
              >
                الأخبار
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl"
              >
                عن يعمر
              </Link>

              <Link
                href="/careers"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl"
              >
                الفرص الوظيفية
              </Link>

              <div>
                <button
                  onClick={() => setShowGovernanceSubmenu(!showGovernanceSubmenu)}
                  className="w-full text-right text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl flex items-center justify-between"
                >
                  <span>الحوكمة</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showGovernanceSubmenu ? 'rotate-180' : ''}`} />
                </button>

                {showGovernanceSubmenu && (
                  <div className="mr-4 mt-1 space-y-1">
                    <Link
                      href="/governance#bylaws"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl"
                    >
                      اللائحة الأساسية
                    </Link>
                    <Link
                      href="/governance#policies"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl"
                    >
                      السياسات
                    </Link>
                    <Link
                      href="/governance#procedures"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl"
                    >
                      الآليات والإجراءات
                    </Link>
                    <Link
                      href="/governance#disclosure"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl"
                    >
                      الإفصاح والبيانات التنظيمية
                    </Link>
                    <Link
                      href="/governance#reports"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-600 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-medium py-2 px-4 rounded-xl"
                    >
                      التقارير والبيانات المالية
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#08704C] hover:bg-[#08704C]/5 transition-all font-semibold py-3 px-4 rounded-xl"
              >
                تواصل معنا
              </Link>
            </nav>
            <div className="p-6 border-t border-gray-200">
              <a href="https://store.yaamur.org.sa/">
              <Button className="w-full bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-xl py-6 text-lg">
                تبرع الآن
              </Button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
