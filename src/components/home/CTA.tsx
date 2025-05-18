import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Section from '../ui/Section';

const CTA: React.FC = () => {
  return (
    <Section bgColor="bg-gradient-to-br from-primary-600 to-secondary-700 text-white" className="overflow-hidden">
      <div className="relative">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-5"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلة نجاحك اليوم
            </h2>
            <p className="text-lg md:text-xl text-primary-100 mb-8">
              نحن جاهزون لمساعدتك في تحقيق أهدافك من خلال خبرتنا الواسعة وخدماتنا المتميزة
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  تواصل معنا الآن
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  اكتشف خدماتنا
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;