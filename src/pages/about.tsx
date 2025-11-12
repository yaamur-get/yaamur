
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ArrowLeft, Users, Award, Target, Eye, Mail, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";

interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  email?: string;
  phone?: string;
}

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  email?: string;
}

// بيانات مجلس الإدارة
const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "عبدالله بن محمد السعيد",
    position: "رئيس مجلس الإدارة",
    image: "/team/board-1.jpg",
    email: "chairman@yaamur.org",
    phone: "+966501234567"
  },
  {
    id: 2,
    name: "خالد بن أحمد العتيبي",
    position: "نائب رئيس المجلس",
    image: "/team/board-2.jpg",
    email: "vice.chairman@yaamur.org"
  },
  {
    id: 3,
    name: "سعد بن علي القحطاني",
    position: "أمين الصندوق",
    image: "/team/board-3.jpg",
    email: "treasurer@yaamur.org"
  },
  {
    id: 4,
    name: "فهد بن سليمان الدوسري",
    position: "عضو مجلس الإدارة",
    image: "/team/board-4.jpg"
  },
  {
    id: 5,
    name: "محمد بن ناصر الشمري",
    position: "عضو مجلس الإدارة",
    image: "/team/board-5.jpg"
  },
  {
    id: 6,
    name: "عبدالرحمن بن عبدالعزيز المطيري",
    position: "عضو مجلس الإدارة",
    image: "/team/board-6.jpg"
  }
];

