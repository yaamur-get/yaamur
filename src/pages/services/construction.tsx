
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ArrowLeft, Check, TrendingUp, Users, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";

export default function ConstructionPage() {
  const features = [
    "تصميم معماري إسلامي أصيل",
    "استخدام أفضل مواد البناء",
    "إشراف هندسي متخصص",
    "التزام بالمواصفات والمعايير",
    "تسليم في الوقت المحدد",
    "ضمان شامل على الأعمال"
  ];

  const projects = [
    { name: "مسجد الرحمة", location: "الدمام", capacity: "300 مصلي", status: "مكتمل" },
    { name: "مسجد السلام", location: "الجبيل", capacity: "500 مصلي", status: "قيد التنفيذ" },
    { name: "مسجد النور", location: "الخبر", capacity: "400 مصلي", status: "مكتمل" }
  ];

  return (
    <>
      <Head>
        <title>بناء المساجد | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="خدمات بناء المساجد بأعلى معايير الجودة والتصميم الإسلامي الأصيل" />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B4F28]/5 rounded-full blur-3xl"></div>
        </div>

        <header className="fixed top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100">
          <div className="container mx-auto">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="relative h-16 w-auto">
                  <Image
                    src="/logoyaamurtop.png"
                    alt="جمعية يعمر لعناية المساجد"
                    width={200}
                    height={64}
                    className="h-16 w-auto object-contain"
                    priority
                  />
                </div>
              </Link>

              <Link href="/">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  العودة للرئيسية
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  بناء المساجد
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نبني بيوت الله بأعلى معايير الجودة والإتقان، مع الالتزام بالتصميم الإسلامي الأصيل والمواصفات الهندسية الحديثة
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-gray-900">خدماتنا في البناء</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    نقدم خدمات متكاملة لبناء المساجد من التخطيط والتصميم حتى التسليم النهائي. فريقنا من المهندسين والمشرفين المتخصصين يضمن تنفيذ المشاريع وفق أعلى المعايير.
                  </p>
                  <ul className="space-y-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#08704C] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#08704C]/20 to-[#00A186]/20 rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 pattern-diagonal"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-40 h-40 text-[#08704C]/30" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <h2 className="text-3xl font-black text-gray-900 mb-8">مشاريعنا المكتملة والجارية</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <Card className="hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#08704C]/30 bg-white">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-2xl flex items-center justify-center mb-4">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>📍 الموقع: {project.location}</p>
                        <p>👥 السعة: {project.capacity}</p>
                        <p className={`font-bold ${project.status === "مكتمل" ? "text-green-600" : "text-blue-600"}`}>
                          ⚡ الحالة: {project.status}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#00A186] to-[#08704C] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ScrollReveal>
                <div>
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2">150+</div>
                  <p className="text-lg">مسجد تم بناؤه</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div>
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2">50K+</div>
                  <p className="text-lg">مصلي مستفيد</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div>
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2">100%</div>
                  <p className="text-lg">رضا العملاء</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-gray-900 mb-6">ساهم في بناء مسجد</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                شارك في الأجر والثواب ببناء بيت من بيوت الله
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-xl text-lg px-10">
                  تبرع الآن
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10">
                    استفسر عن المشاريع
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppButton />

        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
          <div className="container mx-auto text-center">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-2xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-lg">جمعية يعمر</h3>
                <p className="text-sm text-gray-400">لعناية المساجد</p>
              </div>
            </Link>
            <p className="text-gray-400 mt-4">
              جميع الحقوق محفوظة © {new Date().getFullYear()} جمعية يعمر لعناية المساجد
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
