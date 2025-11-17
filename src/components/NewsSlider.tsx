import { useState, useEffect, useRef, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Calendar, ArrowLeft } from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";

const newsItems = [
  {
    id: 1,
    title: "افتتاح مسجد الرحمة الجديد",
    description:
      "بحمد الله تم افتتاح مسجد الرحمة الجديد بحضور أكثر من 500 مصلٍ في حفل بهيج.",
    date: "2025-11-01"
  },
  {
    id: 2,
    title: "إطلاق حملة دعم بناء المساجد",
    description:
      "حملة جديدة لدعم بناء المساجد في القرى النائية بمشاركة أهل الخير.",
    date: "2025-10-28"
  },
  {
    id: 3,
    title: "توقيع شراكة استراتيجية جديدة",
    description:
      "شراكة مع إحدى المؤسسات الخيرية لتعزيز مشاريع بناء وتشغيل المساجد.",
    date: "2025-10-25"
  },
  {
    id: 4,
    title: "إنجاز 150 مسجداً في عامين",
    description:
      "نفخر بإنجاز بناء وتشغيل 150 مسجداً خلال عامين من العمل المتواصل.",
    date: "2025-10-20"
  }
];

export function NewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (typeof window === "undefined") return;
      setItemsPerSlide(window.innerWidth >= 1024 ? 2 : 1);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(newsItems.length / itemsPerSlide);

  useEffect(() => {
    setCurrentSlide((prev) => {
      const maxIndex = totalSlides - 1;
      return prev > maxIndex ? maxIndex : prev;
    });
  }, [itemsPerSlide, totalSlides]);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 60) handleNext();
    if (diff < -60) handlePrevious();
  };

  const startIndex = currentSlide * itemsPerSlide;
  const visibleItems = newsItems.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div
      className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute -top-8 left-4 z-20 bg-white/90 px-3 py-1 rounded-full shadow text-xs text-gray-700">
        {currentSlide + 1}/{totalSlides}
      </div>

      <div
        className="overflow-hidden rounded-3xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
          {visibleItems.map((news) => (
            <Card
              key={news.id}
              className="border border-gray-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-2xl"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-4/12 bg-gradient-to-br from-[#08704C]/15 via-[#00A186]/15 to-[#7B4F28]/15 flex items-center justify-center py-5 md:py-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-7 h-7 md:w-8 md:h-8 text-[#08704C]" />
                    </div>
                  </div>

                  <div className="md:w-8/12 p-5 md:p-6 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-2 text-[#08704C]">
                      <Calendar className="w-4 h-4" />
                      <ClientOnly>
                        <span className="text-xs md:text-sm font-semibold" dir="ltr">
                          {new Date(news.date).toLocaleDateString("ar-SA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </span>
                      </ClientOnly>
                    </div>

                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {news.description}
                    </p>

                    <Button
                      variant="ghost"
                      className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto text-sm md:text-base font-bold group/btn transition-all duration-300 mt-4 md:mt-6"
                    >
                      <span className="group-hover/btn:mr-2 transition-all duration-300">
                        اقرأ المزيد
                      </span>
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover/btn:mr-0 transition-all duration-300" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          size="icon"
          variant="ghost"
          onClick={handlePrevious}
          className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
          aria-label="السابق"
        >
          <ChevronRight className="w-5 h-5 text-[#08704C]" />
        </Button>

        <div className="flex justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-10 bg-gradient-to-r from-[#08704C] to-[#00A186] shadow-md"
                  : "w-2.5 bg-gray-300 hover:bg-[#08704C]/50 hover:w-6"
              }`}
              aria-label={`الشريحة ${index + 1}`}
            />
          ))}
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={handleNext}
          className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg border border-gray-100 hover:border-[#08704C]/30 transition-all duration-200 hover:scale-105"
          aria-label="التالي"
        >
          <ChevronLeft className="w-5 h-5 text-[#08704C]" />
        </Button>
      </div>
    </div>
  );
}
