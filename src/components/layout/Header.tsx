import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Logo from '../ui/Logo';
import AuthButton from '../AuthButton/AuthButton';
import { useCart } from '../../context/CartContext'; // Correct path
import Checkout from '../Checkout/Checkout';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const location = useLocation();
  const { cartItems, cartTotal } = useCart(); // ✅ Correct usage

  const isLoggedIn = true; // Simulated auth state

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'من نحن', path: '/about' },
    { label: 'خدماتنا', path: '/services' },
    { label: 'الأسئلة الشائعة', path: '/faq' },
    { label: 'تواصل معنا', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    return path !== '/' && location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center relative z-10">
            <Logo />
          </Link>

          <div className="flex items-center space-x-4 space-x-reverse mr-4">
            {/* Cart Icon */}
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="relative text-purple-800 hover:text-purple-600 transition"
              aria-label="عرض السلة"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Show total amount (SAR) */}
            <span className="text-sm text-gray-800">
              {cartTotal.toFixed(2)} ريال
            </span>

            {/* Auth Button */}
            <AuthButton
              isLoggedIn={isLoggedIn}
              userName="أشرف"
              onLogin={() => (window.location.href = '/login')}
              onRegister={() => (window.location.href = '/register')}
              onLogout={() => (window.location.href = '/logout')}
              onProfileClick={() => (window.location.href = '/profile')}
              onSessionsClick={() => (window.location.href = '/my-courses')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isActive(item.path)
                    ? 'text-primary-500'
                    : isScrolled
                    ? 'text-gray-800'
                    : 'text-grey-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-gray-800 p-2 focus:outline-none relative z-10"
            onClick={toggleMenu}
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col p-8 pt-24 h-full overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xl py-4 font-medium border-b border-gray-100 ${
                    isActive(item.path) ? 'text-primary-500' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <Checkout cart={cartTotal} onClose={() => setIsCheckoutOpen(false)} />
      )}
    </header>
  );
};

export default Header;