// بيانات موظفي الجمعية
const employees: Employee[] = [
  {
    id: 1,
    name: "أحمد بن سعد الغامدي",
    position: "المدير التنفيذي",
    department: "الإدارة العليا",
    image: "/team/employee-1.jpg",
    email: "ceo@yaamur.org"
  },
  {
    id: 2,
    name: "عمر بن فهد الزهراني",
    position: "مدير قسم البناء والإنشاءات",
    department: "البناء والإنشاءات",
    image: "/team/employee-2.jpg",
    email: "construction@yaamur.org"
  },
  {
    id: 3,
    name: "ياسر بن محمد الحربي",
    position: "مدير قسم الصيانة",
    department: "الصيانة",
    image: "/team/employee-3.jpg",
    email: "maintenance@yaamur.org"
  },
  {
    id: 4,
    name: "طارق بن عبدالله السبيعي",
    position: "مدير قسم التشغيل",
    department: "التشغيل",
    image: "/team/employee-4.jpg",
    email: "operations@yaamur.org"
  },
  {
    id: 5,
    name: "نواف بن صالح العنزي",
    position: "مدير القسم المالي",
    department: "الشؤون المالية",
    image: "/team/employee-5.jpg",
    email: "finance@yaamur.org"
  },
  {
    id: 6,
    name: "بندر بن خالد المالكي",
    position: "مدير التسويق والعلاقات العامة",
    department: "التسويق والعلاقات",
    image: "/team/employee-6.jpg",
    email: "marketing@yaamur.org"
  },
  {
    id: 7,
    name: "ماجد بن عبدالرحمن الشهري",
    position: "مدير الموارد البشرية",
    department: "الموارد البشرية",
    image: "/team/employee-7.jpg",
    email: "hr@yaamur.org"
  },
  {
    id: 8,
    name: "سلطان بن محمد القرني",
    position: "مدير قسم التقنية",
    department: "التقنية والمعلومات",
    image: "/team/employee-8.jpg",
    email: "it@yaamur.org"
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>عن يعمر | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="تعرف على جمعية يعمر - رؤيتنا، رسالتنا، مجلس إدارتنا وفريق العمل المتميز" />
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

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  من نحن
                </span>
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  عن جمعية يعمر
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  جمعية متخصصة في عناية المساجد بالمنطقة الشرقية، نعمل على بناء وصيانة وتشغيل المساجد بأعلى معايير الجودة والإتقان
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* من نحن */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#08704C]/20 bg-gradient-to-br from-white to-[#08704C]/5 h-full">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <Eye className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
                    <p className="text-gray-600 leading-relaxed">
                      أن نكون الجمعية الرائدة في عناية المساجد بالمملكة، ونموذجاً يحتذى في خدمة بيوت الله بإتقان وإخلاص
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#7B4F28]/20 bg-gradient-to-br from-white to-[#7B4F28]/5 h-full">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#7B4F28] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">رسالتنا</h3>
                    <p className="text-gray-600 leading-relaxed">
                      تقديم خدمات متميزة في بناء وصيانة وتشغيل المساجد، وتوفير بيئة مثالية للعبادة والتعلم، والمساهمة في نشر العلم الشرعي
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#00A186]/20 bg-gradient-to-br from-white to-[#00A186]/5 h-full">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#00A186] to-[#08704C] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">قيمنا</h3>
                    <p className="text-gray-600 leading-relaxed">
                      الإخلاص في العمل، الإتقان والجودة، الشفافية والمساءلة، الابتكار والتطوير، الشراكة المجتمعية
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <Card className="border-2 border-gray-100 bg-white shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-black text-gray-900">نبذة عن الجمعية</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        جمعية يعمر لعناية المساجد هي جمعية خيرية متخصصة تأسست عام 2020م بالمنطقة الشرقية، بهدف خدمة بيوت الله من خلال ثلاثة محاور رئيسية: البناء والصيانة والتشغيل.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        نعمل على توفير بيئة مثالية للعبادة والتعلم في المساجد، من خلال فريق متخصص من المهندسين والفنيين والإداريين، ونلتزم بأعلى معايير الجودة والشفافية في جميع أعمالنا.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center p-4 bg-[#08704C]/10 rounded-2xl">
                          <div className="text-3xl font-black text-[#08704C] mb-2">2020</div>
                          <div className="text-sm text-gray-600">سنة التأسيس</div>
                        </div>
                        <div className="text-center p-4 bg-[#08704C]/10 rounded-2xl">
                          <div className="text-3xl font-black text-[#08704C] mb-2">150+</div>
                          <div className="text-sm text-gray-600">مسجد تم بناؤه</div>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-[#08704C]/20 to-[#00A186]/20 rounded-3xl relative overflow-hidden">
                      <div className="absolute inset-0 pattern-diagonal"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 className="w-40 h-40 text-[#08704C]/30" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* مجلس الإدارة */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20"></div>
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  قيادتنا
                </span>
                <h2 className="text-4xl font-black text-gray-900 mb-6">مجلس الإدارة</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  يقود جمعية يعمر مجلس إدارة متميز من أصحاب الخبرة والكفاءة في مختلف المجالات
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <ScrollReveal key={member.id} delay={index * 100}>
                  <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 bg-white hover:shadow-2xl">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-[#08704C]/20 to-[#00A186]/20 relative overflow-hidden">
                        <div className="absolute inset-0 pattern-diagonal opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                            <Users className="w-16 h-16 text-[#08704C]" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-[#08704C] font-semibold">{member.position}</p>
                        </div>

                        {(member.email || member.phone) && (
                          <div className="space-y-2 pt-4 border-t border-gray-100">
                            {member.email && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="w-4 h-4 text-[#08704C]" />
                                <span className="truncate">{member.email}</span>
                              </div>
                            )}
                            {member.phone && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4 text-[#08704C]" />
                                <span dir="ltr">{member.phone}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* موظفي الجمعية */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F4ED] relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  فريق العمل
                </span>
                <h2 className="text-4xl font-black text-gray-900 mb-6">موظفي الجمعية</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  فريق محترف ومتفاني يعمل بإخلاص لتحقيق أهداف الجمعية وخدمة بيوت الله
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {employees.map((employee, index) => (
                <ScrollReveal key={employee.id} delay={index * 50}>
                  <Card className="group overflow-hidden border-2 border-gray-100 hover:border-[#08704C]/30 transition-all duration-500 bg-white hover:shadow-2xl h-full">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-[#08704C]/10 to-[#7B4F28]/10 relative overflow-hidden">
                        <div className="absolute inset-0 pattern-diagonal opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                            <Users className="w-12 h-12 text-[#08704C]" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                          <div className="text-white text-xs font-semibold">{employee.department}</div>
                        </div>
                      </div>
                      
                      <div className="p-4 space-y-3">
                        <div className="text-center">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{employee.name}</h3>
                          <p className="text-[#08704C] font-semibold text-sm">{employee.position}</p>
                        </div>

                        {employee.email && (
                          <div className="pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <Mail className="w-3 h-3 text-[#08704C] flex-shrink-0" />
                              <span className="truncate">{employee.email}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#00A186] to-[#08704C] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">انضم إلى فريقنا</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                نبحث دائماً عن الكفاءات المتميزة للانضمام إلى فريق عمل يعمر
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers">
                  <Button size="lg" className="bg-white text-[#08704C] hover:bg-gray-100 shadow-xl text-lg px-10">
                    الفرص الوظيفية
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#08704C] text-lg px-10">
                    تواصل معنا
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatsAppButton />

        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-2xl flex items-center justify-center shadow-xl">
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
