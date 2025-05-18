import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BarChart2, Layout, Users, Zap, Database, Star } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <div className="bg-primary-50 w-16 h-16 rounded-lg flex items-center justify-center text-primary-500 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
          المزيد
          <ArrowUpRight className="mr-2" size={16} />
        </Link>
      </Card>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout size={28} />,
      title: "التخطيط الاستراتيجي",
      description: "نساعدك على وضع خطة استراتيجية شاملة لتحقيق أهدافك بطريقة منظمة وفعالة.",
      link: "/services/1"
    },
    {
      icon: <Zap size={28} />,
      title: "خدمات الاستشارات",
      description: "نقدم استشارات متخصصة تساعدك على اتخاذ القرارات الصحيحة لتطوير عملك.",
      link: "/services/2"
    },
    {
      icon: <BarChart2 size={28} />,
      title: "تحليل البيانات",
      description: "نحلل بياناتك بطريقة احترافية لاستخراج رؤى قيمة تساعدك في اتخاذ القرارات.",
      link: "/services/3"
    },
    {
      icon: <Users size={28} />,
      title: "تطوير الموارد البشرية",
      description: "نساعدك على تطوير فريقك وبناء قدراتهم لتحقيق أعلى مستويات الأداء.",
      link: "/services/4"
    },
    {
      icon: <Database size={28} />,
      title: "إدارة المشاريع",
      description: "نوفر لك أفضل الممارسات والأدوات لإدارة مشاريعك بكفاءة عالية.",
      link: "/services/5"
    },
    {
      icon: <Star size={28} />,
      title: "التدريب المتخصص",
      description: "نقدم برامج تدريبية متخصصة تساعد فريقك على اكتساب المهارات اللازمة.",
      link: "/services/6"
    }
  ];

  return (
    <Section bgColor="bg-gray-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا المتميزة</h2>
        <p className="text-gray-600 text-lg">
          نقدم مجموعة متكاملة من الخدمات التي تساعد الشركات على النمو والتطور في سوق تنافسي
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            delay={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;