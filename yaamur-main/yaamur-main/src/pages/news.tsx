import { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ArrowLeft, Newspaper, Award, Users, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientOnly } from "@/components/ClientOnly";
import { sliderNewsItems } from "@/components/NewsSlider";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  category: "projects" | "events" | "achievements" | "general";
  image: string;
  author: string;
  featured: boolean;
  url:string
}

const baseNewsItems: NewsItem[] = [
  /*
  {
    id: 2,
    title: "إطلاق برنامج الصيانة الشاملة لـ 50 مسجداً",
    description: "برنامج متكامل للصيانة الدورية يشمل 50 مسجداً في المنطقة الشرقية بميزانية تتجاوز 5 ملايين ريال",
    content: "أطلقت جمعية يعمر برنامجاً طموحاً للصيانة الشاملة يستهدف 50 مسجداً في مختلف مدن المنطقة الشرقية، يشمل البرنامج الصيانة الدورية والترميم والتطوير.",
    date: "2025-10-28",
    category: "projects",
    image: "/placeholder-mosque-2.jpg",
    author: "إدارة المشاريع",
    featured: true
  },
  {
    id: 3,
    title: "توقيع شراكة استراتيجية مع مؤسسة الخير",
    description: "شراكة استراتيجية جديدة لدعم مشاريع بناء المساجد في المناطق النائية والأحياء الجديدة",
    content: "وقعت جمعية يعمر اتفاقية شراكة استراتيجية مع مؤسسة الخير لدعم مشاريع بناء المساجد، تهدف الشراكة إلى بناء 10 مساجد جديدة خلال العامين القادمين.",
    date: "2025-10-25",
    category: "events",
    image: "/placeholder-mosque-3.jpg",
    author: "قسم العلاقات العامة",
    featured: false
  },
  {
    id: 4,
    title: "إنجاز تاريخي: 150 مسجداً في عامين فقط",
    description: "نفخر بإنجاز بناء وتشغيل 150 مسجداً خلال عامين من العمل المتواصل والدؤوب في خدمة بيوت الله",
    content: "حققت جمعية يعمر إنجازاً تاريخياً بإتمام بناء وتشغيل 150 مسجداً في مختلف مناطق المنطقة الشرقية خلال عامين فقط، وهو إنجاز يعكس التزام الجمعية بخدمة بيوت الله.",
    date: "2025-10-20",
    category: "achievements",
    image: "/placeholder-mosque-4.jpg",
    author: "رئيس مجلس الإدارة",
    featured: true
  },
  {
    id: 5,
    title: "حملة تنظيف وتعقيم شاملة لـ 80 مسجداً",
    description: "تنفيذ حملة تنظيف وتعقيم شاملة استهدفت 80 مسجداً بالتعاون مع متطوعين من المجتمع المحلي",
    content: "نظمت جمعية يعمر حملة واسعة للتنظيف والتعقيم شملت 80 مسجداً، بمشاركة أكثر من 200 متطوع، وذلك في إطار الحرص على توفير بيئة نظيفة وآمنة للمصلين.",
    date: "2025-10-15",
    category: "events",
    image: "/placeholder-mosque-1.jpg",
    author: "قسم التشغيل",
    featured: false
  },
  {
    id: 6,
    title: "تخريج 300 حافظ للقرآن الكريم من حلقات المساجد",
    description: "احتفالية كبرى لتخريج 300 حافظ للقرآن الكريم من حلقات التحفيظ في مساجد الجمعية",
    content: "أقامت جمعية يعمر حفلاً تكريمياً لتخريج 300 حافظ للقرآن الكريم من حلقات التحفيظ المنتشرة في مساجد الجمعية، في إنجاز يعكس اهتمام الجمعية بالجانب التعليمي والدعوي.",
    date: "2025-10-10",
    category: "achievements",
    image: "/placeholder-mosque-2.jpg",
    author: "إدارة البرامج التعليمية",
    featured: false
  },
  {
    id: 7,
    title: "افتتاح مكتبة إسلامية رقمية في 20 مسجداً",
    description: "إطلاق مشروع المكتبة الإسلامية الرقمية في 20 مسجداً لتسهيل الوصول إلى المحتوى الإسلامي المعتمد",
    content: "دشنت جمعية يعمر مشروع المكتبة الإسلامية الرقمية في 20 مسجداً، توفر المكتبة آلاف الكتب والمراجع الإسلامية المعتمدة بشكل رقمي ومجاني للجميع.",
    date: "2025-10-05",
    category: "projects",
    image: "/placeholder-mosque-3.jpg",
    author: "قسم التقنية",
    featured: false
  },
  {
    id: 8,
    title: "جائزة التميز في خدمة المساجد لعام 2025",
    description: "حصول جمعية يعمر على جائزة التميز في خدمة المساجد على مستوى المملكة للعام 2025",
    content: "تسلمت جمعية يعمر جائزة التميز في خدمة المساجد على مستوى المملكة، تقديراً لجهودها المتميزة في بناء وصيانة وتشغيل المساجد بأعلى معايير الجودة.",
    date: "2025-09-28",
    category: "achievements",
    image: "/placeholder-mosque-4.jpg",
    author: "فريق التحرير",
    featured: false
  },
  {
    id: 9,
    title: "إطلاق تطبيق 'مساجدنا' الذكي",
    description: "تطبيق إلكتروني شامل لخدمة المصلين يوفر مواقيت الصلاة والفعاليات والدروس في جميع مساجد الجمعية",
    content: "أطلقت جمعية يعمر تطبيق 'مساجدنا' الذكي الذي يوفر معلومات شاملة عن جميع مساجد الجمعية، بما في ذلك مواقيت الصلاة والفعاليات والدروس العلمية والخدمات المتاحة.",
    date: "2025-09-20",
    category: "general",
    image: "/placeholder-mosque-1.jpg",
    author: "قسم التقنية",
    featured: false
  }
    */
];

