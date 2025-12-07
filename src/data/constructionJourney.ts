export type ConstructionStep = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: ConstructionIconKey;
};

export type ConstructionIconKey =
  | "target"
  | "mapPin"
  | "fileSignature"
  | "draftingCompass"
  | "badgeCheck"
  | "hammer"
  | "users2"
  | "plugZap"
  | "handHeart";

export const constructionSteps: ConstructionStep[] = [
  {
    id: 1,
    slug: "identifying-donor-needs",
    title: "تحديد احتياجات المتبرع",
    summary: "توضيح ما يريد المتبرع تحقيقه بالضبط.",
    description: "نبدأ بفهم أهداف المتبرع بوضوح لتجنب أي لبس منذ اللحظة الأولى.",
    icon: "target"
  },
  {
    id: 2,
    slug: "selecting-the-land",
    title: "اختيار أرض المشروع",
    summary: "توفير أرض مناسبة وموثقة وصالحة للبناء.",
    description: "نرشد المتبرع لاختيار موقع قانوني وجاهز، مع مراعاة الوصول والخدمات.",
    icon: "mapPin"
  },
  {
    id: 3,
    slug: "signing-the-agreement",
    title: "توقيع الاتفاقية مع المتبرع",
    summary: "تحديد المسؤوليات والمتطلبات والتوقعات.",
    description: "نضع خارطة طريق واضحة تضمن الشفافية وسلاسة التنفيذ دون تعارض.",
    icon: "fileSignature"
  },
  {
    id: 4,
    slug: "preparing-plans-and-designs",
    title: "إعداد المخططات والتصاميم الهندسية",
    summary: "إخراج الرسومات والمخططات التفصيلية.",
    description: "نوفر التصاميم الهندسية الكاملة لضمان الجودة والسلامة والالتزام بالمعايير.",
    icon: "draftingCompass"
  },
  {
    id: 5,
    slug: "selecting-the-consultant-contractor",
    title: "اختيار الاستشاري والمقاول",
    summary: "ترشيح الأفضل خبرة لتنفيذ المشروع.",
    description: "نُجري الترشيح والتعاقد مع جهات مؤهلة تضمن جودة التنفيذ في الوقت المحدد.",
    icon: "badgeCheck"
  },
  {
    id: 6,
    slug: "project-execution",
    title: "تنفيذ المشروع",
    summary: "بدء أعمال البناء مع إشراف مستمر.",
    description: "نُدير الجداول الزمنية ونراقب الجودة ميدانياً في كل مرحلة حتى الإنجاز.",
    icon: "hammer"
  },
  {
    id: 7,
    slug: "selecting-imam-and-muezzin",
    title: "دعم اختيار الإمام والمؤذن",
    summary: "تجهيز الكادر الذي سيخدم المسجد بعد الافتتاح.",
    description: "نساعد في اختيار وتأهيل الإمام والمؤذن لضمان جاهزية المسجد للمصلين منذ اليوم الأول.",
    icon: "users2"
  },
  {
    id: 8,
    slug: "issuing-utility-meters-and-name",
    title: "استخراج عدادات الماء والكهرباء واعتماد اسم المسجد الرسمي",
    summary: "استكمال الإجراءات الحكومية والاعتمادات.",
    description: "ننجز التراخيص والعدادات وتسجيل الاسم الرسمي ليكون المسجد موثقاً ومجهزاً بالكامل.",
    icon: "plugZap"
  },
  {
    id: 9,
    slug: "handover-to-ministry",
    title: "تسليم المشروع لفرع الوزارة",
    summary: "إغلاق كافة المتطلبات والتسليم الرسمي.",
    description: "نُكمل الفحص النهائي والمستندات ثم نسلم المسجد لفرع الوزارة بشكل رسمي.",
    icon: "handHeart"
  }
];

export const totalSteps = constructionSteps.length;

export function getStepBySlug(slug: string) {
  return constructionSteps.find((step) => step.slug === slug);
}

export function getNextStepSlug(slug: string) {
  const currentIndex = constructionSteps.findIndex((step) => step.slug === slug);
  if (currentIndex === -1) return null;
  return constructionSteps[currentIndex + 1]?.slug ?? null;
}
