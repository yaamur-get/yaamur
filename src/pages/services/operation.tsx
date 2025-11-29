
import Head from "next/head";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check } from "lucide-react";
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


        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-12">
                
                <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                  التشغيل
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نتولى التشغيل الكامل للمساجد وإدارتها بشكل احترافي، مع توفير برامج تعليمية ودعوية متميزة تخدم المصلين والمجتمع
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
                  <h2 className="text-4xl font-black text-gray-900">خدمات التشغيل المتكاملة</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    نقدم خدمات تشغيل شاملة تضمن عمل المسجد بكفاءة عالية وتوفير بيئة مثالية للعبادة والتعلم. فريقنا المؤهل يعمل على مدار الساعة لخدمة المصلين.
                  </p>
                  <ul className="space-y-4">
                    {services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#00A186] rounded-full flex items-center justify-center flex-shrink-0">
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
                    <Image src="/iamge/yaamur_runing.jpg" alt="مشروع بناء - جمعية يعمر" fill className="object-cover object-center" />
                  </div>

                  {/* subtle overlay and pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#08704C]/20 to-[#00A186]/20 mix-blend-multiply"></div>
                  <div className="absolute inset-0 pattern-diagonal opacity-40"></div>

                  {/* optional centered icon removed to let image show */}
                </div>
              </ScrollReveal>
            </div>

          
          </div>
        </section>

    

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
          

        

          </div>
        </section>

        <WhatsAppButton />

        <SiteFooter />
      </div>
    </>
  );
}
