import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, Download, Eye, ArrowLeft, Shield, Users, BarChart, FileCheck, Scale, UserCheck, AlertCircle, Lock, Trash2, ClipboardList, MessageSquare, ThumbsUp, FileBarChart, TrendingUp, DollarSign, Archive } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";

interface Document {
  id: string;
  title: string;
  description?: string;
  icon: any;
  filePath: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  icon: any;
  documents: Document[];
}

const governanceSections: Section[] = [
  {
    id: "bylaws",
    title: "اللائحة الأساسية",
    description: "اللائحة الأساسية للجمعية المعتمدة من الجهات المختصة",
    icon: Scale,
    documents: [
      {
        id: "main-bylaws",
        title: "اللائحة الأساسية للجمعية",
        description: "النسخة المعتمدة مع إخفاء بيانات الهوية الوطنية للأعضاء",
        icon: FileText,
        filePath: "/governance/bylaws/main-bylaws.pdf"
      }
    ]
  },
  {
    id: "policies",
    title: "السياسات",
    description: "السياسات المعتمدة لتنظيم عمل الجمعية",
    icon: FileCheck,
    documents: [
      {
        id: "policy-fundraising",
        title: "سياسة جمع التبرعات",
        description: "القواعد والإجراءات المتبعة في جمع التبرعات",
        icon: DollarSign,
        filePath: "/governance/policies/fundraising-policy.pdf"
      },
      {
        id: "policy-beneficiaries",
        title: "سياسة تنظيم العلاقة مع المستفيدين وتقديم الخدمات",
        description: "معايير وإجراءات تقديم الخدمات للمستفيدين",
        icon: Users,
        filePath: "/governance/policies/beneficiaries-policy.pdf"
      },
      {
        id: "policy-volunteers",
        title: "سياسة إدارة المتطوعين",
        description: "تنظيم العلاقة مع المتطوعين وإدارتهم",
        icon: UserCheck,
        filePath: "/governance/policies/volunteers-policy.pdf"
      },
      {
        id: "policy-conflict",
        title: "سياسة تعارض المصالح",
        description: "الضوابط لتجنب تعارض المصالح في عمل الجمعية",
        icon: AlertCircle,
        filePath: "/governance/policies/conflict-of-interest-policy.pdf"
      },
      {
        id: "policy-whistleblowing",
        title: "سياسة البلاغات عن المخالفات وحماية مقدمي البلاغات",
        description: "آلية الإبلاغ عن المخالفات وحماية المبلغين",
        icon: Shield,
        filePath: "/governance/policies/whistleblowing-policy.pdf"
      },
      {
        id: "policy-privacy",
        title: "سياسة خصوصية البيانات",
        description: "حماية البيانات الشخصية والمعلومات السرية",
        icon: Lock,
        filePath: "/governance/policies/privacy-policy.pdf"
      },
      {
        id: "policy-records",
        title: "سياسة حفظ وإتلاف الوثائق",
        description: "إجراءات حفظ الوثائق والسجلات وإتلافها",
        icon: Archive,
        filePath: "/governance/policies/records-policy.pdf"
      }
    ]
  },
  {
    id: "procedures",
    title: "الآليات والإجراءات",
    description: "الآليات التنفيذية لتطبيق السياسات",
    icon: ClipboardList,
    documents: [
      {
        id: "proc-volunteers",
        title: "آلية إدارة المتطوعين",
        description: "الإجراءات التفصيلية لإدارة المتطوعين",
        icon: UserCheck,
        filePath: "/governance/procedures/volunteers-procedure.pdf"
      },
      {
        id: "proc-complaints",
        title: "آلية استقبال الشكاوى والاقتراحات والاستفسارات والتعامل معها",
        description: "نظام استقبال ومعالجة الشكاوى والاقتراحات",
        icon: MessageSquare,
        filePath: "/governance/procedures/complaints-procedure.pdf"
      },
      {
        id: "proc-satisfaction",
        title: "آلية قياس رضا المستفيدين والتغذية الراجعة",
        description: "طرق قياس رضا المستفيدين وجمع التغذية الراجعة",
        icon: ThumbsUp,
        filePath: "/governance/procedures/satisfaction-procedure.pdf"
      }
    ]
  },
  {
    id: "disclosure",
    title: "الإفصاح والبيانات التنظيمية",
    description: "المعلومات والبيانات التنظيمية للجمعية",
    icon: FileBarChart,
    documents: [
      {
        id: "disc-members",
        title: "أسماء أعضاء الجمعية العمومية",
        description: "قائمة أعضاء الجمعية العمومية الحاليين",
        icon: Users,
        filePath: "/governance/disclosure/general-assembly-members.pdf"
      },
      {
        id: "disc-meetings",
        title: "دعوات اجتماعات الجمعية العمومية ومحاضر الاجتماعات",
        description: "سجل اجتماعات الجمعية العمومية",
        icon: FileText,
        filePath: "/governance/disclosure/assembly-meetings.pdf"
      },
      {
        id: "disc-board",
        title: "بيانات مجلس الإدارة",
        description: "أسماء أعضاء مجلس الإدارة ومدة الدورة الحالية",
        icon: Users,
        filePath: "/governance/disclosure/board-data.pdf"
      },
      {
        id: "disc-contracts",
        title: "الإفصاح عن العلاقات التعاقدية",
        description: "العلاقات التعاقدية من الدرجة الأولى حتى الرابعة",
        icon: FileCheck,
        filePath: "/governance/disclosure/contractual-relations.pdf"
      },
      {
        id: "disc-relations",
        title: "الإفصاح عن العلاقات العائلية والتجارية",
        description: "العلاقات بين أعضاء مجلس الإدارة والإدارة التنفيذية",
        icon: Users,
        filePath: "/governance/disclosure/family-business-relations.pdf"
      },
      {
        id: "disc-committees",
        title: "الإفصاح عن اللجان الدائمة",
        description: "اللجان الدائمة في الجمعية وأعضائها واختصاصاتها",
        icon: ClipboardList,
        filePath: "/governance/disclosure/permanent-committees.pdf"
      },
      {
        id: "disc-ceo",
        title: "بيانات المدير التنفيذي",
        description: "اسم المدير التنفيذي وبيانات التواصل",
        icon: UserCheck,
        filePath: "/governance/disclosure/ceo-info.pdf"
      },
      {
        id: "disc-branches",
        title: "بيانات مديري الفروع والمكاتب",
        description: "أسماء مديري الفروع والمكاتب وبيانات التواصل",
        icon: Building2,
        filePath: "/governance/disclosure/branches-managers.pdf"
      }
    ]
  },
  {
    id: "reports",
    title: "التقارير والبيانات المالية",
    description: "الأهداف والتقارير والقوائم المالية",
    icon: BarChart,
    documents: [
      {
        id: "rep-objectives",
        title: "الأهداف الاستراتيجية والتشغيلية",
        description: "أهداف الجمعية الاستراتيجية والخطط التشغيلية",
        icon: TrendingUp,
        filePath: "/governance/reports/strategic-objectives.pdf"
      },
      {
        id: "rep-programs",
        title: "تقارير البرامج والأنشطة",
        description: "تقارير البرامج والأنشطة المنفذة",
        icon: FileBarChart,
        filePath: "/governance/reports/programs-reports.pdf"
      },
      {
        id: "rep-investments",
        title: "قرارات التملك والاستثمار",
        description: "القرارات المتعلقة بتملك الأصول والاستثمارات",
        icon: DollarSign,
        filePath: "/governance/reports/investment-decisions.pdf"
      },
      {
        id: "rep-statistics",
        title: "إحصاءات الخدمات المقدمة",
        description: "البيانات الإحصائية للخدمات المقدمة للمستفيدين",
        icon: BarChart,
        filePath: "/governance/reports/services-statistics.pdf"
      },
      {
        id: "rep-financial",
        title: "القوائم المالية السنوية",
        description: "القوائم المالية المدققة والمعتمدة",
        icon: FileBarChart,
        filePath: "/governance/reports/financial-statements.pdf"
      }
    ]
  }
];

