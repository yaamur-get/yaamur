import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Calendar, ArrowLeft } from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";

const newsItems = [
  {
    id: 1,
    title: "افتتاح مسجد الرحمة الجديد",
    description: "بحمد الله تم افتتاح مسجد الرحمة الجديد بحضور أكثر من 500 مصلي في حفل بهيج",
    date: "2025-11-01",
    image: "/placeholder-mosque-1.jpg"
  },
  {
    id: 2,
    title: "إطلاق برنامج الصيانة الشاملة",
    description: "برنامج متكامل للصيانة الدورية يشمل 50 مسجداً في المنطقة الشرقية",
    date: "2025-10-28",
    image: "/placeholder-mosque-2.jpg"
  },
  {
    id: 3,
    title: "توقيع شراكة استراتيجية جديدة",
    description: "شراكة مع مؤسسة الخير لدعم مشاريع بناء المساجد في المناطق النائية",
    date: "2025-10-25",
    image: "/placeholder-mosque-3.jpg"
  },
  {
    id: 4,
    title: "إنجاز 150 مسجداً في عامين",
    description: "نفخر بإنجاز بناء وتشغيل 150 مسجداً خلال عامين من العمل المتواصل",
    date: "2025-10-20",
    image: "/placeholder-mosque-4.jpg"
  }
];

export function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {newsItems.map((news) => (
            <div key={news.id} className="min-w-full">
              <Card className="border-2 border-gray-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#08704C]/20 via-[#00A186]/20 to-[#7B4F28]/20 relative overflow-hidden group">
                      <div className="absolute inset-0 pattern-diagonal"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                          <Calendar className="w-16 h-16 text-[#08704C]" />
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-sm font-bold text-[#08704C]">جديد</span>
                      </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                      <div className="flex items-center gap-2 text-[#08704C]">
                        <Calendar className="w-5 h-5" />
                        <ClientOnly>
                          <span className="text-sm font-semibold" dir="ltr">
                            {new Date(news.date).toLocaleDateString("ar-SA", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </span>
                        </ClientOnly>
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                        {news.title}
                      </h3>

                      <p className="text-gray-600 text-lg leading-relaxed">
                        {news.description}
                      </p>

                      <Button
                        variant="ghost"
                        className="text-[#08704C] hover:text-white hover:bg-[#08704C] w-fit p-0 h-auto font-bold group/btn"
                      >
                        <span className="group-hover/btn:mr-2 transition-all">اقرأ المزيد</span>
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover/btn:mr-0 transition-all" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10">
        <Button
          size="icon"
          variant="ghost"
          onClick={goToPrevious}
          className="pointer-events-auto w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-2xl hover:shadow-3xl border-2 border-gray-100 hover:border-[#08704C]/30 transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-[#08704C]" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={goToNext}
          className="pointer-events-auto w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white shadow-2xl hover:shadow-3xl border-2 border-gray-100 hover:border-[#08704C]/30 transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-[#08704C]" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-12 bg-gradient-to-r from-[#08704C] to-[#00A186]"
                : "w-2.5 bg-gray-300 hover:bg-[#08704C]/50"
            }`}
            aria-label={`الذهاب إلى الخبر ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
