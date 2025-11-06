import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Building2 } from "lucide-react";
import { ClientOnly } from "./ClientOnly";

const newsItems = [
  {
    id: 1,
    title: "افتتاح مسجد جديد في حي النهضة",
    excerpt: "بفضل الله تم افتتاح مسجد النور الجديد بحي النهضة لخدمة أكثر من 500 مصلي",
    date: "2025-11-01",
    image: null
  },
  {
    id: 2,
    title: "إكمال صيانة 15 مسجداً في المنطقة الشرقية",
    excerpt: "تم الانتهاء من أعمال الصيانة الشاملة لـ 15 مسجداً شملت التكييف والإضاءة",
    date: "2025-10-28",
    image: null
  },
  {
    id: 3,
    title: "إطلاق برنامج تدريب المتطوعين",
    excerpt: "بدأنا برنامج تدريب جديد للمتطوعين في صيانة ونظافة المساجد",
    date: "2025-10-25",
    image: null
  },
  {
    id: 4,
    title: "توقيع شراكة استراتيجية جديدة",
    excerpt: "وقعنا اتفاقية شراكة مع مؤسسة الخير لدعم مشاريع المساجد",
    date: "2025-10-20",
    image: null
  }
];

export function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${currentIndex * 100}%)` }}
        >
          {newsItems.map((item) => (
            <div key={item.id} className="min-w-full px-2">
              <Card className="border-2 border-gray-200 hover:border-brand-green transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-[#08704C]/10 to-[#7B4F28]/10 flex items-center justify-center">
                    <Building2 className="w-24 h-24 text-[#08704C]/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <ClientOnly>
                        <span>{new Date(item.date).toLocaleDateString("ar-SA")}</span>
                      </ClientOnly>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="text-[#08704C] hover:text-[#08704C]/80 hover:bg-[#08704C]/10 p-0"
                    >
                      اقرأ المزيد
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-white hover:bg-[#08704C] text-[#08704C] hover:text-white rounded-full p-3 shadow-lg transition-all z-10 border-2 border-gray-200"
        aria-label="الخبر السابق"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white hover:bg-[#08704C] text-[#08704C] hover:text-white rounded-full p-3 shadow-lg transition-all z-10 border-2 border-gray-200"
        aria-label="الخبر التالي"
      >
        <ArrowRight className="w-5 h-5 rotate-180" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "w-8 bg-[#08704C]" 
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`الانتقال للخبر ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
