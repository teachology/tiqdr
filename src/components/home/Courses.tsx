import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Download, Users } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Courses: React.FC = () => {
  const courses = [
    { subject: 'رياضيات', lessons: 200 },
    { subject: 'أحياء', lessons: 100 },
    { subject: 'فيزياء', lessons: 100 },
    { subject: 'كيمياء', lessons: 100 }
  ];

  const features = [
    {
      title: 'دورات البث المباشر',
      icon: <Video className="w-6 h-6" />,
      description: 'دروس مباشرة تفاعلية مع المعلمين'
    },
    {
      title: 'الدورات المسجلة',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'دروس مسجلة يمكنك مشاهدتها في أي وقت'
    },
    {
      title: 'حقائب منجز المجانية',
      icon: <Download className="w-6 h-6" />,
      description: 'مواد تعليمية مجانية للتحميل'
    },
    {
      title: 'بنك المحوسب الجديد',
      icon: <Users className="w-6 h-6" />,
      description: 'مجموعة متنوعة من الأسئلة والتمارين'
    }
  ];

  return (
    <Section bgColor="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Course Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">دورات المعاصر 2025</h2>
            <p className="text-lg text-purple-100">
              إشراف د. عماد الجريري
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">المواد المتوفرة</h3>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-lg">{course.subject}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {course.lessons} درس
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">عرض خاص</div>
                <div className="text-4xl font-bold mb-2">350 ر.س</div>
                <div className="text-lg line-through text-purple-200 mb-4">500 ر.س</div>
                <p className="text-sm mb-6">لفترة محدودة فقط</p>
                <Link to="/register">
                  <Button variant="accent" size="lg" fullWidth>
                    سجل الآن
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-700 text-white rounded-xl p-6 text-center"
            >
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-purple-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">عدد الطلاب المتدربين</h3>
            <div className="text-4xl font-bold text-purple-600">451,328</div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Courses;