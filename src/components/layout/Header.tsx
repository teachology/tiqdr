import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  
  // Simulated auth state - replace with your actual auth logic
  const isLoggedIn = true; // This should come from your auth context/state
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const userMenuItems = [
    { label: 'ملفي الشخصي', path: '/profile' },
    { label: 'دوراتي', path: '/my-courses' },
    { label: 'تسجيل خروج', path: '/logout' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center relative z-10">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isActive(item.path) 
                    ? 'text-primary-500' 
                    : isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 space-x-reverse mr-4">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={toggleUserMenu}
                    className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-colors ${
                      isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
                      <User size={18} />
                    </div>
                    <span>حسابي</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-500"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" size="md" className="border-2">
                      تسجيل دخول
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="primary" size="md">
                      التسجيل
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-gray-800 p-2 focus:outline-none relative z-10"
            onClick={toggleMenu}
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
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
              
              {isLoggedIn ? (
                <div className="mt-8 space-y-4">
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-3 text-gray-800 hover:text-primary-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/login">
                    <Button variant="outline" size="lg" fullWidth>
                      تسجيل دخول
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="primary" size="lg" fullWidth>
                      التسجيل
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;