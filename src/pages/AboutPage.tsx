import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Clock } from 'lucide-react';
import Section from '../components/ui/Section';

const AboutPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <CheckCircle size={32} className="text-primary-500" />,
      title: "الجودة",
      description: "نلتزم بتقديم أعلى مستويات الجودة في جميع خدماتنا"
    },
    {
      icon: <Target size={32} className="text-primary-500" />,
      title: "الابتكار",
      description: "نسعى دائماً لتقديم حلول مبتكرة تلبي احتياجات عملائنا"
    },
    {
      icon: <Users size={32} className="text-primary-500" />,
      title: "العمل الجماعي",
      description: "نؤمن بقوة العمل الجماعي لتحقيق أفضل النتائج"
    },
    {
      icon: <Clock size={32} className="text-primary-500" />,
      title: "الالتزام",
      description: "نلتزم بالمواعيد والوفاء بوعودنا لعملائنا"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section bgColor="bg-primary-50" className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-700">من نحن</h1>
            <p className="text-lg text-gray-700 mb-6">
              تقدر هي شركة رائدة في مجال تقديم الخدمات الاستشارية والتطويرية للشركات والمؤسسات. تأسست الشركة في عام 2015 على يد مجموعة من الخبراء والمتخصصين في مجالات متعددة بهدف تقديم خدمات متميزة تساعد العملاء على تحقيق أهدافهم.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              نحن نؤمن بأن نجاح عملائنا هو نجاحنا، ولذلك نسعى دائماً لتقديم أفضل الحلول التي تلبي احتياجاتهم وتساعدهم على مواجهة التحديات في بيئة الأعمال المتغيرة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">+2500</div>
                <p className="text-gray-600">عميل</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">+500</div>
                <p className="text-gray-600">مشروع</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">+10</div>
                <p className="text-gray-600">سنوات</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="فريق العمل"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-8 text-white">
                <h3 className="text-xl font-bold mb-2">فريق من الخبراء</h3>
                <p>نتميز بفريق عمل متميز من الخبراء والمتخصصين</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Vision and Mission */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary-50 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-secondary-700">رؤيتنا</h2>
            <p className="text-gray-700">
              أن نكون الشركة الرائدة في تقديم الخدمات الاستشارية والتطويرية على مستوى المنطقة، وأن نساهم في تطوير بيئة الأعمال من خلال تقديم حلول مبتكرة وفعالة.
            </p>
          </motion.div>
          
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-50 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-700">رسالتنا</h2>
            <p className="text-gray-700">
              تمكين عملائنا من تحقيق أهدافهم من خلال تقديم استشارات متخصصة وحلول مبتكرة تعتمد على أفضل الممارسات العالمية وتراعي خصوصية السوق المحلي.
            </p>
          </motion.div>
        </div>
      </Section>
      
      {/* Our Values */}
      <Section bgColor="bg-secondary-700 text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">قيمنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-600 p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-primary-100">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Team Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary-700">فريقنا</h2>
          <p className="text-gray-600 text-lg">
            نفتخر بفريق عملنا المتميز الذي يجمع بين الخبرة العملية والمعرفة الأكاديمية
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={`https://images.pexels.com/photos/380${769 + index}/pexels-photo-380${769 + index}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                alt={`عضو الفريق ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  {["أحمد الشمري", "سارة العتيبي", "محمد السعيد"][index]}
                </h3>
                <p className="text-primary-500 mb-4">
                  {["المدير التنفيذي", "مديرة التسويق", "مدير العمليات"][index]}
                </p>
                <p className="text-gray-600">
                  يتمتع بخبرة واسعة تمتد لأكثر من 10 سنوات في مجال الاستشارات والتطوير
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;