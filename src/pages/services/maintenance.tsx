
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

export default function MaintenancePage() {
  const services = [
    "صيانة دورية شاملة",
    "ترميم المباني القديمة",
    "تجديد الأرضيات والإضاءة",
    "صيانة أنظمة التكييف",
    "تطوير أنظمة الصوت",
    "إصلاح الأعطال الطارئة"
  ];

  const maintenanceTypes = [
    {
      title: "الصيانة ",
      description: "فحص وصيانة",
      icon: Clock,
      features: ["فحص المبنى", "صيانة المرافق",  "تقرير مفصل"]
    },
    {
      title: "الصيانة الطارئة",
      description: "استجابة سريعة على مدار الساعة",
      icon: Shield,
      features: ["متوفرة 24/7", "فريق مختص", "معدات حديثة", "حل فوري"]
    }
  ];

  return (
    <>
      <Head>
        <title>الصيانة والترميم | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="خدمات الصيانة الدورية والترميم الشامل للمساجد بأعلى معايير الجودة" />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B4F28]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
        </div>

       

        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  الصيانة والترميم
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نحافظ على جمال وسلامة المساجد من خلال خدمات الصيانة الدورية والترميم الشامل بأيدي خبراء متخصصين
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
                  <h2 className="text-4xl font-black text-gray-900">خدمات الصيانة المتكاملة</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    نوفر خدمات صيانة شاملة تضمن استمرارية المساجد في تقديم خدماتها للمصلين بأفضل صورة. فريقنا المتخصص يعمل على مدار الساعة لضمان سلامة وجمال بيوت الله.
                  </p>
                  <ul className="space-y-4">
                    {services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#7B4F28] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-lg">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="aspect-[4/4] rounded-3xl relative overflow-hidden">
                  {/* background image */}
                  <div className="absolute inset-0">
                    <Image src="/iamge/yaamur_mint.jpg" alt="مشروع بناء - جمعية يعمر" fill className="object-cover object-center" />
                  </div>

                  {/* subtle overlay and pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/20 to-[#00A186]/20 mix-blend-multiply"></div>
                  <div className="absolute inset-0 pattern-diagonal opacity-40"></div>

                  {/* optional centered icon removed to let image show */}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">أنواع خدمات الصيانة</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 ju">
              {maintenanceTypes.map((type, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#7B4F28]/30 h-full bg-white">
                    <CardContent className="p-8 space-y-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#7B4F28] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#7B4F28] transition-colors ">
                          {type.title}
                        </h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                      <ul className="space-y-2">
                        {type.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#7B4F28]"></div>
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

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7B4F28] via-[#08704C] to-[#7B4F28] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ScrollReveal>
                <div>
                  <div className="text-4xl font-black mb-2">512+</div>
                  <p className="text-lg">عملية صيانة</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div>
                  <div className="text-4xl font-black mb-2">24/7</div>
                  <p className="text-lg">دعم متواصل</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div>
                  <div className="text-4xl font-black mb-2">100%</div>
                  <p className="text-lg">ضمان الجودة</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-gray-900 mb-6">هل مسجدك بحاجة للصيانة؟</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
             تواصل معنا الآن
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/966920011240">
                <Button size="lg" className="bg-gradient-to-r from-[#7B4F28] to-[#08704C] hover:from-[#08704C] hover:to-[#7B4F28] text-white shadow-xl text-lg px-10">
                  احجز موعد معينة 
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
                </a>
                
                <a href="https://wa.me/966920011240">
                  <Button size="lg" variant="outline" className="border-2 border-[#7B4F28] text-[#7B4F28] hover:bg-[#7B4F28] hover:text-white text-lg px-10">
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
