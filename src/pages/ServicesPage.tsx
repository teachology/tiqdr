import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BarChart2, Layout, Users, Zap, Database, Star, Globe, Shield, PieChart } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

interface ServiceProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

const servicesList: ServiceProps[] = [
  {
    id: 1,
    icon: <Layout size={32} />,
    title: "التخطيط الاستراتيجي",
    description: "نساعدك على وضع خطة استراتيجية شاملة لتحقيق أهدافك بطريقة منظمة وفعالة.",
    features: [
      "تحليل الوضع الحالي للشركة",
      "تحديد الرؤية والرسالة",
      "وضع الأهداف الاستراتيجية",
      "تطوير خطط العمل التنفيذية"
    ],
    delay: 0
  },
  {
    id: 2,
    icon: <Zap size={32} />,
    title: "خدمات الاستشارات",
    description: "نقدم استشارات متخصصة تساعدك على اتخاذ القرارات الصحيحة لتطوير عملك.",
    features: [
      "استشارات إدارية",
      "استشارات تسويقية",
      "استشارات مالية",
      "استشارات تقنية"
    ],
    delay: 1
  },
  {
    id: 3,
    icon: <BarChart2 size={32} />,
    title: "تحليل البيانات",
    description: "نحلل بياناتك بطريقة احترافية لاستخراج رؤى قيمة تساعدك في اتخاذ القرارات.",
    features: [
      "تحليل البيانات الكمية والنوعية",
      "إعداد التقارير التحليلية",
      "تطوير مؤشرات الأداء",
      "تقديم توصيات قائمة على البيانات"
    ],
    delay: 2
  },
  {
    id: 4,
    icon: <Users size={32} />,
    title: "تطوير الموارد البشرية",
    description: "نساعدك على تطوير فريقك وبناء قدراتهم لتحقيق أعلى مستويات الأداء.",
    features: [
      "تطوير الهيكل التنظيمي",
      "تقييم الكفاءات وتحديد الاحتياجات",
      "تصميم برامج التدريب والتطوير",
      "وضع نظم الحوافز والمكافآت"
    ],
    delay: 3
  },
  {
    id: 5,
    icon: <Database size={32} />,
    title: "إدارة المشاريع",
    description: "نوفر لك أفضل الممارسات والأدوات لإدارة مشاريعك بكفاءة عالية.",
    features: [
      "وضع خطط المشاريع",
      "إدارة الموارد والميزانية",
      "متابعة التنفيذ وضبط الجودة",
      "إدارة المخاطر وحل المشكلات"
    ],
    delay: 4
  },
  {
    id: 6,
    icon: <Star size={32} />,
    title: "التدريب المتخصص",
    description: "نقدم برامج تدريبية متخصصة تساعد فريقك على اكتساب المهارات اللازمة.",
    features: [
      "برامج تدريبية في الإدارة",
      "برامج تدريبية في القيادة",
      "برامج تدريبية في التسويق",
      "برامج تدريبية في المهارات الشخصية"
    ],
    delay: 5
  },
  {
    id: 7,
    icon: <Globe size={32} />,
    title: "التحول الرقمي",
    description: "نساعدك على تحويل أعمالك رقمياً لمواكبة التطورات التقنية وتحسين الكفاءة.",
    features: [
      "تقييم الوضع الرقمي الحالي",
      "وضع استراتيجية التحول الرقمي",
      "اختيار الحلول التقنية المناسبة",
      "تدريب الفريق على استخدام التقنيات الجديدة"
    ],
    delay: 6
  },
  {
    id: 8,
    icon: <Shield size={32} />,
    title: "حوكمة الشركات",
    description: "نساعدك على تطبيق مبادئ الحوكمة لضمان الشفافية والنزاهة في إدارة الشركة.",
    features: [
      "تقييم نظام الحوكمة الحالي",
      "تطوير هيكل حوكمة متكامل",
      "وضع السياسات والإجراءات اللازمة",
      "بناء نظام للرقابة والمتابعة"
    ],
    delay: 7
  },
  {
    id: 9,
    icon: <PieChart size={32} />,
    title: "الاستثمار والتمويل",
    description: "نقدم الاستشارات في مجال الاستثمار والتمويل لمساعدتك على اتخاذ القرارات المالية الصحيحة.",
    features: [
      "تقييم الفرص الاستثمارية",
      "وضع استراتيجيات التمويل",
      "إدارة المحافظ الاستثمارية",
      "تقييم الأداء المالي وتحسينه"
    ],
    delay: 8
  }
];

const ServiceItem: React.FC<ServiceProps> = ({ id, icon, title, description, features, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col">
        <div className="bg-primary-50 w-16 h-16 rounded-lg flex items-center justify-center text-primary-500 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="text-gray-600 mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="ml-2 text-primary-500">•</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Link 
          to={`/services/${id}`} 
          className="mt-auto inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
        >
          المزيد من التفاصيل
          <ArrowUpRight className="mr-2" size={16} />
        </Link>
      </Card>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section bgColor="bg-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-700">خدماتنا</h1>
          <p className="text-lg text-gray-600 mb-8">
            نقدم مجموعة متكاملة من الخدمات المتميزة التي تساعدك على تحقيق أهدافك وتطوير أعمالك
          </p>
        </div>
      </Section>
      
      {/* Services List */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <ServiceItem
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={service.delay}
            />
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section bgColor="bg-secondary-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">هل أنت مستعد لتحقيق أهدافك؟</h2>
          <p className="text-lg text-gray-300 mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية وابدأ رحلة النجاح مع فريق من الخبراء
          </p>
          <Link to="/contact" className="btn btn-primary text-lg px-8 py-3">
            تواصل معنا الآن
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;