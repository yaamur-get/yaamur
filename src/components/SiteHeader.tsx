import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { Building2, Wrench, Sparkles, ChevronDown, ExternalLink } from "lucide-react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const hideTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
        hideTimeout.current = null;
      }
    };
  }, []);

  const openServices = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setShowServicesMenu(true);
  };

  const closeServicesWithDelay = (delay = 300) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    // @ts-ignore window.setTimeout typing
    hideTimeout.current = window.setTimeout(() => {
      setShowServicesMenu(false);
      hideTimeout.current = null;
    }, delay);
  };

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
          {/*
          <div className="flex items-center gap-3">
            <div className="relative h-full w-40 shrink-0">
             {/* <Image
                src="/yaamurlogoone.png"
                alt="شعار جمعية يعمر للعناية بالمساجد"
                width={200}
                height={40}
                className="object-contain object-center transition-all duration-300 hover:scale-105"
                priority
              />
              
              
            </div>
          </div>
          */} 
          

          <nav className="hidden lg:flex items-center gap-12 text-lg">
            <Link
              href="/"
              className="relative text-gray-750 hover:text-[#08704C] transition-colors font-semibold  group"
            >
              الرئيسية
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={() => closeServicesWithDelay(300)}
            >
              <button className="relative text-gray-750 hover:text-[#08704C] transition-colors font-semibold group flex items-center gap-1">
                خدماتنا
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServicesMenu ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
              </button>

              {showServicesMenu && (
                <div
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={openServices}
                  onMouseLeave={() => closeServicesWithDelay(300)}
                >
                  <Link
                    href="/services/construction"
                    className="block px-4 py-3 text-gray-750 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                  >
                    <Building2 className="w-4 h-4" />
                    البناء
                  </Link>
                  <Link
                    href="/services/maintenance"
                    className="block px-4 py-3 text-gray-750 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                  >
                    <Wrench className="w-4 h-4" />
                    الصيانة
                  </Link>
                  <Link
                    href="/services/operation"
                    className="block px-4 py-3 text-gray-750 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                  >
                    <Sparkles className="w-4 h-4" />
                    التشغيل
                  </Link>
                </div>
              )}
            </div>

            <Link href="/programs" className="relative text-gray-750 hover:text-[#08704C] transition-colors font-semibold text-lg group">
              مشاريع يعمر
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/news" className="relative text-gray-750 hover:text-[#08704C] transition-colors font-semibold text-lg group">
              الأخبار
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="relative text-gray-750 hover:text-[#08704C] transition-colors font-semibold text-lg group">
              عن يعمر
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/careers" className="relative text-gray-750 hover:text-[#08704C] transition-colors font-semibold text-lg group">
              الفرص الوظيفية
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/governance" className="relative text-gray-750 hover:text-[#08704C] transition-colors font-semibold text-lg group">
              الحوكمة
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#contact" className="relative text-gray-750 hover:text-[#08704C] transition-colors font-semibold text-lg group">
              تواصل معنا
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile store button (left on small screens) */}
          <a href="https://store.yaamur.org.sa/" className="lg:hidden order-last">
            <Button
              className={`mr-2 h-12 w-40 p-0 rounded-md flex flex-col items-center justify-center shadow-lg overflow-hidden ${
                isScrolled
                  ? "bg-white text-[#08704C]"
                  : "bg-gradient-to-r from-[#08704C] via-[#00A186] to-[#08704C] text-white"
              }`}
            >
              
            <span className="text-xl leading-tight text-center">تبرع </span>
            </Button>
          </a>

          <MobileMenu isScrolled={isScrolled} />

          <a href="https://store.yaamur.org.sa/">
            <Button
              className="hidden sm:flex bg-gradient-to-r from-[#08704C] via-[#00A186] to-[#08704C] hover:shadow-2xl text-white shadow-lg transition-all duration-300 hover:scale-105 bg-[length:200%_100%] hover:bg-right"
              size="lg"
            >
              <ExternalLink className="w-4 h-4 ml-2" />
              المتجر الإلكتروني
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;

