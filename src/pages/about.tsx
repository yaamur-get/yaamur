
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Award, Target, Eye, Mail, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

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
    "id": 1,
    "name": "م. عبدالله بن صالح العباد",
    "position": "نائب رئيس مجلس الإدارة",
    "image": "/iamge/bordmambr/abad.png",
    "email": "",
    "phone": ""
  },
  {
    "id": 2,
    "name": "د. صالح بن سليمان الرشيد",
    "position": "رئيس مجلس الإدارة",
    "image": "/iamge/bordmambr/salha.png",
    "email": "",
    "phone": ""
  },
  {
    "id": 3,
    "name": "أ. صلاح بن محمد السويدان",
    "position": "عضو مجلس الإدارة",
    "image": "/iamge/bordmambr/swedan.png",
    "email": "",
    "phone": ""
  },
  {
    "id": 4,
    "name": "أ. رامي بن زبب الزهراني",
    "position": "عضو مجلس الإدارة",
    "image": "/iamge/bordmambr/ramy.png",
    "email": "",
    "phone": ""
  },
  {
    "id": 5,
    "name": "م. يوسف بن عبدالله العبيدي",
    "position": "المشرف المالي",
    "image": "/iamge/bordmambr/yousefady.png",
    "email": "",
    "phone": ""
  },
  {
    "id": 6,
    "name": "د. عادل بن علي القحطاني",
    "position": "عضو مجلس الإدارة",
    "image": "/iamge/bordmambr/qhtiny.png",
    "email": "",
    "phone": ""
  },
  {
    "id": 7,
    "name": "م. عبدالله بن فهد العويمري",
    "position": "عضو مجلس الإدارة",
    "image": "/iamge/bordmambr/unknow.jpeg",
    "email": "",
    "phone": ""
  }
];

// بيانات موظفي الجمعية
const employees: Employee[] = [
  {
    "id": 1,
    "name": "عبدالله جاسم البنعلي",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 2,
    "name": "حمزة رشيد السعيد",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 3,
    "name": "عبدالعزيز محمد عبدالرحيم",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 4,
    "name": "سليمان فهد البيشي",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 5,
    "name": "عبدالرحمن حسن العطاس",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 6,
    "name": "عبدالله موسى البارقي",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 7,
    "name": "عبدالعزيز فؤاد البارقي",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 8,
    "name": "يوسف حسن البارقي",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 9,
    "name": "خالد عبدالله الشمراني",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 10,
    "name": "فارس إبراهيم الدخيل",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 11,
    "name": "علي إبراهيم العقل",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 12,
    "name": "أحمد عبدالله بونيس",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 13,
    "name": "حمدان فهد الودعاني",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
   {
    "id": 14,
    "name": "منير محمد الزهراني",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
  },
  {
    "id": 14,
    "name": "عبدالعزيز السرحاني",
    "position": "",
    "department": "",
    "image": "",
    "email": ""
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

        

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                
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
                     مساجد عامرة ونموذجيه
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
                     جمعية أهلية تسعى للعناية ببيوت الله عز وجل, من خلال تطبيق الممارسات الفضلى لتحقيق استدامتها
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
                     الجودة - الشراكة- الإخلاص - الإحسان - الاستدامة


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
                      <Image 
                        src="/yaamurlogoone.png" 
                        alt="شعار جمعية يعمر" 
                        width={150}
                        height={150}
                        />

                      <h2 className="text-4xl font-black text-gray-900">نبذة عن الجمعية</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                          جمعية خيرية تأسست عام 2023م بالمنطقة الشرقية، بهدف خدمة بيوت الله من خلال ثلاثة محاور رئيسية: البناء والصيانة والتشغيل.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        نعمل على توفير بيئة مثالية للعبادة في المساجد، من خلال فريق متخصص من المهندسين والفنيين والإداريين، ونلتزم بأعلى معايير الجودة والشفافية في جميع أعمالنا.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center p-4 bg-[#08704C]/10 rounded-2xl">
                          <div className="text-3xl font-black text-[#08704C] mb-2">2023</div>
                          <div className="text-sm text-gray-600">سنة التأسيس</div>
                        </div>
                        <div className="text-center p-4 bg-[#08704C]/10 rounded-2xl">
                          <div className="text-3xl font-black text-[#08704C] mb-2">305+</div>
                          <div className="text-sm text-gray-600">مسجد تم خدمته</div>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-[#08704C]/20 to-[#00A186]/20 rounded-3xl relative overflow-hidden">
                      <Image
                        src="/iamge/yaamurabout.jpg"
                        alt="نبذة عن الجمعية"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
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
                        <Image
                          src={member.image || "/image/placeholder-profile.png"}
                          alt={member.name}
                          width={900}
                          height={1000}
                          />
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

        <SiteFooter />
      </div>
    </>
  );
}
