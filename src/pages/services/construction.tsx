import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  DraftingCompass,
  FileSignature,
  Hammer,
  HandHeart,
  LucideIcon,
  MapPin,
  PlugZap,
  Quote,
  Sparkles,
  Star,
  Target,
  Users2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SiteFooter from "@/components/SiteFooter";
import { ConstructionIconKey, constructionSteps, totalSteps } from "@/data/constructionJourney";

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

const stepImages: Record<string, string> = {
  "identifying-donor-needs": "/iamge/yaamurabout.jpg",
  "selecting-the-land": "/iamge/yaamur_mint.jpg",
  "signing-the-agreement": "/iamge/home.png",
  "preparing-plans-and-designs": "/iamge/yaamur_runing.jpg",
  "selecting-the-consultant-contractor": "/iamge/yaamur_bulding.jpg",
  "project-execution": "/iamge/yaamur_bulding.jpg",
  "selecting-imam-and-muezzin": "/iamge/yaamurabout.jpg",
  "issuing-utility-meters-and-name": "/iamge/yaamur_mint.jpg",
  "handover-to-ministry": "/iamge/yaamur_bulding.jpg"
};

export default function ConstructionPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const stepSpacing = 240;
  const timelineHeight = stepSpacing * constructionSteps.length + 120;

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
    { label: "مساجد مكتملة", value: "5+", accent: "bg-[#08704C]" },
    { label: "عدد المستفيدين", value: "1,200+", accent: "bg-[#00A186]" },
    { label: "التسليم في موعده", value: "100%", accent: "bg-[#7B4F28]" }
  ];

  const beforeAfter = {
    before: { label: "قبل", image: "/iamge/yaamur_mint.jpg" },
    after: { label: "بعد", image: "/iamge/yaamur_bulding.jpg" }
  };

  const wavePath = useMemo(() => {
    const startY = 30;
    let y = startY;
    const cmds = [`M 160 ${startY}`];
    for (let i = 1; i < constructionSteps.length; i++) {
      const nextY = y + stepSpacing;
      const up = i % 2 === 0;
      const c1x = up ? 60 : 260;
      const c2x = up ? 260 : 60;
      const c1y = y + stepSpacing / 3;
      const c2y = y + (2 * stepSpacing) / 3;
      cmds.push(`C ${c1x} ${c1y}, ${c2x} ${c2y}, 160 ${nextY}`);
      y = nextY;
    }
    return cmds.join(" ");
  }, [stepSpacing]);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonialSlides.length);
  const prevTestimonial = () =>
    setActiveTestimonial((prev) => (prev - 1 + testimonialSlides.length) % testimonialSlides.length);

  return (
    <>
      <Head>
        <title>رحلة البناء | يعمر لبناء المساجد</title>
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
                    <span className="text-sm font-semibold text-[#08704C]">ابدأ رحلة البناء من 9 خطوات</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                    رحلة بناء مسجدك بثقة ووضوح مع يعمر
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl ml-auto">
                    كل خطوة موضحة ومتابعة ميدانياً. استعرض الخريطة التفاعلية، ثم انتقل للمسار العمودي حيث تظهر المراحل التسع
                    كاملة أثناء التمرير للأسفل.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <Link href="#step-stream">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-xl"
                      >
                        ابدأ الرحلة
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                    <Link href="#journey">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white"
                      >
                        عرض الخريطة
                      </Button>
                    </Link>
                  </div>
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
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg text-right">
                    <p className="text-sm text-gray-600 mb-1">إشراف موثوق</p>
                    <p className="text-lg font-bold text-gray-900">من الفكرة حتى التسليم</p>
                    <div className="flex items-center gap-2 text-[#08704C] text-sm mt-2">
                      <Star className="w-4 h-4 fill-[#08704C] text-[#08704C]" />
                      <span>تحريك خفيف وإحساس بالتقدم</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Timeline - curved vertical */}
        <section id="journey" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-14">
                <p className="text-[#08704C] font-semibold mb-3">خريطة رحلة تفاعلية</p>
                <h2 className="text-4xl font-black text-gray-900 mb-4">مسار مموج رأسي للمراحل التسع</h2>
                <p className="text-lg text-gray-700">
                  خط مموج رأسي بنقاط مرقمة من 1 إلى 9 مع فراغات واسعة. كل نقطة تعرض الأيقونة، الرقم، العنوان، الوصف المختصر
                  وصورة صغيرة بجانب الخط.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative max-w-5xl mx-auto" style={{ minHeight: timelineHeight }}>
               
               
                <svg
                  className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
                  width="320"
                  height={timelineHeight}
                  viewBox={`0 0 320 ${timelineHeight}`}
                  preserveAspectRatio="xMidYMin"
                >
                  <defs>
                    <linearGradient id="timeline-vertical-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#08704C" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#00A186" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#7B4F28" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>
                  <path
                    d={wavePath}
                    stroke="url(#timeline-vertical-gradient)"
                    strokeWidth="60"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative flex flex-col gap-12 pb-10">
                  {constructionSteps.map((step, idx) => {
                    const Icon = iconMap[step.icon];
                    const imageSrc = stepImages[step.slug] || "/iamge/yaamur_bulding.jpg";
                    const lateralOffsets = [0, 50, -40, 60, -50, 70, -60, 40, 0];
                    const offsetX = lateralOffsets[idx] ?? 0;
                    return (
                      <div
                        key={step.slug}
                        className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
                        style={{ transform: `translateX(${offsetX}px)` }}
                      >
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center gap-2 z-10">
                          <div className="w-12 h-12 rounded-full bg-white shadow-lg border border-[#08704C]/30 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-[#08704C]" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white shadow ring-2 ring-[#08704C]/20 flex items-center justify-center text-sm font-bold text-[#08704C]">
                            {step.id}
                          </div>
                        </div>

                        <div className="flex-1 bg-white shadow-lg border border-gray-100 rounded-2xl p-5 text-right md:mr-20">
                          <div className="flex items-center gap-3 justify-between flex-wrap">
                            <p className="text-sm font-semibold text-gray-600">الخطوة {step.id} من {totalSteps}</p>
                            <span className="text-xs text-[#08704C] font-semibold">المحتوى في نفس القسم</span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mt-2">{step.title}</h4>
                          <p className="text-gray-700 mt-2">{step.summary}</p>
                          <div className="mt-4 flex items-center gap-3">
                            <Progress value={(step.id / totalSteps) * 100} className="w-1/2 h-2 bg-gray-100" />
                            <span className="text-sm text-gray-700">تقدم المسار</span>
                          </div>
                        </div>

                        <div className="w-full md:w-[320px] rounded-2xl overflow-hidden shadow-2xl bg-white md:ml-20">
                          <Image src={imageSrc} alt={step.title} width={900} height={600} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Step stream in one page */}
        <section id="step-stream" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F4ED]">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-[#08704C] font-semibold mb-2">المسار الكامل في صفحة واحدة</p>
                <h3 className="text-3xl font-black text-gray-900">انتقل بسلاسة عبر الخطوات التسع</h3>
                <p className="text-lg text-gray-700 mt-3">
                  أثناء التمرير للأسفل ستظهر كل مرحلة بمحتواها الكامل: أيقونة، عنوان، وصف، شريط تقدم، وصورة تعبر عن المرحلة.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-12">
              {constructionSteps.map((step) => {
                const Icon = iconMap[step.icon];
                const imageSrc = stepImages[step.slug] || "/iamge/yaamur_bulding.jpg";
                return (
                  <ScrollReveal key={step.slug}>
                    <div
                      id={`step-${step.slug}`}
                      className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 lg:p-8 shadow-lg"
                    >
                      <div className="order-2 lg:order-1 space-y-4 text-right">
                        <div className="flex items-center gap-3 justify-end">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#08704C] to-[#00A186] flex items-center justify-center text-white shadow-md">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="text-sm font-semibold text-gray-600">
                            الخطوة {step.id} من {totalSteps}
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900">{step.title}</h4>
                        <p className="text-gray-800 leading-relaxed">{step.description}</p>
                        <div className="flex items-center gap-3">
                          <Progress value={(step.id / totalSteps) * 100} className="w-1/2 h-2 bg-gray-100" />
                          <span className="text-sm text-gray-700">تقدم المسار</span>
                        </div>
                      </div>
                      <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
                        <Image src={imageSrc} alt={step.title} width={900} height={700} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-[#08704C] font-semibold mb-2">تخيل تطور المشروع</p>
                <h3 className="text-3xl font-black text-gray-900">قبل وبعد</h3>
                <p className="text-gray-700 max-w-2xl mx-auto mt-3">
                  تحريك لطيف يوضح كيف يتحول الموقع من مخطط إلى مسجد جاهز للصلاة.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {[beforeAfter.before, beforeAfter.after].map((item) => (
                <ScrollReveal key={item.label}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image src={item.image} alt={item.label} width={900} height={700} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                      {item.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F4ED]">
          <div className="container">
            <ScrollReveal>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 text-right">
                <div>
                  <p className="text-[#08704C] font-semibold mb-2">آراء وتجارب</p>
                  <h3 className="text-3xl font-black text-gray-900">أصوات المتبرعين والأئمة والمشاريع المنجزة</h3>
                  <p className="text-gray-700 max-w-2xl mt-3">
                    سلايدر هادئ يعرض شهادات واقعية وصوراً لمساجد مكتملة بإحساس حركي لطيف.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" onClick={prevTestimonial}>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" onClick={nextTestimonial}>
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="overflow-hidden shadow-xl border-2 border-gray-100">
                <CardContent className="p-8 grid lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2 space-y-4 text-right">
                    {testimonialSlides[activeTestimonial].type === "quote" && (
                      <>
                        <Quote className="w-10 h-10 text-[#08704C]" />
                        <p className="text-2xl font-semibold text-gray-900 leading-relaxed">
                          "{testimonialSlides[activeTestimonial].quote}"
                        </p>
                        <div className="text-gray-700">
                          <div className="font-bold text-lg">{testimonialSlides[activeTestimonial].author}</div>
                          <div className="text-sm text-[#08704C]">{testimonialSlides[activeTestimonial].role}</div>
                        </div>
                      </>
                    )}
                    {testimonialSlides[activeTestimonial].type === "photo" && (
                      <>
                        <p className="text-3xl font-black text-gray-900">{testimonialSlides[activeTestimonial].title}</p>
                        <p className="text-gray-700 text-lg">{testimonialSlides[activeTestimonial].description}</p>
                        <div className="flex items-center gap-2 text-[#08704C] font-semibold">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>طاقم جاهز واعتمادات مكتملة</span>
                        </div>
                      </>
                    )}
                    <div className="flex items-center gap-2 pt-4">
                      {testimonialSlides.map((slide, idx) => (
                        <button
                          key={slide.id}
                          onClick={() => setActiveTestimonial(idx)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeTestimonial ? "w-10 bg-[#08704C]" : "w-3 bg-gray-300"}`}
                          aria-label={`الانتقال للتجربة ${idx + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                  <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                    {testimonialSlides[activeTestimonial].type === "photo" ? (
                      <Image
                        src={testimonialSlides[activeTestimonial].image || "/iamge/yaamur_bulding.jpg"}
                        alt={testimonialSlides[activeTestimonial].title || "مسجد مكتمل"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Image src="/iamge/yaamurabout.jpg" alt="المجتمع" fill className="object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-gray-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#08704C]" />
                      حركة ظهور لطيفة
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#08704C] to-[#00A186] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <ScrollReveal>
                <div className="space-y-4 text-right">
                  <h3 className="text-3xl font-black">جاهز لبدء مشروعك؟</h3>
                  <p className="text-lg text-white/90 max-w-2xl">
                    ابدأ الرحلة الآن أو انتقل مباشرة لصفحة التحويل النهائية للتبرع، وتخصيص اسم المسجد، ومشاركة مشروعك مع
                    من تحب.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <Link href="#journey">
                      <Button size="lg" className="bg-white text-[#08704C] hover:bg-[#F8F4ED]">
                        ابدأ الرحلة
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                    <Link href="/services/construction/final">
                      <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                        الانتقال لصفحة التحويل
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur shadow-2xl text-right">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-white/80">تقدم الخط الزمني</p>
                      <p className="text-xl font-bold">أبرز المراحل</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowLeft className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {constructionSteps.slice(0, 4).map((step) => {
                      const Icon = iconMap[step.icon];
                      return (
                        <div
                          key={step.slug}
                          className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white text-[#08704C] flex items-center justify-center">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm text-white/80">الخطوة {step.id}</p>
                              <p className="text-sm font-semibold">{step.title}</p>
                            </div>
                          </div>
                          <ArrowLeft className="w-4 h-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <WhatsAppButton />
        <SiteFooter />
      </div>
    </>
  );
}
