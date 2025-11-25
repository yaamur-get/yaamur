
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, ArrowLeft, Briefcase, MapPin, Clock, Users, FileText, Send, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "مهندس إشراف على مشاريع المساجد",
    department: "قسم البناء والإنشاءات",
    location: "الدمام، المنطقة الشرقية",
    type: "full-time",
    description: "نبحث عن مهندس مدني/معماري للإشراف على مشاريع بناء وترميم المساجد",
    requirements: [
      "بكالوريوس هندسة مدنية أو معمارية",
      "خبرة لا تقل عن 3 سنوات في الإشراف على المشاريع",
      "إجادة برامج الأوتوكاد والريفيت",
      "مهارات قيادية وإدارية قوية"
    ],
    responsibilities: [
      "الإشراف على تنفيذ مشاريع بناء المساجد",
      "متابعة الجودة والالتزام بالمواصفات",
      "إعداد التقارير الفنية الدورية",
      "التنسيق مع المقاولين والموردين"
    ],
    benefits: [
      "راتب تنافسي",
      "تأمين طبي شامل",
      "بدل سكن ومواصلات",
      "بيئة عمل إيمانية محفزة"
    ]
  },
  {
    id: 2,
    title: "مشرف صيانة",
    department: "قسم الصيانة",
    location: "الخبر، المنطقة الشرقية",
    type: "full-time",
    description: "للإشراف على أعمال الصيانة الدورية والطارئة للمساجد",
    requirements: [
      "دبلوم أو بكالوريوس في مجال ذي صلة",
      "خبرة في أعمال الصيانة والترميم",
      "القدرة على العمل الميداني",
      "مهارات تواصل جيدة"
    ],
    responsibilities: [
      "الإشراف على فرق الصيانة",
      "جدولة وتنفيذ أعمال الصيانة الدورية",
      "معالجة الأعطال الطارئة",
      "إعداد تقارير الصيانة"
    ],
    benefits: [
      "راتب مجزٍ",
      "تأمين طبي",
      "بدل انتقال",
      "فرص للتطوير المهني"
    ]
  },
  {
    id: 3,
    title: "منسق برامج المساجد",
    department: "قسم التشغيل",
    location: "القطيف، المنطقة الشرقية",
    type: "full-time",
    description: "لتنسيق وإدارة البرامج والأنشطة في المساجد التابعة للجمعية",
    requirements: [
      "بكالوريوس في الإدارة أو مجال ذي صلة",
      "خبرة في إدارة البرامج والفعاليات",
      "مهارات تنظيمية عالية",
      "القدرة على التعامل مع المجتمع"
    ],
    responsibilities: [
      "تنسيق البرامج الدينية والتعليمية",
      "إدارة المتطوعين",
      "التواصل مع أئمة المساجد",
      "تنظيم الفعاليات والأنشطة"
    ],
    benefits: [
      "راتب تنافسي",
      "تأمين صحي",
      "مرونة في ساعات العمل",
      "بيئة عمل مميزة"
    ]
  },
  {
    id: 4,
    title: "محاسب",
    department: "القسم المالي",
    location: "الدمام، المنطقة الشرقية",
    type: "full-time",
    description: "للعمل في القسم المالي وإدارة الحسابات المالية للجمعية",
    requirements: [
      "بكالوريوس محاسبة",
      "خبرة لا تقل عن سنتين",
      "إجادة برامج المحاسبة",
      "معرفة بالأنظمة المالية للجمعيات"
    ],
    responsibilities: [
      "إعداد القيود المحاسبية",
      "متابعة المصروفات والإيرادات",
      "إعداد التقارير المالية",
      "المساعدة في إعداد الميزانيات"
    ],
    benefits: [
      "راتب مناسب",
      "تأمين طبي",
      "بيئة عمل احترافية",
      "فرص للتطور المهني"
    ]
  },
  {
    id: 5,
    title: "موظف علاقات عامة",
    department: "قسم التسويق والعلاقات",
    location: "الدمام، المنطقة الشرقية",
    type: "full-time",
    description: "للتواصل مع الجهات المانحة والشركاء والإعلام",
    requirements: [
      "بكالوريوس في العلاقات العامة أو الإعلام",
      "مهارات تواصل متميزة",
      "خبرة في إدارة وسائل التواصل الاجتماعي",
      "القدرة على الكتابة والتحرير"
    ],
    responsibilities: [
      "إدارة حسابات التواصل الاجتماعي",
      "التواصل مع الشركاء والمانحين",
      "إعداد المحتوى الإعلامي",
      "تنظيم الفعاليات الإعلامية"
    ],
    benefits: [
      "راتب جيد",
      "تأمين صحي",
      "بيئة عمل إبداعية",
      "فرص للنمو"
    ]
  },
  {
    id: 6,
    title: "متطوع ميداني",
    department: "قسم التطوع",
    location: "جميع مدن المنطقة الشرقية",
    type: "part-time",
    description: "للمساعدة في الأنشطة الميدانية وخدمة المساجد",
    requirements: [
      "شهادة ثانوية على الأقل",
      "الرغبة في العمل التطوعي",
      "القدرة على العمل ضمن فريق",
      "المرونة في أوقات العمل"
    ],
    responsibilities: [
      "المساعدة في تنظيف وتنظيم المساجد",
      "المساعدة في الفعاليات",
      "التواصل مع المجتمع المحلي",
      "المشاركة في الحملات"
    ],
    benefits: [
      "شهادة تطوع معتمدة",
      "تأمين ميداني",
      "وجبات العمل",
      "خبرة عملية قيّمة"
    ]
  }
];

