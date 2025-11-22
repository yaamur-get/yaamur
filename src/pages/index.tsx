import { useEffect, useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Sparkles, ArrowRight, Phone, Mail, MapPin, ExternalLink, Users, Handshake, BookOpen, ArrowUp, ArrowLeft, CheckCircle, TrendingUp, ChevronDown } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { NewsSlider } from "@/components/NewsSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClientOnly } from "@/components/ClientOnly";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>
        <meta name="description" content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد - مساجدنا عامرة" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B4F28]/5 rounded-full blur-3xl"></div>
        </div>

        {/* <header 
          className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
            isScrolled 
              ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100" 
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-3">
                <div className="relative h-full w-40 shrink-0">
                  <Image
                    src="/yaamurlogoone.png"
                    alt="جمعية يعمر لعناية المساجد"
                    width={200}
                    height={40}
                    className="object-contain object-center transition-all duration-300 hover:scale-105 bg-[length:200%_100%] hover:bg-rightجم "
                    priority
                  />
                </div>
              </div>

              <nav className="hidden lg:flex items-center gap-8">
                <Link
                  href="/"
                  className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
                >
                  الرئيسية
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
                </Link>

                <div 
                  className="relative"
                  onMouseEnter={() => setShowServicesMenu(true)}
                  onMouseLeave={() => setShowServicesMenu(false)}
                >
                  <button className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group flex items-center gap-1">
                    خدماتنا
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServicesMenu ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
                  </button>
                  
                  {showServicesMenu && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <Link
                        href="/services/construction"
                        className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                      >
                        <Building2 className="w-4 h-4" />
                        البناء
                      </Link>
                      <Link
                        href="/services/maintenance"
                        className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                      >
                        <Wrench className="w-4 h-4" />
                        الصيانة
                      </Link>
                      <Link
                        href="/services/operation"
                        className="block px-4 py-3 text-gray-700 hover:bg-[#08704C]/5 hover:text-[#08704C] transition-colors font-semibold flex items-center gap-3"
                      >
                        <Sparkles className="w-4 h-4" />
                        التشغيل
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/programs"
                  className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
                >
                  برامجنا
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  href="/news"
                  className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
                >
                  الأخبار
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  href="/about"
                  className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
                >
                  عن يعمر
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  href="/careers"
                  className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
                >
                  الفرص الوظيفية
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  href="/governance"
                  className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
                >
                  الحوكمة
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  href="#contact"
                  className="relative text-gray-700 hover:text-[#08704C] transition-colors font-semibold text-sm group"
                >
                  تواصل معنا
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#08704C] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </nav>

              <MobileMenu isScrolled={isScrolled} />

              <Button 
                className="hidden sm:flex bg-gradient-to-r from-[#08704C] via-[#00A186] to-[#08704C] hover:shadow-2xl text-white shadow-lg transition-all duration-300 hover:scale-105 bg-[length:200%_100%] hover:bg-right"
                size="lg"
              >
                <ExternalLink className="w-4 h-4 ml-2" />
                المتجر الخيري
              </Button>
            </div>
          </div>
        </header> */}

        <section id="home" className="relative pt-6 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#08704C]/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tl from-[#7B4F28]/10 to-transparent rounded-full blur-3xl" style={{ animationDelay: "2s" }}></div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                

                                        {/* تحت الآية مباشرة */}
                        <div className="flex w-full justify-center">
                          <Image
                            src="/maidelog.png"  
                            alt="جمعية يعمر للعناية بالمساجد | Yaamur Association for Mosque Care"
                            width={1000}
                            height={360}
                            className="mx-auto h-auto w-[min(90vw,640px)] object-contain"
                            priority
                          />
                        </div>

                <ScrollReveal delay={200}>
                  <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                    جمعية متخصصة في بناء وصيانة وتشغيل المساجد بالمنطقة الشرقية، نسعى لتوفير بيئة مثالية للعبادة والتعلم
                  </p>
                </ScrollReveal>
                    
                <ScrollReveal delay={300}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-2xl text-lg px-10 py-7 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 ml-2" />
                      تبرع الآن
                    </Button>
                    <Link href="/about">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10 py-7 transition-all duration-300"
                    >
                      <BookOpen className="w-5 h-5 ml-2" />
                      رؤيتنا ورسالتنا
                    </Button>
                    </Link>
                    
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex items-center gap-8 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#08704C] to-[#00A186] border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">+150 مسجد تم بناؤه</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={200}>
                <div className="relative">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl card-elevated">
                    <div
                      className="aspect-[4/4] bg-gradient-to-br from-[#08704C]/20 via-[#00A186]/20 to-[#7B4F28]/20 flex items-center justify-center relative"
                      style={{
                        backgroundImage: "url('/666.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      
                      
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-gray-900">500+</p>
                            <p className="text-xs text-gray-600">عملية صيانة</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl" style={{ animationDelay: "1s" }}>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#7B4F28] to-[#08704C] rounded-xl flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-gray-900">300+</p>
                            <p className="text-xs text-gray-600">مسجد قيد التشغيل</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#00A186]/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#7B4F28]/20 rounded-full blur-2xl"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20"></div>
          
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  خدماتنا المتميزة
                </span>
                <h2 className="text-5xl font-black text-gray-900 mb-6">خدماتنا</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  نقدم حلولاً شاملة ومتكاملة لرعاية المساجد بأعلى معايير الجودة والاحترافية
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal delay={100}>
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#08704C]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#08704C]/10 to-transparent rounded-full blur-2xl"></div>
                  <CardContent className="p-8 space-y-6 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#08704C] transition-colors">بناء المساجد</h3>
                      <p className="text-gray-600 leading-relaxed">
                        نشرف على مشاريع بناء المساجد من التخطيط حتى التسليم بأعلى معايير الجودة والتصميم الإسلامي الأصيل
                      </p>
                    </div>
                    <Link href="/services/construction">
                      <Button variant="ghost" className="text-[#08704C] hover:text-white hover:bg-[#08704C] p-0 h-auto font-bold group/btn">
                        <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#7B4F28]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#7B4F28]/5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7B4F28]/10 to-transparent rounded-full blur-2xl"></div>
                  <CardContent className="p-8 space-y-6 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#7B4F28] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Wrench className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#7B4F28] transition-colors">الصيانة</h3>
                      <p className="text-gray-600 leading-relaxed">
                        نوفر خدمات الصيانة الدورية والترميم الشامل للحفاظ على جمال المساجد وسلامتها الإنشائية
                      </p>
                    </div>
                    <Link href="/services/maintenance">
                      <Button variant="ghost" className="text-[#7B4F28] hover:text-white hover:bg-[#7B4F28] p-0 h-auto font-bold group/btn">
                        <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#00A186]/30 transition-all duration-500 h-full card-elevated bg-gradient-to-br from-white to-[#00A186]/5 md:col-span-2 lg:col-span-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00A186]/10 to-transparent rounded-full blur-2xl"></div>
                  <CardContent className="p-8 space-y-6 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00A186] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#00A186] transition-colors">التشغيل</h3>
                      <p className="text-gray-600 leading-relaxed">
                        نتولى التشغيل الكامل والنظافة اليومية لتوفير بيئة نظيفة ومريحة للمصلين على مدار العام
                      </p>
                    </div>
                    <Link href="/services/operation">
                      <Button variant="ghost" className="text-[#00A186] hover:text-white hover:bg-[#00A186] p-0 h-auto font-bold group/btn">
                        <span className="group-hover/btn:mr-2 transition-all">اعرف المزيد</span>
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:mr-0 transition-all" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="news" className="py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#F8F4ED] to-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-stars"></div>
          
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  تابع أخبارنا
                </span>
                <h2 className="text-5xl font-black text-gray-900 mb-6">آخر الأخبار</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  تعرف على أحدث مشاريعنا وإنجازاتنا في خدمة بيوت الله
                </p>
              </div>
            </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="max-w-6xl lg:max-w-[1700px] mx-auto px-4 sm:px-6">
                  <NewsSlider />
                </div>
              </ScrollReveal>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#00A186] to-[#08704C] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6">إنجازاتنا بالأرقام</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                نفخر بما حققناه من نجاحات ملموسة في خدمة بيوت الله
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 150, label: "مسجد تم بناؤه", suffix: "+", icon: Building2 },
                { number: 500, label: "عملية صيانة", suffix: "+", icon: Wrench },
                { number: 300, label: "مسجد قيد التشغيل", suffix: "+", icon: Sparkles },
                { number: 50, label: "مشروع جاري", suffix: "+", icon: TrendingUp },
                  { number: 150, label: "مسجد تم بناؤه", suffix: "+", icon: Building2 },
                { number: 500, label: "عملية صيانة", suffix: "+", icon: Wrench },
                { number: 300, label: "مسجد قيد التشغيل", suffix: "+", icon: Sparkles },
                { number: 50, label: "مشروع جاري", suffix: "+", icon: TrendingUp }
              ].map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center space-y-6 group">
                    <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border-4 border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                      <div className="text-center">
                        <stat.icon className="w-8 h-8 mx-auto mb-2 text-white/80" />
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </div>
                    </div>
                    <p className="text-lg font-bold">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F4ED] relative overflow-hidden">
          <div className="absolute inset-0 pattern-diagonal opacity-30"></div>
          
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  شركاء النجاح
                </span>
                <h2 className="text-5xl font-black text-gray-900 mb-6">شركاؤنا</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  نفخر بشراكتنا مع أفضل المؤسسات في رحلتنا لخدمة بيوت الله
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <PartnersCarousel />
            </ScrollReveal>
          </div>
        </section>

        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20"></div>
          
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  كن جزءاً منا
                </span>
                <h2 className="text-5xl font-black text-gray-900 mb-6">انضم إلينا</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ساهم معنا في عمارة بيوت الله وكن شريكاً في الأجر
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ScrollReveal delay={100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#08704C]/30 h-full card-elevated bg-gradient-to-br from-white to-[#08704C]/5">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">تطوع معنا</h3>
                    <p className="text-gray-600 leading-relaxed">
                      انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله بوقتك وجهدك
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-lg hover:shadow-xl transition-all">
                      سجل الآن
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#7B4F28]/30 h-full card-elevated bg-gradient-to-br from-white to-[#7B4F28]/5">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#7B4F28] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Handshake className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">كن شريكًا</h3>
                    <p className="text-gray-600 leading-relaxed">
                      شارك معنا في مشاريعنا وكن شريكاً استراتيجياً في الأجر والثواب
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#7B4F28] to-[#08704C] hover:from-[#08704C] hover:to-[#7B4F28] text-white shadow-lg hover:shadow-xl transition-all">
                      تواصل معنا
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#00A186]/30 h-full card-elevated bg-gradient-to-br from-white to-[#00A186]/5">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00A186] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">اعرف أكثر</h3>
                    <p className="text-gray-600 leading-relaxed">
                      تعرف على رؤيتنا ورسالتنا وإنجازاتنا في خدمة المساجد
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#00A186] to-[#08704C] hover:from-[#08704C] hover:to-[#00A186] text-white shadow-lg hover:shadow-xl transition-all">
                      من نحن
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center group animate-pulse-glow"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}

        <WhatsAppButton />

        <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-5"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-2xl flex items-center justify-center shadow-xl">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">جمعية يعمر</h3>
                    <p className="text-sm text-gray-400">لعناية المساجد</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  نسعى لتحقيق التميز في خدمة بيوت الله من خلال البناء والصيانة والتشغيل المتقن
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
                <nav className="flex flex-col gap-3">
                  {["الرئيسية", "برامجنا", "الأخبار", "من نحن"].map((item, idx) => (
                    <a 
                      key={idx}
                      href={`#${["home", "services", "news", "about"][idx]}`} 
                      className="text-gray-400 hover:text-[#00A186] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowLeft className="w-4 h-4 group-hover:mr-1 transition-all" />
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                    <div className="w-10 h-10 bg-[#00A186]/20 rounded-xl flex items-center justify-center group-hover:bg-[#00A186] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span dir="ltr">+966 50 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                    <div className="w-10 h-10 bg-[#00A186]/20 rounded-xl flex items-center justify-center group-hover:bg-[#00A186] transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>info@yaamur.org</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                    <div className="w-10 h-10 bg-[#00A186]/20 rounded-xl flex items-center justify-center group-hover:bg-[#00A186] transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>المنطقة الشرقية، المملكة العربية السعودية</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold text-lg">ساهم معنا</h4>
                <p className="text-gray-400 text-sm">
                  تبرعك يساهم في بناء وصيانة بيوت الله ويصل أجره إليك في كل صلاة
                </p>
                <Button className="w-full bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] shadow-xl hover:shadow-2xl transition-all">
                  <ExternalLink className="w-4 h-4 ml-2" />
                  المتجر الإلكتروني
                </Button>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center space-y-3">
              <p className="text-gray-400">
                جميع الحقوق محفوظة © <ClientOnly>{new Date().getFullYear()}</ClientOnly> جمعية يعمر لعناية المساجد
              </p>
              <p className="text-gray-500 text-sm">
                رقم الترخيص: 1234567890
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