export default function GovernancePage() {
  const handleView = (filePath: string) => {
    window.open(filePath, "_blank");
  };

  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>الحوكمة والشفافية | جمعية يعمر لعناية المساجد</title>
        <meta name="description" content="وثائق الحوكمة والشفافية - اللوائح، السياسات، الآليات، الإفصاح، والتقارير المالية" />
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
                <span className="inline-block px-4 py-2 bg-[#08704C]/10 text-[#08704C] rounded-full text-sm font-bold mb-4">
                  الحوكمة والشفافية
                </span>
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  الحوكمة والشفافية
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نلتزم بأعلى معايير الشفافية والحوكمة الرشيدة. جميع الوثائق والبيانات متاحة للاطلاع والتحميل
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-r from-[#08704C]/10 to-[#00A186]/10 rounded-3xl p-8 mb-12 border-2 border-[#08704C]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#08704C] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">التزامنا بالشفافية</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نؤمن بأهمية الشفافية والمساءلة في عملنا. جميع الوثائق أدناه متاحة للجمهور وفقاً لمعايير الحوكمة المعتمدة في المملكة العربية السعودية.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {governanceSections.map((section, sectionIndex) => (
          <section key={section.id} className="pb-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="container mx-auto relative z-10">
              <ScrollReveal delay={sectionIndex * 50}>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center shadow-xl">
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-gray-900">{section.title}</h2>
                      <p className="text-gray-600 mt-1">{section.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.documents.map((doc, docIndex) => (
                  <ScrollReveal key={doc.id} delay={(sectionIndex * 50) + (docIndex * 30)}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#08704C]/30 h-full bg-white">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-[#08704C]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#08704C] transition-colors">
                            <doc.icon className="w-6 h-6 text-[#08704C] group-hover:text-white transition-colors" />
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#08704C] transition-colors">
                            {doc.title}
                          </CardTitle>
                        </div>
                        {doc.description && (
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {doc.description}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleView(doc.filePath)}
                            className="flex-1 bg-[#08704C] hover:bg-[#00A186] text-white"
                            size="sm"
                          >
                            <Eye className="w-4 h-4 ml-2" />
                            عرض
                          </Button>
                          <Button
                            onClick={() => handleDownload(doc.filePath, `${doc.title}.pdf`)}
                            variant="outline"
                            className="flex-1 border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white"
                            size="sm"
                          >
                            <Download className="w-4 h-4 ml-2" />
                            تحميل
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20"></div>
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <Card className="border-2 border-[#08704C]/20 shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#08704C] to-[#00A186] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <MessageSquare className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">
                      هل لديك استفسار حول وثائق الحوكمة؟
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      نحن هنا للإجابة على جميع استفساراتكم حول وثائق الحوكمة والشفافية
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/#contact">
                        <Button size="lg" className="bg-gradient-to-r from-[#08704C] to-[#00A186] hover:from-[#00A186] hover:to-[#08704C] text-white shadow-xl text-lg px-10">
                          تواصل معنا
                          <ArrowLeft className="w-5 h-5 mr-2" />
                        </Button>
                      </Link>
                      <Button size="lg" variant="outline" className="border-2 border-[#08704C] text-[#08704C] hover:bg-[#08704C] hover:text-white text-lg px-10">
                        <Download className="w-5 h-5 ml-2" />
                        تحميل جميع الوثائق
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
