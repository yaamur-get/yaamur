import { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Wrench, Sparkles, Calendar, MapPin, Users, Filter, ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  category: "construction" | "maintenance" | "operation";
  image: string;
  beneficiaries: number;
  status: "completed" | "ongoing";
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "مسجد عائشة بنت الصديق",
    description: "صيانة نظام التبريد",
    location: "ام الساهك – الحزم",
    date: "2024-06-06",
    category: "maintenance",
    image: "/iamge/moasq/ashah.png",
    beneficiaries: 300,
    status: "completed",
    details: [
      "الطاقة الاستيعابية: 300 مصلي",
      "تجهيزات حديثة ومكيفات بأحدث التقنيات"
    ]
  },
  {
    id: 2,
    title: "مسجد ماجد الحارثي",
    description: "ترميم المسجد بسبب الحريق",
    location: "الدمام-النورس",
    date: "2024-05-20",
    category: "maintenance",
    image: "/iamge/moasq/majd.jpg",
    beneficiaries: 250,
    status: "completed",
    details: [
      "ترميم كامل",
      "تجديد الأرضيات والإضاءة",
      "صيانة أنظمة التكييف والصوت",
      "إعادة دهان كامل المبنى"
    ]
  },
  {
    id: 3,
    title: "جامع رفيع الجابري",
    description: "عطل في احد وحدات التكييف المركزي",
    location: "الدمام-طيبة",
    date: "2024-07-10",
    category: "maintenance",
    image: "/iamge/moasq/rfay.jpeg",
    beneficiaries: 400,
    status: "ongoing",
    details: [
      "توريد قطع التكييف",
      "فحص واحدات التكييف",
    ]
  },
  /*
  {
    id: 4,
    title: "مسجد السلام",
    description: "بناء مسجد نموذجي بتصميم عصري مع مرافق متكاملة",
    location: "الجبيل، المنطقة الشرقية",
    date: "2024-09-05",
    category: "construction",
    image: "",
    beneficiaries: 500,
    status: "ongoing",
    details: [
      "تصميم معماري إسلامي حديث",
      "مرافق متكاملة للرجال والنساء",
      "قاعة متعددة الأغراض",
      "موقف سيارات واسع"
    ]
  },
  {
    id: 5,
    title: "مسجد التقوى",
    description: "صيانة شاملة وتطوير البنية التحتية للمسجد",
    location: "رأس تنورة، المنطقة الشرقية",
    date: "2024-10-15",
    category: "maintenance",
    image: "/placeholder-mosque-1.jpg",
    beneficiaries: 200,
    status: "completed",
    details: [
      "تطوير أنظمة الصوت والإضاءة",
      "تركيب ألواح طاقة شمسية",
      "توسعة المواضئ",
      "تحديث نظام التكييف"
    ]
  },
  {
    id: 6,
    title: "مسجد الهدى",
    description: "إدارة وتشغيل مسجد كبير مع خدمات تعليمية ودعوية",
    location: "الأحساء، المنطقة الشرقية",
    date: "2024-11-01",
    category: "operation",
    image: "/placeholder-mosque-2.jpg",
    beneficiaries: 600,
    status: "ongoing",
    details: [
      "برامج تحفيظ القرآن الكريم",
      "دروس علمية أسبوعية",
      "مكتبة إسلامية شاملة",
      "خدمات إرشادية ودعوية"
    ]
      
       }
    */
];

const categories = [
  { id: "all", label: "جميع المشاريع", icon: Filter },
  { id: "construction", label: "بناء المساجد", icon: Building2 },
  { id: "maintenance", label: "الصيانة والترميم", icon: Wrench },
  { id: "operation", label: "التشغيل والإدارة", icon: Sparkles }
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
  construction: { bg: "bg-[#08704C]/10", text: "text-[#08704C]", border: "border-[#08704C]/30" },
  maintenance: { bg: "bg-[#7B4F28]/10", text: "text-[#7B4F28]", border: "border-[#7B4F28]/30" },
  operation: { bg: "bg-[#00A186]/10", text: "text-[#00A186]", border: "border-[#00A186]/30" }
};

const categoryLabels = {
  construction: "بناء",
  maintenance: "صيانة",
  operation: "تشغيل"
};

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>برامجنا ومشاريعنا | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="تعرف على مشاريع جمعية يعمر في بناء وصيانة وتشغيل المساجد بالمنطقة الشرقية" />
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
                  مشاريعنا وإنجازاتنا
                </span>
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  برامجنا ومشاريعنا
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نفخر بما أنجزناه من مشاريع متميزة في خدمة بيوت الله بالمنطقة الشرقية. تعرف على مشاريعنا في البناء والصيانة والتشغيل
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
                      <span className="md:hidden">{category.label.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const colors = categoryColors[project.category];
                return (
                  <ScrollReveal key={project.id} delay={index * 100}>
                    <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 h-full bg-white hover:shadow-2xl">
                      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[]/10 to-[#7B4F28]/10">
                         {/* background image */}
                                          <div className="absolute inset-0">
                                            <Image src={project.image} alt="مشروع بناء - جمعية يعمر" fill className="object-cover object-center" />
                                          </div>
                        
                                          {/* subtle overlay and pattern */}
                                          <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/20 to-[#00A186]/20 mix-blend-multiply"></div>
                                          <div className="absolute inset-0 pattern-diagonal opacity-40"></div>
                        
                                          {/* optional centered icon removed to let image show */}
                        
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-bold`}>
                            {categoryLabels[project.category]}
                          </Badge>
                          {project.status === "ongoing" && (
                            <Badge className="bg-blue-100 text-blue-700 border border-blue-300 font-bold">
                              قيد التنفيذ
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#08704C] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-[#08704C]" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-[#08704C]" />
                            <span dir="ltr">{formatDateEn(project.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4 text-[#08704C]" />
                            <span>{project.beneficiaries}+ مستفيد</span>
                          </div>
                        </div>

                        <div className="pt-4">
                          <p className="text-sm font-semibold text-gray-900 mb-2">تفاصيل المشروع:</p>
                          <ul className="space-y-1.5">
                            {project.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#08704C] mt-1.5 flex-shrink-0"></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          variant="ghost"
                          className="w-full text-[#08704C] hover:text-white hover:bg-[#08704C] font-bold group/btn transition-all duration-300 mt-4"
                        >
                          <span className="group-hover/btn:mr-2 transition-all">التفاصيل الكاملة</span>
                          <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Filter className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد مشاريع</h3>
                <p className="text-gray-600">لم نجد مشاريع في هذا التصنيف حالياً</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#00A186] to-[#08704C] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">ساهم في عمارة بيوت الله</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                كن شريكاً في الأجر والثواب بدعم مشاريعنا في بناء وصيانة وتشغيل المساجد
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://store.yaamur.org.sa/">
                <Button size="lg" className="bg-white text-[#08704C] hover:bg-gray-100 shadow-xl text-lg px-10">
                  تبرع الآن
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
                </a>
                
                 <a href="https://wa.me/966920011240">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
                    تواصل معنا
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
