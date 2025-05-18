import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo light />
            </Link>
            <p className="text-gray-300 mb-6">
              نحن نقدم أفضل الخدمات لعملائنا الكرام ونساعدهم على تحقيق أهدافهم بأفضل الطرق والوسائل الممكنة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-300 transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-300 transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-300 transition-colors">خدماتنا</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary-300 transition-colors">الأسئلة الشائعة</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-300 transition-colors">تواصل معنا</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">الخدمات</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/1" className="text-gray-300 hover:text-primary-300 transition-colors">خدمة التخطيط</Link>
              </li>
              <li>
                <Link to="/services/2" className="text-gray-300 hover:text-primary-300 transition-colors">خدمة الاستشارات</Link>
              </li>
              <li>
                <Link to="/services/3" className="text-gray-300 hover:text-primary-300 transition-colors">خدمة التطوير</Link>
              </li>
              <li>
                <Link to="/services/4" className="text-gray-300 hover:text-primary-300 transition-colors">خدمة التحليل</Link>
              </li>
              <li>
                <Link to="/services/5" className="text-gray-300 hover:text-primary-300 transition-colors">خدمة التدريب</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="ml-3 mt-1 text-primary-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">شارع الملك فهد، الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center">
                <Phone className="ml-3 text-primary-400 flex-shrink-0" size={18} />
                <a href="tel:+966123456789" className="text-gray-300 hover:text-primary-300 transition-colors">+966 12 345 6789</a>
              </li>
              <li className="flex items-center">
                <Mail className="ml-3 text-primary-400 flex-shrink-0" size={18} />
                <a href="mailto:info@tiqdr.com" className="text-gray-300 hover:text-primary-300 transition-colors">info@tiqdr.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center sm:flex sm:justify-between sm:text-right">
          <p className="text-gray-400">© {currentYear} تقدر. جميع الحقوق محفوظة</p>
          <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end space-x-6 space-x-reverse">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-300 transition-colors">سياسة الخصوصية</Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-300 transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;