const sliderNewsAsNewsPageItems: NewsItem[] = sliderNewsItems.map((item) => ({
  id: 100 + item.id,
  title: item.title,
  description: item.description,
  content: item.description,
  url: item.moreUrl,
  date: item.date,
  category: "general",
  image: item.image,
  author: "جمعية يعمر",
  featured: true
}));

const newsItems: NewsItem[] = [...baseNewsItems, ...sliderNewsAsNewsPageItems];

const categories = [
  { id: "all", label: "جميع الأخبار", icon: Newspaper },
  { id: "projects", label: "المشاريع", icon: Building2 },
  { id: "events", label: "الفعاليات", icon: Users },
  { id: "achievements", label: "الإنجازات", icon: Award }
];

const gregorianEnFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
  calendar: "gregory",
  timeZone: "UTC"
});

const formatDateEn = (isoDate: string) => gregorianEnFormatter.format(new Date(isoDate));

const categoryColors = {
  projects: { bg: "bg-[#08704C]/10", text: "text-[#08704C]", border: "border-[#08704C]/30" },
  events: { bg: "bg-[#00A186]/10", text: "text-[#00A186]", border: "border-[#00A186]/30" },
  achievements: { bg: "bg-[#7B4F28]/10", text: "text-[#7B4F28]", border: "border-[#7B4F28]/30" },
  general: { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300" }
};

const categoryLabels = {
  projects: "مشاريع",
  events: "فعاليات",
  achievements: "إنجازات",
  general: "عام"
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredNews = selectedCategory === "all"
    ? newsItems
    : newsItems.filter(news => news.category === selectedCategory);

  const featuredNews = newsItems.filter(news => news.featured);

  return (
    <>
      <Head>
        <title>أخبار الجمعية | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="تابع آخر أخبار وفعاليات وإنجازات جمعية يعمر في خدمة بيوت الله" />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B4F28]/5 rounded-full blur-3xl"></div>
        </div>

       

        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  تابع أخبارنا
                </span>
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  أخبار الجمعية
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  تابع آخر الأخبار والفعاليات والإنجازات في خدمة بيوت الله بالمنطقة الشرقية
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-4 mb-16">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 md:px-6 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                        isActive
                          ? "bg-gradient-to-r from-[#08704C] to-[#00A186] text-white shadow-xl scale-105"
                          : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="hidden md:inline">{category.label}</span>
                      <span className="md:hidden">{category.label.split(" ")[1] || category.label}</span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {selectedCategory === "all" && featuredNews.length > 0 && (
          <section className="pb-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="container mx-auto relative z-10">
              <ScrollReveal>
                <h2 className="text-3xl font-black text-gray-900 mb-8">الأخبار المميزة</h2>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredNews.map((news, index) => {
                  const colors = categoryColors[news.category];
                  return (
                    <ScrollReveal key={news.id} delay={index * 100}>
                      <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 h-full bg-white hover:shadow-2xl">
                        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#08704C]/10 to-[#7B4F28]/10">
                          <Image
                                                src={news.image}
                                                alt={news.title}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 1024px) 45vw, 90vw"
                                                priority={index === 0}
                                              />
                          
                          <div className="absolute top-4 right-4">
                            <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-bold`}>
                              {categoryLabels[news.category]}
                            </Badge>
                          </div>

                          <div className="absolute top-4 left-4">
                            <Badge className="bg-[#7B4F28] text-white font-bold">
                              مميز
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-[#08704C]" />
                            <ClientOnly>
                              <span dir="ltr">
                                {formatDateEn(news.date)}
                              </span>
                            </ClientOnly>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#08704C] transition-colors line-clamp-2">
                            {news.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {news.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-sm text-gray-500">{news.author}</span>
                            <a href={news.url}>
                            <Button
                              variant="ghost"
                              className="text-[#08704C] hover:text-white hover:bg-[#08704C] p-0 h-auto font-bold group/btn"
                            >
                              <span className="group-hover/btn:mr-2 transition-all">اقرأ المزيد</span>
                              <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
                            </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="pb-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl font-black text-gray-900 mb-8">
                {selectedCategory === "all" ? "جميع الأخبار" : `أخبار ${categories.find(c => c.id === selectedCategory)?.label}`}
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, index) => {
                const colors = categoryColors[news.category];
                return (
                  <ScrollReveal key={news.id} delay={index * 50}>
                    <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 h-full bg-white hover:shadow-2xl">
                      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#08704C]/10 to-[#7B4F28]/10">
                        <div className="absolute inset-0 pattern-diagonal opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Newspaper className="w-20 h-20 text-[#08704C]/20 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        
                        <div className="absolute top-4 right-4">
                          <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-bold`}>
                            {categoryLabels[news.category]}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-[#08704C]" />
                          <ClientOnly>
                            <span dir="ltr">
                              {formatDateEn(news.date)}
                            </span>
                          </ClientOnly>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#08704C] transition-colors line-clamp-2">
                          {news.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                          {news.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">{news.author}</span>
                          <a href={news.url} >
                          <Button
                            variant="ghost"
                            className="text-[#08704C] hover:text-white hover:bg-[#08704C] p-0 h-auto font-bold group/btn"
                          >
                            <span className="group-hover/btn:mr-2 transition-all">اقرأ المزيد</span>
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
                          </Button>
                          </a>
                          
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Newspaper className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد أخبار</h3>
                <p className="text-gray-600">لم نجد أخباراً في هذا التصنيف حالياً</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#00A186] to-[#08704C] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">تابعنا على وسائل التواصل</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                لا تفوت آخر الأخبار والفعاليات - تابعنا على حساباتنا الرسمية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://x.com/Yaamurorg">
                <Button size="lg" className="bg-white text-[#08704C] hover:bg-gray-100 shadow-xl text-lg px-10">
                  تويتر
                  <TrendingUp className="w-5 h-5 mr-2" />
                </Button>
                </a>
                <a href="https://wa.me/966920011240">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
                  واتساب
                </Button>
                </a>
                <a href="https://www.instagram.com/yaamurorg/?hl=ar">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
                 إنستجرام
                </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppButton />

        <SiteFooter />
      </div>
    </>
  );
}
