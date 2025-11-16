import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { Building2, Wrench, Sparkles, ChevronDown, ExternalLink } from "lucide-react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative h-full w-40 shrink-0">
              <Image
                src="/yaamurlogoone.png"
                alt="شعار جمعية يعمر للعناية بالمساجد"
                width={200}
                height={40}
                className="object-contain object-center transition-all duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
            >
              الرئيسية
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group flex items-center gap-1">
                خدماتنا
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServicesMenu ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
              </button>

              {showServicesMenu && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/services/construction"
                    className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                  >
                    <Building2 className="w-4 h-4" />
                    البناء
                  </Link>
                  <Link
                    href="/services/maintenance"
                    className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                  >
                    <Wrench className="w-4 h-4" />
                    الصيانة
                  </Link>
                  <Link
                    href="/services/operation"
                    className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                  >
                    <Sparkles className="w-4 h-4" />
                    التشغيل
                  </Link>
                </div>
              )}
            </div>

            <Link href="/programs" className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group">
              برامجنا
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/news" className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group">
              الأخبار
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group">
              عن يعمر
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/careers" className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group">
              الفرص الوظيفية
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/governance" className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group">
              الحوكمة
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#contact" className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group">
              تواصل معنا
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <MobileMenu isScrolled={isScrolled} />

          <Button
            className="hidden sm:flex bg-gradient-to-r from-[#08704C] via-[#00A186] to-[#08704C] hover:shadow-2xl text-white shadow-lg transition-all duration-300 hover:scale-105 bg-[length:200%_100%] hover:bg-right"
            size="lg"
          >
            <ExternalLink className="w-4 h-4 ml-2" />
            المتجر الخيري
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;

