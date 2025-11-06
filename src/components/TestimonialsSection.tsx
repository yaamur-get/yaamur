
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    id: 1,
    quote: "جمعية يعمر قامت بعمل رائع في صيانة مسجد حينا. العمل احترافي والخدمة ممتازة. جزاهم الله خيراً",
    name: "محمد العتيبي",
    role: "متبرع"
  },
  {
    id: 2,
    quote: "نحن فخورون بالشراكة مع جمعية يعمر. التزامهم بخدمة المساجد وجودة العمل يستحق كل تقدير",
    name: "مؤسسة البركة الخيرية",
    role: "شريك استراتيجي"
  },
  {
    id: 3,
    quote: "تجربة التطوع مع يعمر كانت رائعة. الفريق محترف ومنظم والعمل له أثر كبير في المجتمع",
    name: "فاطمة السالم",
    role: "متطوعة"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8F4ED]">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#08704C] mb-4">قالوا عنا</h2>
            <p className="text-xl text-gray-600">شهادات من شركائنا ومتبرعينا ومتطوعينا</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#00A186] bg-white h-full">
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-[#08704C]" />
                  </div>
                  
                  {/* Quote Text */}
                  <div className="relative z-10 mb-6">
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="border-t-2 border-gray-100 pt-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar Circle */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#08704C] to-[#00A186] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      
                      {/* Name and Role */}
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-[#7B4F28]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
