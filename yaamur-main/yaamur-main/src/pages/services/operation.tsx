
import Head from "next/head";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check, ArrowLeft, FileSignature, Clock, DraftingCompass, Users2, MapPin, Hammer, HandHeart, BadgeCheck, PlugZap, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

export default function OperationPage() {
  const services = [
    "إدارة وتشغيل المساجد بالكامل",
   
  ];

  return (
    <>
      <Head>
        <title>التشغيل جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="خدمات التشغيل والإدارة الشاملة للمساجد مع برامج تعليمية ودعوية متميزة" />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A186]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
        </div>


        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#00A186]/10"></div>
          <div className="container relative z-10 pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="space-y-6 text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full">
                    <Sparkles className="w-4 h-4 text-[#08704C]" />
                    <span className="text-sm font-semibold text-[#08704C]">اطلب خدمة التشغيل</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                    التشغيل وإدارة المساجد بكفاءة ومهنية
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl ml-auto">
                    نقدم خدمات تشغيل متكاملة: إدارة، برامج، متابعة ومراقبة لضمان استمرارية العمل والجودة.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <a href="https://wa.me/966920011240">
                      <button
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#08704C] to-[#00A186] text-white shadow-xl text-lg"
                      >
                        احجز موعد
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </button>
                    </a>
                    <a href="#operation-journey">
                      <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white">
                        عرض المسار
                      </button>
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-4 max-w-xl ml-auto pt-4">
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col items-end text-right">
                      <div className={`w-10 h-1.5 rounded-full bg-[#7B4F28] mb-2`}></div>
                      <div className="text-2xl font-extrabold text-gray-900">512+</div>
                      <div className="text-sm text-gray-600">عمليات تشغيل</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col items-end text-right">
                      <div className={`w-10 h-1.5 rounded-full bg-[#00A186] mb-2`}></div>
                      <div className="text-2xl font-extrabold text-gray-900">24/7</div>
                      <div className="text-sm text-gray-600">دعم متواصل</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col items-end text-right">
                      <div className={`w-10 h-1.5 rounded-full bg-[#7B4F28] mb-2`}></div>
                      <div className="text-2xl font-extrabold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">ضمان الجودة</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="relative aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl bg-white">
                  <Image src="/iamge/yaamur_runing.jpg" alt="خدمات التشغيل" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#08704C]/40 to-transparent mix-blend-multiply"></div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg text-right">
                    <p className="text-sm text-gray-600 mb-1">متابعة ميدانية</p>
                    <p className="text-lg font-bold text-gray-900">من التنظيم حتى التنفيذ</p>
                    <div className="flex items-center gap-2 text-[#08704C] text-sm mt-2">
                      <Star className="w-4 h-4 fill-[#08704C] text-[#08704C]" />
                      <span>جودة ومهنية في التنفيذ</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

   

    

        <section id="operation-journey" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-8">
                <p className="text-[#7B4F28] font-semibold mb-3">خطة التشغيل – خطوات العمل</p>
                <h2 className="text-4xl font-black text-gray-900 mb-4">مسار التشغيل خطوة بخطوة</h2>
                <p className="text-lg text-gray-700">
                  توضح هذه الخريطة خطوات استلام وتشغيل المسجد من البداية حتى الإغلاق وتوثيق العملية.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              {(() => {
                const stepSpacing = 120;
                const extraBuffer = 520; // increased buffer to prevent overlap with footer
                const steps = [
                  { title: "طلب الصيانة (مجدولة)", desc: "تقديم طلب وتحديد الموعد.", icon: FileSignature },
                  { title: "استلام الطلب", desc: "استلام ومراجعة الطلب أولياً.", icon: Check },
                  { title: "الفحص والمعاينة.", desc: "فحص الموقع وتحديد نطاق العمل.", icon: Clock },
                  { title: "إعداد التقرير الفني", desc: "مخرجات فنية وجدول أعمال.", icon: DraftingCompass },
                  { title: "إرسال التقرير", desc: "إرسال التقرير للجهات المعنية.", icon: FileSignature },
                  { title: "الحصول على الموافقة", desc: "استصدار الموافقات الرسمية.", icon: Users2 },
                  { title: "عمل خطة زمنية وفنية", desc: "تحديد الجدول الزمني وخطة التنفيذ.", icon: MapPin },
                  { title: "التنسيق مع الموردين", desc: "الاتفاق مع الموردين وترتيب المواد.", icon: Users2 },
                  { title: "التنفيذ والمتابعة الدورية", desc: "بدء الأعمال ومتابعة الجودة.", icon: Hammer },
                  { title: "عمل التقرير الفني والمالي", desc: "توثيق الأعمال والتكاليف.", icon: BadgeCheck },
                  { title: "إغلاق الطلب ورتمه بالنظام", desc: "إنهاء الطلب وتسجيله في النظام.", icon: Check }
                ];

                const timelineHeight = steps.length * stepSpacing + extraBuffer;

                return (
                  <div>
                    <div className="hidden md:block">
                      <div className="relative max-w-4xl mx-auto z-30" style={{ height: timelineHeight }}>
                        <div className="relative flex flex-col gap-8 pb-10">
                          {steps.map((s, i) => {
                            const Icon = s.icon as any;
                            const top = 30 + i * stepSpacing;
                            const side = i % 2 === 0 ? "right-1/2 translate-x-6 md:translate-x-20" : "left-1/2 -translate-x-6 md:-translate-x-20";
                            return (
                              <div key={i} className="relative">
                                <div className={`absolute ${side} z-10`} style={{ top }}>
                                  <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center mb-2">
                                      <Icon className="w-6 h-6 text-[#7B4F28]" />
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-md w-[380px] text-right">
                                      <div className="text-base font-semibold text-gray-900">{s.title}</div>
                                      <div className="text-sm text-gray-600 mt-2">{s.desc}</div>
                                      <div className="mt-3 text-sm text-gray-500">المرحلة {i + 1}</div>
                                    </div>
                                  </div>
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 z-0" style={{ top }}>
                                  <div className="w-8 h-8 rounded-full bg-white border-4 border-[#F8F4ED] shadow-sm" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Mobile stacked timeline */}
                    <div className="block md:hidden space-y-6">
                      {steps.map((s, i) => {
                        const Icon = s.icon as any;
                        return (
                          <div key={i} className="flex flex-col items-center text-right px-4">
                            <div className="-mt-2">
                              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-[#7B4F28]" />
                              </div>
                            </div>
                            <div className="bg-white rounded-2xl p-4 shadow-md w-full max-w-[92vw] mt-3">
                              <div className="text-base font-semibold text-gray-900">{s.title}</div>
                              <div className="text-sm text-gray-600 mt-2">{s.desc}</div>
                              <div className="mt-3 text-sm text-gray-500">المرحلة {i + 1}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </ScrollReveal>
          </div>
        </section>
              <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7B4F28] via-[#08704C] to-[#7B4F28] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ScrollReveal>
                <div>
                  <div className="text-4xl font-black mb-2">512+</div>
                  <p className="text-lg">عمليات تشغيل</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div>
                  <div className="text-4xl font-black mb-2">24/7</div>
                  <p className="text-lg">متابعة ميدانية</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div>
                  <div className="text-4xl font-black mb-2">100%</div>
                  <p className="text-lg">التسليم في الموعد</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>


        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-gray-900 mb-6">هل ترغب في تشغيل مسجدك معنا؟</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                نقدم خدمة تشغيل متكاملة من التخطيط حتى التسليم مع متابعة ميدانية ودعم فني.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services/operation/final">
                  <Button size="lg" className="bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-xl text-lg px-10">
                    ابدأ مشروعك
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </Link>

                <a href="https://wa.me/966920011240">
                  <Button size="lg" variant="outline" className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10">
                    تواصل عبر واتساب
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
