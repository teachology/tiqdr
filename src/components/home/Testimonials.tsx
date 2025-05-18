import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import Section from '../ui/Section';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "لقد ساعدتنا تقدر في تطوير استراتيجيتنا التسويقية مما أدى إلى زيادة مبيعاتنا بنسبة 40% في الربع الأول فقط.",
      author: "أحمد الشمري",
      position: "المدير التنفيذي",
      company: "شركة النجاح للتقنية",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "تعاملنا مع فريق تقدر كان رائعاً، فهم يتميزون بالاحترافية العالية والمعرفة الواسعة في مجال التخطيط الاستراتيجي.",
      author: "نورة السعيد",
      position: "مديرة التسويق",
      company: "مجموعة الإبداع",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "الخدمات التي تقدمها تقدر متميزة وتعكس فهماً عميقاً لاحتياجات السوق، وقد ساعدنا ذلك على تحقيق نقلة نوعية في أعمالنا.",
      author: "محمد العتيبي",
      position: "مدير العمليات",
      company: "شركة الريادة",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <Section bgColor="bg-white">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
        <p className="text-gray-600 text-lg">
          نفتخر بثقة عملائنا وشهاداتهم التي تعكس جودة خدماتنا
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -top-12 right-0 text-primary-200">
          <Quote size={120} />
        </div>
        
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {testimonials[currentIndex].content}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 sm:mb-0 sm:ml-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-right">
                <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
              }`}
              aria-label={`عرض الشهادة ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-12 hidden lg:block">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-500 transition-colors"
            aria-label="السابق"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-12 hidden lg:block">
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary-500 transition-colors"
            aria-label="التالي"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;