import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-secondary-800 text-white min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-right"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              نساعدك على <span className="text-primary-400">تحقيق أهدافك</span> بطرق مبتكرة
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl lg:mr-0 mx-auto">
              نقدم لك مجموعة متكاملة من الخدمات المتميزة التي تساعدك على النمو وتحقيق النجاح في مشروعك
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
              <Button variant="primary" size="lg">
                ابدأ الآن مجاناً
              </Button>
              <Link to="/services" className="inline-flex items-center text-primary-300 hover:text-primary-400 transition-colors font-medium text-lg">
                اكتشف خدماتنا
                <ArrowLeft className="mr-2" size={20} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="فريق العمل" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-800 to-transparent opacity-30"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-secondary-800 rounded-lg p-4 shadow-lg">
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold text-2xl text-primary-500">+2500</p>
                  <p className="text-gray-600">عميل سعيد</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;