const jobTypeLabels = {
  "full-time": "دوام كامل",
  "part-time": "دوام جزئي",
  "contract": "عقد محدد"
};

const jobTypeColors = {
  "full-time": { bg: "bg-[#08704C]/10", text: "text-[#08704C]", border: "border-[#08704C]/30" },
  "part-time": { bg: "bg-[#00A186]/10", text: "text-[#00A186]", border: "border-[#00A186]/30" },
  "contract": { bg: "bg-[#7B4F28]/10", text: "text-[#7B4F28]", border: "border-[#7B4F28]/30" }
};

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>الفرص الوظيفية | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="انضم إلى فريق يعمر - فرص وظيفية وتطوعية في خدمة بيوت الله" />
      </Head>

      <div className="min-h-screen bg-[#F8F4ED]" dir="rtl">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08704C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B4F28]/5 rounded-full blur-3xl"></div>
        </div>

       

        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  انضم إلى فريقنا
                </span>
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  الفرص الوظيفية
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  كن جزءاً من فريق يعمر واحصل على فرصة المساهمة في خدمة بيوت الله. نوفر بيئة عمل إيمانية محفزة ومزايا تنافسية
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <Card className="border-2 border-[#08704C]/20 bg-gradient-to-br from-white to-[#08704C]/5">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center mb-4 shadow-xl">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{jobPositions.length}+</h3>
                    <p className="text-gray-600">فرصة وظيفية متاحة</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#00A186]/20 bg-gradient-to-br from-white to-[#00A186]/5">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00A186] to-[#08704C] rounded-3xl flex items-center justify-center mb-4 shadow-xl">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                    <p className="text-gray-600">موظف في فريقنا</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#7B4F28]/20 bg-gradient-to-br from-white to-[#7B4F28]/5">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#7B4F28] to-[#08704C] rounded-3xl flex items-center justify-center mb-4 shadow-xl">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
                    <p className="text-gray-600">بيئة عمل محفزة</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">الوظائف المتاحة</h2>
            </ScrollReveal>

            <div className="space-y-6">
              {jobPositions.map((job, index) => {
                const colors = jobTypeColors[job.type];
                return (
                  <ScrollReveal key={job.id} delay={index * 50}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#08704C]/30 bg-white">
                      <CardHeader className="border-b border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-12 h-12 bg-[#08704C]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#08704C] transition-colors">
                                <Briefcase className="w-6 h-6 text-[#08704C] group-hover:text-white transition-colors" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#08704C] transition-colors">
                                  {job.title}
                                </CardTitle>
                                <p className="text-gray-600">{job.description}</p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4">
                              <Badge className={`${colors.bg} ${colors.text} border ${colors.border} font-bold`}>
                                <Clock className="w-3 h-3 ml-1" />
                                {jobTypeLabels[job.type]}
                              </Badge>
                              <Badge className="bg-gray-100 text-gray-700 border border-gray-300 font-bold">
                                <Building2 className="w-3 h-3 ml-1" />
                                {job.department}
                              </Badge>
                              <Badge className="bg-gray-100 text-gray-700 border border-gray-300 font-bold">
                                <MapPin className="w-3 h-3 ml-1" />
                                {job.location}
                              </Badge>
                            </div>
                          </div>

                          <Button className="bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-lg md:mt-0">
                            <Send className="w-4 h-4 ml-2" />
                            قدّم الآن
                          </Button>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <FileText className="w-5 h-5 text-[#08704C]" />
                              المتطلبات
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#08704C] mt-1.5 flex-shrink-0"></div>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-[#08704C]" />
                              المهام
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#08704C] mt-1.5 flex-shrink-0"></div>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-[#08704C]" />
                              المزايا
                            </h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#08704C] mt-1.5 flex-shrink-0"></div>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#08704C] via-[#00A186] to-[#08704C] text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10"></div>
          <div className="container mx-auto relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">لم تجد الوظيفة المناسبة؟</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرص مناسبة لمؤهلاتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#08704C] hover:bg-gray-100 shadow-xl text-lg px-10">
                  <Send className="w-5 h-5 ml-2" />
                  أرسل سيرتك الذاتية
                </Button>
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
