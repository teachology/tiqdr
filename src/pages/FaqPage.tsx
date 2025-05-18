import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems: FAQItem[] = [
    {
      question: "ما هي خدمات تقدر الاستشارية؟",
      answer: "تقدر تقدم مجموعة متكاملة من الخدمات الاستشارية التي تشمل التخطيط الاستراتيجي، تحليل البيانات، تطوير الموارد البشرية، إدارة المشاريع، التدريب المتخصص، والعديد من الخدمات الأخرى المصممة لمساعدة الشركات على تحقيق النمو والنجاح.",
      category: "general"
    },
    {
      question: "كيف يمكنني طلب خدمة من تقدر؟",
      answer: "يمكنك طلب خدمة من تقدر من خلال عدة طرق: التواصل معنا عبر نموذج الاتصال في موقعنا الإلكتروني، الاتصال بنا مباشرة على الرقم الموضح في صفحة التواصل، أو إرسال بريد إلكتروني إلى عنوان البريد الإلكتروني الخاص بنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن لتحديد احتياجاتك وتقديم العرض المناسب.",
      category: "services"
    },
    {
      question: "ما هي المدة التي تستغرقها مشاريع تقدر عادة؟",
      answer: "تختلف مدة المشاريع حسب نوع الخدمة ونطاق العمل واحتياجات العميل. بعض الخدمات مثل الاستشارات قد تستغرق أيامًا معدودة، بينما قد تستغرق مشاريع أخرى مثل التخطيط الاستراتيجي أو التحول الرقمي عدة أشهر. نحن نعمل مع كل عميل لوضع جدول زمني واقعي يتناسب مع احتياجاته ويضمن تحقيق النتائج المرجوة.",
      category: "projects"
    },
    {
      question: "هل تقدمون خدماتكم للشركات الصغيرة والمتوسطة؟",
      answer: "نعم، نحن نقدم خدماتنا لجميع أنواع الشركات بغض النظر عن حجمها، بدءًا من الشركات الناشئة والصغيرة وصولاً إلى الشركات الكبيرة والمؤسسات الحكومية. لدينا باقات وحلول مخصصة تتناسب مع احتياجات وميزانية كل فئة من العملاء.",
      category: "general"
    },
    {
      question: "ما هي منهجية العمل التي تتبعونها في مشاريعكم؟",
      answer: "نتبع منهجية عمل منظمة ومدروسة في جميع مشاريعنا، تبدأ بمرحلة التقييم لفهم الوضع الحالي واحتياجات العميل، ثم مرحلة التخطيط لوضع استراتيجية العمل، تليها مرحلة التنفيذ، وأخيرًا مرحلة المتابعة والتقييم لضمان تحقيق النتائج المرجوة. نحن نؤمن بأهمية التواصل المستمر مع العميل خلال جميع مراحل المشروع.",
      category: "projects"
    },
    {
      question: "هل تقدمون خدماتكم خارج المملكة العربية السعودية؟",
      answer: "نعم، نحن نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية ودول مجلس التعاون الخليجي، وكذلك في العديد من الدول العربية الأخرى. كما يمكننا تقديم بعض الخدمات عن بعد لعملائنا في أي مكان في العالم.",
      category: "general"
    },
    {
      question: "ما هي تكلفة خدماتكم؟",
      answer: "تختلف تكلفة خدماتنا حسب نوع الخدمة ونطاق العمل واحتياجات العميل. نحن نؤمن بتقديم قيمة عالية مقابل التكلفة، ونعمل مع كل عميل لوضع عرض سعر يتناسب مع ميزانيته ويضمن تحقيق أهدافه. يمكنك التواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك.",
      category: "financial"
    },
    {
      question: "هل تقدمون ضمانات على خدماتكم؟",
      answer: "نعم، نحن نلتزم بتقديم خدمات عالية الجودة ونضمن رضا عملائنا. في حال عدم تحقيق النتائج المتفق عليها، نقوم بإجراء التعديلات اللازمة دون تكلفة إضافية. كما أننا نوقع اتفاقية مستوى خدمة (SLA) مع عملائنا تحدد التزاماتنا ومسؤولياتنا.",
      category: "services"
    },
    {
      question: "كيف يمكنني معرفة المزيد عن فريق العمل في تقدر؟",
      answer: "يمكنك معرفة المزيد عن فريق العمل في تقدر من خلال زيارة صفحة 'من نحن' في موقعنا الإلكتروني، حيث ستجد معلومات عن خبراتنا ومؤهلاتنا. يمكنك أيضًا الاطلاع على دراسات الحالة والشهادات من عملائنا السابقين للتعرف على جودة عملنا.",
      category: "general"
    },
    {
      question: "هل تقدمون خدمات التدريب عن بعد؟",
      answer: "نعم، نحن نقدم خدمات التدريب بطرق متعددة، بما في ذلك التدريب الحضوري والتدريب عن بعد عبر الإنترنت. نستخدم أحدث التقنيات والمنصات التفاعلية لضمان تجربة تدريبية فعالة ومثمرة، سواء كان التدريب فرديًا أو لفريق كامل.",
      category: "services"
    },
    {
      question: "هل يمكنني الاطلاع على بعض الأعمال السابقة لتقدر؟",
      answer: "نعم، يمكنك الاطلاع على دراسات الحالة والمشاريع السابقة في صفحة 'أعمالنا' في موقعنا الإلكتروني. كما يمكننا تزويدك بمراجع من عملاء سابقين عند الطلب، مع مراعاة اتفاقيات السرية التي نلتزم بها مع عملائنا.",
      category: "projects"
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نحن نقبل مجموعة متنوعة من طرق الدفع لتسهيل العملية على عملائنا، بما في ذلك التحويل البنكي، بطاقات الائتمان، والدفع الإلكتروني. كما يمكننا توفير خطط دفع مرنة للمشاريع الكبيرة، حيث يتم تقسيم الدفعات على مراحل المشروع.",
      category: "financial"
    }
  ];
  
  const categories = [
    { id: 'all', label: 'جميع الأسئلة' },
    { id: 'general', label: 'أسئلة عامة' },
    { id: 'services', label: 'الخدمات' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'financial', label: 'المالية' }
  ];
  
  const filteredFaqs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section bgColor="bg-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-700">الأسئلة الشائعة</h1>
          <p className="text-lg text-gray-600 mb-8">
            نجيب على أسئلتك واستفساراتك الشائعة حول خدماتنا ومنهجية عملنا
          </p>
        </div>
      </Section>
      
      {/* FAQ Categories */}
      <Section bgColor="bg-white" className="pt-8 pb-0">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Section>
      
      {/* FAQ Items */}
      <Section bgColor="bg-white">
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div 
                className={`border border-gray-200 rounded-lg overflow-hidden ${
                  openIndex === index ? 'bg-primary-50' : 'bg-white'
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-right font-medium focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="flex-shrink-0 text-primary-500" size={24} />
                  ) : (
                    <ChevronDown className="flex-shrink-0 text-gray-500" size={24} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Contact CTA */}
      <Section bgColor="bg-secondary-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">لم تجد إجابة لسؤالك؟</h2>
          <p className="text-lg text-gray-300 mb-8">
            لا تتردد في التواصل معنا مباشرة وسنقوم بالرد على استفسارك في أقرب وقت ممكن
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              تواصل معنا
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default FaqPage;