import { useEffect, useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Sparkles, ArrowRight, Phone, Mail, MapPin, ExternalLink, Users, Handshake, BookOpen } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MobileMenu } from "@/components/MobileMenu";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>جمعية يعمر لعناية المساجد | Ya&apos;mur Association</title>
        <meta name="description" content="جمعية يعمر لعناية المساجد - بناء وصيانة وتشغيل المساجد" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50/30" dir="rtl">
        {/* Header */}
        <header 
          className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo and Name */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">جمعية يعمر</h1>
                  <p className="text-xs text-emerald-700">لعناية المساجد</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">الرئيسية</a>
                <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">برامجنا</a>
                <a href="#news" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">الأخبار</a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">من نحن</a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">تواصل معنا</a>
              </nav>

              <MobileMenu isScrolled={isScrolled} />

              {/* CTA Button */}
              <Button 
                className="hidden sm:flex bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                <ExternalLink className="w-4 h-4 ml-2" />
                المتجر الخيري
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      نحن نبني ونحافظ على بيوت الله
                    </span>
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    نعمر المساجد
                    <span className="block text-emerald-600 mt-2">ونرعى بيوت الله</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    جمعية متخصصة في بناء وصيانة وتشغيل المساجد، نسعى لخدمة بيوت الله وتوفير بيئة مناسبة للعبادة والتعلم
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg text-lg px-8">
                    <ExternalLink className="w-5 h-5 ml-2" />
                    تبرع الآن
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-lg px-8">
                    <BookOpen className="w-5 h-5 ml-2" />
                    اعرف المزيد
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center">
                    <Building2 className="w-48 h-48 text-emerald-600/20" />
                  </div>
                  {/* Floating accent elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">برامجنا وخدماتنا</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نقدم مجموعة شاملة من الخدمات لضمان أفضل رعاية للمساجد
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-200 overflow-hidden">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">بناء المساجد</h3>
                  <p className="text-gray-600 leading-relaxed">
                    نشرف على مشاريع بناء المساجد من التخطيط حتى التسليم، مع الالتزام بأعلى معايير الجودة والتصميم الإسلامي الأصيل
                  </p>
                  <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 h-auto font-semibold">
                    اعرف المزيد <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-amber-200 overflow-hidden">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">الصيانة والترميم</h3>
                  <p className="text-gray-600 leading-relaxed">
                    نوفر خدمات الصيانة الدورية والترميم للمساجد، للحفاظ على جمالها وسلامتها الإنشائية على مدار السنة
                  </p>
                  <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0 h-auto font-semibold">
                    اعرف المزيد <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 overflow-hidden">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">التشغيل والنظافة</h3>
                  <p className="text-gray-600 leading-relaxed">
                    نتولى تشغيل المساجد وإدارتها، بما في ذلك النظافة اليومية والخدمات المساندة، لتوفير بيئة نظيفة ومريحة للمصلين
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                    اعرف المزيد <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">آخر الأخبار</h2>
              <p className="text-xl text-gray-600">تابع أحدث مشاريعنا وإنجازاتنا</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center overflow-hidden">
                    <Building2 className="w-20 h-20 text-emerald-600/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <span className="text-sm text-emerald-600 font-medium">
                      {mounted ? new Date().toLocaleDateString("ar-SA") : ""}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      افتتاح مسجد جديد في حي السلام
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      بحمد الله تم افتتاح مسجد جديد يتسع لـ 500 مصلٍ، تم بناؤه وفق أحدث المعايير والمواصفات الإسلامية
                    </p>
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 h-auto font-semibold">
                      اقرأ المزيد <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
              <p className="text-xl text-emerald-100">نفخر بما حققناه من إنجازات في خدمة بيوت الله</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 150, label: "مسجد تم بناؤه", suffix: "+" },
                { number: 500, label: "عملية صيانة", suffix: "+" },
                { number: 300, label: "مسجد قيد التشغيل", suffix: "+" },
                { number: 50, label: "مشروع جاري", suffix: "+" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20 hover:scale-110 transition-transform">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-lg sm:text-xl font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">شركاؤنا</h2>
              <p className="text-xl text-gray-600">نفخر بشراكتنا مع أفضل المؤسسات</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div 
                  key={item} 
                  className="aspect-square rounded-full bg-gray-50 border-2 border-gray-200 flex items-center justify-center hover:border-emerald-300 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span className="text-gray-400 font-bold">شريك {item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">انضم إلينا</h2>
              <p className="text-xl text-gray-600">كن جزءًا من مسيرتنا في عمارة بيوت الله</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">تطوع معنا</h3>
                  <p className="text-gray-600">
                    انضم إلى فريق المتطوعين وساهم في خدمة بيوت الله
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    سجل الآن
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Handshake className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">كن شريكًا</h3>
                  <p className="text-gray-600">
                    شارك معنا في مشاريعنا وكن شريكًا في الأجر
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    تواصل معنا
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">اعرف أكثر</h3>
                  <p className="text-gray-600">
                    تعرف على رؤيتنا ورسالتنا وإنجازاتنا
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    من نحن
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* About */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">جمعية يعمر</h3>
                    <p className="text-sm text-gray-400">لعناية المساجد</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  جمعية متخصصة في بناء وصيانة وتشغيل المساجد، نسعى لخدمة بيوت الله بأعلى معايير الجودة والاحترافية
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
                <nav className="flex flex-col gap-3">
                  <a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">الرئيسية</a>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">برامجنا</a>
                  <a href="#news" className="text-gray-400 hover:text-emerald-400 transition-colors">الأخبار</a>
                  <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">من نحن</a>
                </nav>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span dir="ltr">+966 50 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <span>info@yaamur.org</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                    <span>الرياض، المملكة العربية السعودية</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg mb-4">ساهم معنا</h4>
                <p className="text-gray-400 text-sm mb-4">
                  تبرعك يساهم في بناء وصيانة بيوت الله
                </p>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                  <ExternalLink className="w-4 h-4 ml-2" />
                  المتجر الخيري
                </Button>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center space-y-2">
              <p className="text-gray-400 text-sm">
                جميع الحقوق محفوظة © {new Date().getFullYear()} جمعية يعمر لعناية المساجد
              </p>
              <p className="text-gray-500 text-xs">
                رقم الترخيص: 1234567890
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}
