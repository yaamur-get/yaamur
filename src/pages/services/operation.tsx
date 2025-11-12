
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowLeft, Check, Users, BookOpen, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";

export default function OperationPage() {
  const services = [
    "إدارة وتشغيل المساجد بالكامل",
    "تأمين الأئمة والمؤذنين",
    "النظافة اليومية الشاملة",
    "إدارة الحلقات القرآنية",
    "تنظيم الدروس والفعاليات",
    "خدمات المكتبة الإسلامية"
  ];

  const operationAspects = [
    {
      title: "الإدارة اليومية",
      description: "تشغيل المسجد وإدارته بشكل احترافي",
      icon: Users,
      features: ["تأمين الأئمة", "المؤذنون", "عمال النظافة", "الإشراف اليومي"]
    },
    {
      title: "البرامج التعليمية",
      description: "برامج تحفيظ وتعليم القرآن والعلوم الشرعية",
      icon: BookOpen,
      features: ["حلقات التحفيظ", "دروس العلم", "محاضرات", "دورات متخصصة"]
    },
    {
      title: "خدمات المجتمع",
      description: "خدمات اجتماعية ودعوية للمصلين",
      icon: Heart,
      features: ["الإرشاد الديني", "الاستشارات", "الفعاليات", "العلاقات المجتمعية"]
    }
  ];

  return (
    <>
      <Head>
        <title>التشغيل والإدارة | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="خدمات التشغيل والإدارة الشاملة للمساجد مع برامج تعليمية ودعوية متميزة" />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A186]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
        </div>

        <header className="fixed top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100">
          <div className="container mx-auto">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="relative h-16 w-auto">
                  <Image
                    src="/شعار_يعمر_-_مطو_ر_-_نموذج_2.png"
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
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#00A186] to-[#08704C] rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  التشغيل والإدارة
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نتولى التشغيل الكامل للمساجد وإدارتها بشكل احترافي، مع توفير برامج تعليمية ودعوية متميزة تخدم المصلين والمجتمع
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
                  <h2 className="text-4xl font-black text-gray-900">خدمات التشغيل المتكاملة</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    نقدم خدمات تشغيل شاملة تضمن عمل المسجد بكفاءة عالية وتوفير بيئة مثالية للعبادة والتعلم. فريقنا المؤهل يعمل على مدار الساعة لخدمة المصلين.
                  </p>
                  <ul className="space-y-4">
                    {services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#00A186] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-lg">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#00A186]/20 to-[#08704C]/20 rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 pattern-diagonal"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-40 h-40 text-[#00A186]/30" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">جوانب خدمات التشغيل</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {operationAspects.map((aspect, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#00A186]/30 h-full bg-white">
                    <CardContent className="p-8 space-y-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00A186] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                        <aspect.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#00A186] transition-colors">
                          {aspect.title}
                        </h3>
                        <p className="text-gray-600">{aspect.description}</p>
                      </div>
                      <ul className="space-y-2">
                        {aspect.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00A186]"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00A186] via-[#08704C] to-[#00A186] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <ScrollReveal>
                <div>
                  <div className="text-4xl font-black mb-2">300+</div>
                  <p className="text-lg">مسجد نديره</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div>
                  <div className="text-4xl font-black mb-2">150+</div>
                  <p className="text-lg">إمام ومؤذن</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div>
                  <div className="text-4xl font-black mb-2">50+</div>
                  <p className="text-lg">حلقة قرآنية</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div>
                  <div className="text-4xl font-black mb-2">1000+</div>
                  <p className="text-lg">طالب وطالبة</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-6">برامجنا التعليمية والدعوية</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  نوفر مجموعة متنوعة من البرامج التعليمية والدعوية التي تخدم جميع فئات المجتمع
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "حلقات التحفيظ", desc: "برامج متخصصة لحفظ القرآن الكريم", icon: "📖" },
                { title: "الدروس العلمية", desc: "دروس في الفقه والعقيدة والحديث", icon: "📚" },
                { title: "المحاضرات", desc: "محاضرات دينية وتوعوية منتظمة", icon: "🎤" },
                { title: "دورات متخصصة", desc: "دورات في العلوم الشرعية المختلفة", icon: "🎓" }
              ].map((program, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#00A186]/30 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{program.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-gray-600 text-sm">{program.desc}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-[#00A186] to-[#08704C] hover:from-[#08704C] hover:to-[#00A186] text-white shadow-xl text-lg px-10">
                    انضم لبرامجنا
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="border-2 border-[#00A186] text-[#00A186] hover:bg-[#00A186] hover:text-white text-lg px-10">
                      استفسر عن البرامج
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppButton />

        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
          <div className="container mx-auto text-center">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00A186] to-[#08704C] rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
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
