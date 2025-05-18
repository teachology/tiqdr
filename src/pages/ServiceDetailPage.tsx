import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, BarChart2, Layout, Users, Zap, Database, Star, Globe, Shield, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

interface ServiceDetail {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDescription: string[];
  features: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  image: string;
}

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const serviceId = parseInt(id || '1');
  
  const servicesData: ServiceDetail[] = [
    {
      id: 1,
      icon: <Layout size={36} />,
      title: "التخطيط الاستراتيجي",
      description: "نساعدك على وضع خطة استراتيجية شاملة لتحقيق أهدافك بطريقة منظمة وفعالة.",
      fullDescription: [
        "التخطيط الاستراتيجي هو عملية منهجية لتحديد أهداف المؤسسة على المدى الطويل وتطوير خطط العمل اللازمة لتحقيق تلك الأهداف. من خلال خدمة التخطيط الاستراتيجي، نساعدك على تحديد رؤية واضحة لمستقبل مؤسستك ووضع الخطط اللازمة لتحقيق هذه الرؤية.",
        "فريقنا من الخبراء يعمل معك جنباً إلى جنب لفهم احتياجات مؤسستك والتحديات التي تواجهها، ثم يقوم بتطوير استراتيجية شاملة تأخذ في الاعتبار جميع العوامل الداخلية والخارجية التي تؤثر على أداء المؤسسة."
      ],
      features: [
        "تحليل الوضع الحالي للشركة",
        "تحديد الرؤية والرسالة والقيم",
        "تحليل نقاط القوة والضعف والفرص والتهديدات (SWOT)",
        "وضع الأهداف الاستراتيجية",
        "تطوير خطط العمل التنفيذية",
        "تحديد مؤشرات الأداء الرئيسية",
        "تطوير آليات المتابعة والتقييم"
      ],
      benefits: [
        "توجيه واضح للمؤسسة نحو أهدافها",
        "استخدام أمثل للموارد المتاحة",
        "تحسين القدرة على اتخاذ القرارات",
        "زيادة الكفاءة التشغيلية",
        "تحسين التنسيق بين الإدارات المختلفة",
        "تعزيز الميزة التنافسية"
      ],
      process: [
        {
          title: "التحليل",
          description: "تحليل الوضع الحالي للمؤسسة وتقييم العوامل الداخلية والخارجية"
        },
        {
          title: "التخطيط",
          description: "وضع الرؤية والرسالة والأهداف الاستراتيجية"
        },
        {
          title: "التنفيذ",
          description: "تطوير خطط العمل وتحديد المسؤوليات والجداول الزمنية"
        },
        {
          title: "المتابعة",
          description: "تطوير آليات لمتابعة تنفيذ الخطة وتقييم النتائج"
        }
      ],
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      icon: <Zap size={36} />,
      title: "خدمات الاستشارات",
      description: "نقدم استشارات متخصصة تساعدك على اتخاذ القرارات الصحيحة لتطوير عملك.",
      fullDescription: [
        "خدمات الاستشارات التي نقدمها تغطي مجموعة واسعة من التخصصات لمساعدة المؤسسات على مواجهة التحديات وتحسين الأداء. نحن نعمل كشريك استراتيجي لعملائنا، نقدم لهم الحلول المبتكرة والتوجيه اللازم لاتخاذ القرارات الصحيحة.",
        "يتمتع فريق الاستشاريين لدينا بخبرة واسعة في مختلف القطاعات والمجالات، مما يمكننا من تقديم استشارات متخصصة تلبي الاحتياجات المحددة لكل عميل."
      ],
      features: [
        "استشارات إدارية شاملة",
        "استشارات تسويقية واستراتيجيات النمو",
        "استشارات مالية وتحسين الأداء المالي",
        "استشارات تقنية وتطوير البنية التحتية",
        "استشارات الموارد البشرية وتطوير المواهب",
        "استشارات إدارة المخاطر والأزمات",
        "استشارات التحول الرقمي"
      ],
      benefits: [
        "تحسين عملية اتخاذ القرارات",
        "الاستفادة من الخبرات المتخصصة",
        "تحديد وحل المشكلات بفعالية",
        "تطوير استراتيجيات قابلة للتنفيذ",
        "تحسين الكفاءة التشغيلية",
        "تعزيز الميزة التنافسية"
      ],
      process: [
        {
          title: "التشخيص",
          description: "تحليل الوضع الحالي وتحديد التحديات والفرص"
        },
        {
          title: "التطوير",
          description: "تطوير الحلول والتوصيات المناسبة"
        },
        {
          title: "التنفيذ",
          description: "دعم العميل في تنفيذ التوصيات والحلول"
        },
        {
          title: "المتابعة",
          description: "متابعة النتائج وتقديم الدعم المستمر"
        }
      ],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      icon: <BarChart2 size={36} />,
      title: "تحليل البيانات",
      description: "نحلل بياناتك بطريقة احترافية لاستخراج رؤى قيمة تساعدك في اتخاذ القرارات.",
      fullDescription: [
        "في عصر البيانات الضخمة، أصبح تحليل البيانات أمراً ضرورياً لاتخاذ قرارات مبنية على الحقائق. من خلال خدمة تحليل البيانات، نساعدك على جمع وتنظيم وتحليل البيانات لاستخراج رؤى قيمة تساعدك في اتخاذ القرارات الاستراتيجية.",
        "فريقنا من المحللين يستخدم أحدث الأدوات والتقنيات لتحويل البيانات المعقدة إلى معلومات مفيدة وسهلة الفهم، مما يساعدك على اكتشاف الاتجاهات وتحديد الفرص وتحسين العمليات."
      ],
      features: [
        "جمع وتنظيف وتنظيم البيانات",
        "تحليل البيانات الكمية والنوعية",
        "إعداد التقارير التحليلية والرسوم البيانية",
        "تطوير لوحات البيانات التفاعلية",
        "تطوير مؤشرات الأداء الرئيسية",
        "تحليل اتجاهات السوق والعملاء",
        "تحليل البيانات التنبؤية"
      ],
      benefits: [
        "اتخاذ قرارات مبنية على البيانات والحقائق",
        "فهم أفضل لاحتياجات العملاء وسلوكهم",
        "تحديد الفرص والتهديدات في السوق",
        "تحسين الكفاءة التشغيلية وخفض التكاليف",
        "قياس فعالية الاستراتيجيات والمبادرات",
        "تطوير استراتيجيات تسويقية مستهدفة"
      ],
      process: [
        {
          title: "الجمع",
          description: "جمع البيانات من مختلف المصادر وتنظيفها وتنظيمها"
        },
        {
          title: "التحليل",
          description: "تحليل البيانات باستخدام الأدوات والتقنيات المناسبة"
        },
        {
          title: "التفسير",
          description: "تفسير نتائج التحليل واستخراج الرؤى والتوصيات"
        },
        {
          title: "التقديم",
          description: "تقديم النتائج والتوصيات بطريقة سهلة الفهم"
        }
      ],
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      icon: <Users size={36} />,
      title: "تطوير الموارد البشرية",
      description: "نساعدك على تطوير فريقك وبناء قدراتهم لتحقيق أعلى مستويات الأداء.",
      fullDescription: [
        "الموارد البشرية هي أهم أصول أي مؤسسة، ومن خلال خدمة تطوير الموارد البشرية، نساعدك على بناء وتطوير فريق عمل متميز يساهم في تحقيق أهداف المؤسسة. نحن نقدم مجموعة متكاملة من الخدمات التي تغطي جميع جوانب إدارة وتطوير الموارد البشرية.",
        "فريقنا من الخبراء يعمل معك لفهم احتياجات مؤسستك وتصميم حلول مخصصة تساعدك على استقطاب المواهب والاحتفاظ بها وتطويرها، مما يسهم في تحسين الأداء العام للمؤسسة."
      ],
      features: [
        "تطوير الهيكل التنظيمي وتوصيف الوظائف",
        "تقييم الكفاءات وتحديد الاحتياجات التدريبية",
        "تصميم وتنفيذ برامج التدريب والتطوير",
        "تطوير نظم تقييم الأداء",
        "وضع نظم الحوافز والمكافآت",
        "تطوير استراتيجيات إدارة المواهب",
        "بناء ثقافة مؤسسية إيجابية"
      ],
      benefits: [
        "تحسين إنتاجية الموظفين وأدائهم",
        "زيادة رضا الموظفين وولائهم",
        "استقطاب والاحتفاظ بأفضل المواهب",
        "تطوير قيادات مستقبلية",
        "تحسين التواصل والتعاون بين الفرق",
        "بناء بيئة عمل إيجابية ومحفزة"
      ],
      process: [
        {
          title: "التقييم",
          description: "تقييم الوضع الحالي للموارد البشرية وتحديد الاحتياجات"
        },
        {
          title: "التصميم",
          description: "تصميم البرامج والنظم المناسبة لتلبية الاحتياجات"
        },
        {
          title: "التنفيذ",
          description: "تنفيذ البرامج والنظم بالتعاون مع فريق العمل"
        },
        {
          title: "المتابعة",
          description: "متابعة النتائج وتقييم الأثر وإجراء التعديلات اللازمة"
        }
      ],
      image: "https://images.pexels.com/photos/3184401/pexels-photo-3184401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      icon: <Database size={36} />,
      title: "إدارة المشاريع",
      description: "نوفر لك أفضل الممارسات والأدوات لإدارة مشاريعك بكفاءة عالية.",
      fullDescription: [
        "إدارة المشاريع الفعالة هي مفتاح نجاح أي مشروع، سواء كان صغيراً أو كبيراً. من خلال خدمة إدارة المشاريع، نساعدك على تخطيط وتنفيذ ومتابعة مشاريعك بطريقة منهجية ومنظمة تضمن تحقيق الأهداف ضمن الوقت والميزانية المحددة.",
        "فريقنا من مديري المشاريع المعتمدين يتبع أفضل الممارسات العالمية في إدارة المشاريع ويستخدم أحدث الأدوات والتقنيات لضمان نجاح مشاريعك."
      ],
      features: [
        "وضع خطط المشاريع الشاملة",
        "إدارة الموارد والميزانية",
        "تحديد وإدارة المخاطر",
        "إدارة التغيير والتواصل",
        "متابعة التنفيذ وضبط الجودة",
        "إعداد تقارير الأداء الدورية",
        "إدارة أصحاب المصلحة"
      ],
      benefits: [
        "ضمان إنجاز المشاريع في الوقت المحدد",
        "الالتزام بالميزانية المخصصة",
        "تحسين جودة المخرجات",
        "تقليل المخاطر وحل المشكلات بفعالية",
        "تحسين التواصل والتنسيق بين فرق العمل",
        "زيادة رضا أصحاب المصلحة"
      ],
      process: [
        {
          title: "التخطيط",
          description: "وضع خطة المشروع وتحديد النطاق والأهداف والجدول الزمني"
        },
        {
          title: "التنفيذ",
          description: "إدارة الموارد وتنفيذ أنشطة المشروع وفق الخطة"
        },
        {
          title: "المتابعة",
          description: "متابعة التقدم وإعداد التقارير ومعالجة الانحرافات"
        },
        {
          title: "الإغلاق",
          description: "توثيق الدروس المستفادة وإعداد التقرير النهائي"
        }
      ],
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      icon: <Star size={36} />,
      title: "التدريب المتخصص",
      description: "نقدم برامج تدريبية متخصصة تساعد فريقك على اكتساب المهارات اللازمة.",
      fullDescription: [
        "التدريب المستمر هو أساس التطوير والنمو، سواء على مستوى الأفراد أو المؤسسات. من خلال خدمة التدريب المتخصص، نقدم مجموعة متنوعة من البرامج التدريبية المصممة خصيصاً لتلبية احتياجات عملائنا وتطوير مهارات فرق عملهم.",
        "مدربونا المعتمدون يستخدمون أساليب تدريبية متنوعة وتفاعلية لضمان فعالية التدريب ونقل المعرفة والمهارات بطريقة عملية قابلة للتطبيق."
      ],
      features: [
        "برامج تدريبية في الإدارة والقيادة",
        "برامج تدريبية في مهارات التواصل والعرض",
        "برامج تدريبية في التسويق والمبيعات",
        "برامج تدريبية في إدارة المشاريع",
        "برامج تدريبية في المهارات التقنية",
        "برامج تدريبية في المهارات الشخصية",
        "برامج تدريبية مخصصة حسب احتياجات العميل"
      ],
      benefits: [
        "تطوير مهارات وقدرات الموظفين",
        "تحسين الأداء والإنتاجية",
        "زيادة الرضا الوظيفي والولاء",
        "تحفيز الإبداع والابتكار",
        "تعزيز روح الفريق والتعاون",
        "تطوير قيادات مستقبلية"
      ],
      process: [
        {
          title: "التحليل",
          description: "تحليل الاحتياجات التدريبية وتحديد الأهداف"
        },
        {
          title: "التصميم",
          description: "تصميم البرنامج التدريبي وإعداد المواد التدريبية"
        },
        {
          title: "التنفيذ",
          description: "تنفيذ البرنامج التدريبي باستخدام أساليب تفاعلية"
        },
        {
          title: "التقييم",
          description: "تقييم فعالية البرنامج وقياس أثره على الأداء"
        }
      ],
      image: "https://images.pexels.com/photos/7176326/pexels-photo-7176326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 7,
      icon: <Globe size={36} />,
      title: "التحول الرقمي",
      description: "نساعدك على تحويل أعمالك رقمياً لمواكبة التطورات التقنية وتحسين الكفاءة.",
      fullDescription: [
        "التحول الرقمي أصبح ضرورة في عصرنا الحالي، حيث يساعد المؤسسات على مواكبة التطورات التقنية وتحسين الكفاءة والتنافسية. من خلال خدمة التحول الرقمي، نساعدك على تحويل أعمالك رقمياً بطريقة منهجية ومدروسة.",
        "فريقنا من الخبراء التقنيين والاستراتيجيين يعمل معك لفهم متطلبات عملك وتطوير استراتيجية تحول رقمي شاملة تلبي احتياجاتك وتحقق أهدافك."
      ],
      features: [
        "تقييم الجاهزية الرقمية للمؤسسة",
        "وضع استراتيجية التحول الرقمي",
        "تحديد وتطبيق الحلول التقنية المناسبة",
        "أتمتة العمليات وتحسين الكفاءة",
        "تطوير القنوات الرقمية للتواصل مع العملاء",
        "تدريب الموظفين على استخدام التقنيات الجديدة",
        "إدارة التغيير وضمان التبني الناجح"
      ],
      benefits: [
        "تحسين الكفاءة التشغيلية وخفض التكاليف",
        "تحسين تجربة العملاء وزيادة رضاهم",
        "فتح قنوات جديدة للنمو والتوسع",
        "اتخاذ قرارات أفضل بناءً على البيانات",
        "زيادة المرونة والقدرة على التكيف",
        "تعزيز الميزة التنافسية"
      ],
      process: [
        {
          title: "التقييم",
          description: "تقييم الوضع الحالي وتحديد فرص التحول الرقمي"
        },
        {
          title: "التخطيط",
          description: "وضع استراتيجية التحول الرقمي وخارطة الطريق"
        },
        {
          title: "التنفيذ",
          description: "تطبيق الحلول التقنية وأتمتة العمليات"
        },
        {
          title: "المتابعة",
          description: "قياس النتائج والتحسين المستمر"
        }
      ],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 8,
      icon: <Shield size={36} />,
      title: "حوكمة الشركات",
      description: "نساعدك على تطبيق مبادئ الحوكمة لضمان الشفافية والنزاهة في إدارة الشركة.",
      fullDescription: [
        "حوكمة الشركات هي مجموعة من القواعد والممارسات التي تضمن إدارة الشركة بطريقة شفافة ونزيهة وفعالة. من خلال خدمة حوكمة الشركات، نساعدك على تطبيق أفضل ممارسات الحوكمة لتحسين أداء الشركة وتعزيز ثقة المساهمين وأصحاب المصلحة.",
        "خبراؤنا في مجال الحوكمة يقدمون لك الدعم اللازم لتطوير هيكل حوكمة قوي يتوافق مع المتطلبات التنظيمية والمعايير الدولية، مما يسهم في تحقيق الاستدامة والنمو على المدى الطويل."
      ],
      features: [
        "تقييم نظام الحوكمة الحالي",
        "تطوير هيكل حوكمة متكامل",
        "وضع سياسات وإجراءات الحوكمة",
        "تطوير ميثاق مجلس الإدارة واللجان",
        "تطوير نظم الرقابة الداخلية",
        "إعداد تقارير الحوكمة",
        "تدريب مجلس الإدارة والإدارة التنفيذية"
      ],
      benefits: [
        "تعزيز الشفافية والنزاهة",
        "تحسين عملية اتخاذ القرارات",
        "تقليل المخاطر وحماية حقوق المساهمين",
        "تحسين الأداء المالي والتشغيلي",
        "زيادة ثقة المستثمرين وأصحاب المصلحة",
        "الالتزام بالمتطلبات التنظيمية"
      ],
      process: [
        {
          title: "التقييم",
          description: "تقييم نظام الحوكمة الحالي وتحديد الفجوات"
        },
        {
          title: "التصميم",
          description: "تصميم هيكل الحوكمة ووضع السياسات والإجراءات"
        },
        {
          title: "التنفيذ",
          description: "تطبيق نظام الحوكمة وتدريب الأطراف المعنية"
        },
        {
          title: "المتابعة",
          description: "متابعة تطبيق الحوكمة وإعداد التقارير"
        }
      ],
      image: "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 9,
      icon: <PieChart size={36} />,
      title: "الاستثمار والتمويل",
      description: "نقدم الاستشارات في مجال الاستثمار والتمويل لمساعدتك على اتخاذ القرارات المالية الصحيحة.",
      fullDescription: [
        "الاستثمار والتمويل هما محركان أساسيان لنمو أي مؤسسة. من خلال خدمة الاستثمار والتمويل، نقدم لك الاستشارات والحلول المالية التي تساعدك على اتخاذ القرارات الاستثمارية الصحيحة وتأمين التمويل اللازم لتحقيق أهدافك.",
        "فريقنا من الخبراء الماليين يعمل معك لفهم احتياجاتك المالية وتطوير استراتيجيات استثمار وتمويل تتناسب مع وضعك الحالي وأهدافك المستقبلية."
      ],
      features: [
        "تقييم الفرص الاستثمارية",
        "وضع استراتيجيات الاستثمار",
        "إدارة المحافظ الاستثمارية",
        "تقييم خيارات التمويل",
        "إعداد دراسات الجدوى",
        "هيكلة التمويل وإدارة الديون",
        "التخطيط المالي طويل المدى"
      ],
      benefits: [
        "اتخاذ قرارات استثمارية مدروسة",
        "تنويع المحفظة الاستثمارية وتقليل المخاطر",
        "تحسين العائد على الاستثمار",
        "الحصول على التمويل بشروط أفضل",
        "تحسين الهيكل المالي للشركة",
        "تحقيق الاستدامة المالية على المدى الطويل"
      ],
      process: [
        {
          title: "التحليل",
          description: "تحليل الوضع المالي الحالي وتحديد الاحتياجات"
        },
        {
          title: "التخطيط",
          description: "وضع استراتيجيات الاستثمار والتمويل"
        },
        {
          title: "التنفيذ",
          description: "تنفيذ الاستراتيجيات ومتابعة الأداء"
        },
        {
          title: "المراجعة",
          description: "مراجعة النتائج وتعديل الاستراتيجيات عند الحاجة"
        }
      ],
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section bgColor="bg-primary-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="order-2 lg:order-1">
            <div className="flex items-center mb-6">
              <Link to="/services" className="text-primary-500 hover:text-primary-600 transition-colors flex items-center">
                <ArrowLeft className="ml-2" size={20} />
                العودة إلى الخدمات
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-700">{service.title}</h1>
            
            <div className="mb-8">
              {service.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <Link to="/contact" className="inline-block">
              <Button variant="primary" size="lg">
                طلب هذه الخدمة
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-xl overflow-hidden shadow-lg h-80 lg:h-96">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Features Section */}
      <Section bgColor="bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-secondary-700">مكونات الخدمة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-50 p-6 rounded-lg flex items-start h-full">
                <div className="bg-white rounded-full p-2 ml-4 text-primary-500 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section bgColor="bg-secondary-700 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">الفوائد والمزايا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary-600 p-6 rounded-lg flex items-start h-full">
                <div className="bg-primary-500 rounded-full p-2 ml-4 text-white mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Process Section */}
      <Section bgColor="bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-secondary-700">منهجية العمل</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full flex flex-col items-center">
                <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-700">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section bgColor="bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">هل أنت مستعد لبدء رحلة النجاح؟</h2>
          <p className="text-lg text-primary-100 mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية حول كيفية الاستفادة من خدمة {service.title}
          </p>
          <Link to="/contact" className="btn btn-accent text-lg px-8 py-3">
            تواصل معنا الآن
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetailPage;