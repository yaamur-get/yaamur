import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  DraftingCompass,
  FileSignature,
  Hammer,
  HandHeart,
  LucideIcon,
  MapPin,
  PlugZap,
  Sparkles,
  Star,
  Target,
  Users2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";
import { ConstructionIconKey, constructionSteps } from "@/data/constructionJourney";

const iconMap: Record<ConstructionIconKey, LucideIcon> = {
  target: Target,
  mapPin: MapPin,
  fileSignature: FileSignature,
  draftingCompass: DraftingCompass,
  badgeCheck: BadgeCheck,
  hammer: Hammer,
  users2: Users2,
  plugZap: PlugZap,
  handHeart: HandHeart
};

export default function ConstructionPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // reduce spacing between timeline cards (lower value = closer cards)
  const stepSpacing = 140;
  // add a safety buffer so absolute cards don't overflow the container
  const extraBuffer = 360; // increase if cards still overlap the next section
  const timelineHeight = stepSpacing * constructionSteps.length + extraBuffer;

  const testimonialSlides = useMemo(
    () => [
      {
        id: 1,
        quote: "من أول اتصال حتى تسليم المفاتيح، كنت أعرف ما سيحدث في كل خطوة. ثقة ووضوح طوال الرحلة.",
        author: "عبدالله الحارثي",
        role: "متبرع لمسجد",
        type: "quote" as const
      },
      {
        id: 2,
        quote: "الإشراف دقيق والتصاميم مدروسة. المصلون شعروا بالراحة من أول صلاة بعد الافتتاح.",
        author: "الشيخ أحمد",
        role: "إمام وممثل للمجتمع",
        type: "quote" as const
      },
      {
        id: 3,
        title: "مسجد مكتمل",
        description: "تسليم جاهز للصلاة مع العدادات والطاقم والاعتمادات الرسمية.",
        image: "/iamge/yaamur_bulding.jpg",
        type: "photo" as const
      }
    ],
    []
  );

  const heroStats = [
    { label: "مساجد مكتملة", value: "4+", accent: "bg-[#08704C]" },
    { label: "عدد المستفيدين", value: "1,200+", accent: "bg-[#00A186]" },
    { label: "التسليم في موعده", value: "100%", accent: "bg-[#7B4F28]" }
  ];

  const beforeAfter = {
    before: { label: "قبل", image: "/iamge/yaamur_mint.jpg" },
    after: { label: "بعد", image: "/iamge/yaamur_bulding.jpg" }
  };

  return (
    <>
      <Head>
        <title>رحلة بناء | يعمر </title>
        <meta
          name="description"
          content="رحلة بناء مسجدك مع يعمر في 9 خطوات واضحة. خريطة تفاعلية، مسار عمودي متكامل، ونهاية تحويل قوية للتبرع والمشاركة."
        />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B4F28]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/10 via-white to-[#00A186]/10"></div>
          <div className="container relative z-10 pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="space-y-6 text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full">
                    <Sparkles className="w-4 h-4 text-[#08704C]" />
                    <span className="text-sm font-semibold text-[#08704C]"> رحلة بناء </span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                    رحلة بناء وفق أعلى المعايير وبأقصى درجات الإتقان.
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl ml-auto">
                    حلة البناء بكل تفاصيلها، موثّقة بمعايير عالية وإتقان في التنفيذ.
كل مرحلة تُعرض بشفافية، لتؤكد التزامنا بالجودة، والدقة، والتطبيق الصحيح للمواصفات الهندسية في كل خطوة.
                  </p>
            
                  <div className="grid grid-cols-3 gap-4 max-w-xl ml-auto pt-4">
                    {heroStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col items-end text-right"
                      >
                        <div className={`w-10 h-1.5 rounded-full ${stat.accent} mb-2`}></div>
                        <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="relative aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl bg-white">
                  <Image src="/iamge/yaamur_bulding.jpg" alt="رحلة بناء مسجد" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#08704C]/40 to-transparent mix-blend-multiply"></div>
                 
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Updated: مرحلة البناء – رحلة المسجد (مسار عمودي مموج) */}
        <section id="journey" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-8">
             
                <h2 className="text-4xl font-black text-gray-900 mb-4">رحلة البناء</h2>
                
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              {/* Desktop: use explicit height so the timeline reserves layout space (hidden on small screens) */}
              <div className="hidden md:block">
                <div className="relative max-w-4xl mx-auto z-30" style={{ height: timelineHeight }}>
                  <div className="relative flex flex-col gap-8 pb-10">
                    {[
                      { title: "حصر الاحتياج من المتبرع", desc: "تحديد ما يرغب المتبرع في تقديمه.", icon: FileSignature },
                      { title: "حجز الأرض المراد إقامة المشروع عليها", desc: "المساهمة في اختيار الأرض المناسبة للبناء.", icon: MapPin },
                      { title: "توقيع الاتفاقية مع المتبرع", desc: "توضيح التزامات المتبرع والجهة.", icon: FileSignature },
                      { title: "عمل المخططات والتصاميم اللازمة", desc: "إعداد المخططات الهندسية والتنفيذية.", icon: DraftingCompass },
                      { title: "اختيار المقاول والاستشاري", desc: "اختيار المقاول الأكفأ لتنفيذ المشروع.", icon: Users2 },
                      { title: "تنفيذ المشروع", desc: "البدء في أعمال البناء ومتابعتها.", icon: Hammer },
                      { title: "المساهمة في اختيار الإمام والمؤذن", desc: "المشاركة في البحث عن الكفاءات المناسبة.", icon: HandHeart },
                      { title: "استخراج عدادات الماء والكهرباء واسم المسجد", desc: "متابعة الجهات الحكومية لاستخراج العدادات.", icon: PlugZap },
                      { title: "تسليم المشروع إلى فرع الوزارة", desc: "الانتهاء من أعمال البناء والتسليم.", icon: BadgeCheck }
                    ].map((s, i) => {
                      const Icon = s.icon as any;
                      const top = 30 + i * stepSpacing; // match timeline points
                      const side = i % 2 === 0
                        ? "right-1/2 translate-x-6 md:translate-x-20"
                        : "left-1/2 -translate-x-6 md:-translate-x-20";
                      return (
                        <div key={i} className="relative">
                          <div className={`absolute ${side} z-10`} style={{ top }}>
                              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
                                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center">
                                  <Icon className="w-6 h-6 text-[#08704C]" />
                                </div>
                                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md w-[min(86vw,320px)] sm:w-[340px] md:w-[380px] max-w-[92vw] text-right">
                                  <div className="text-base font-semibold text-gray-900">{s.title}</div>
                                  <div className="text-sm text-gray-600 mt-2">{s.desc}</div>
                                  <div className="mt-3 text-sm text-gray-500">المرحلة {i + 1}</div>
                                </div>
                              </div>
                          </div>

                          <div className="absolute left-1/2 -translate-x-1/2 z-0" style={{ top }}>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-4 border-[#F8F4ED] shadow-sm" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile: stacked timeline (visible on small screens) */}
              <div className="block md:hidden space-y-6">
                {[
                  { title: "حصر الاحتياج من المتبرع", desc: "تحديد ما يرغب المتبرع في تقديمه.", icon: FileSignature },
                  { title: "حجز الأرض المراد إقامة المشروع عليها", desc: "المساهمة في اختيار الأرض المناسبة للبناء.", icon: MapPin },
                  { title: "توقيع الاتفاقية مع المتبرع", desc: "توضيح التزامات المتبرع والجهة.", icon: FileSignature },
                  { title: "عمل المخططات والتصاميم اللازمة", desc: "إعداد المخططات الهندسية والتنفيذية.", icon: DraftingCompass },
                  { title: "اختيار المقاول والاستشاري", desc: "اختيار المقاول الأكفأ لتنفيذ المشروع.", icon: Users2 },
                  { title: "تنفيذ المشروع", desc: "البدء في أعمال البناء ومتابعتها.", icon: Hammer },
                  { title: "المساهمة في اختيار الإمام والمؤذن", desc: "المشاركة في البحث عن الكفاءات المناسبة.", icon: HandHeart },
                  { title: "استخراج عدادات الماء والكهرباء واسم المسجد", desc: "متابعة الجهات الحكومية لاستخراج العدادات.", icon: PlugZap },
                  { title: "تسليم المشروع إلى فرع الوزارة", desc: "الانتهاء من أعمال البناء والتسليم.", icon: BadgeCheck }
                ].map((s, i) => {
                  const Icon = s.icon as any;
                  return (
                    <div key={i} className="flex flex-col items-center text-right px-4">
                      <div className="-mt-2">
                        <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#08704C]" />
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
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#00A186] to-[#08704C] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ScrollReveal>
                <div>
                  <div className="text-4xl font-black mb-2">4+</div>
                  <p className="text-lg">مشاريع بناء</p>
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
              <h2 className="text-4xl font-black text-gray-900 mb-6">هل ترغب في بناء مسجد؟</h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
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
