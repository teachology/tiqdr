import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, UserCircle, Calendar } from 'lucide-react';

const AuthButton: React.FC<{ isLoggedIn?: boolean; userName?: string }> = ({
  isLoggedIn = false,
  userName = 'حسابي',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeAndRedirect = (url: string) => {
    setIsOpen(false);
    window.location.href = url;
  };

  return (
    <div className="relative" ref={dropdownRef} dir="rtl">
      <button
        className="flex items-center justify-center gap-2 bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md"
        onClick={isLoggedIn ? toggleDropdown : () => window.location.href = '/login'}
        aria-expanded={isOpen}
      >
        <User className="w-5 h-5" />
        <span className="text-sm font-medium">
          {isLoggedIn ? userName : 'تسجيل الدخول'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out origin-top-right text-right">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => closeAndRedirect('/profile')}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <UserCircle className="w-4 h-4 ml-2" />
                <span>ملفي الشخصي</span>
              </button>
              <button
                onClick={() => closeAndRedirect('/my-courses')}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Calendar className="w-4 h-4 ml-2" />
                <span>دوراتي</span>
              </button>
              <button
                onClick={() => closeAndRedirect('/logout')}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="w-4 h-4 ml-2" />
                <span>تسجيل الخروج</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => closeAndRedirect('/login')}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <UserCircle className="w-4 h-4 ml-2" />
                <span>تسجيل الدخول</span>
              </button>
              <button
                onClick={() => closeAndRedirect('/register')}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <UserCircle className="w-4 h-4 ml-2" />
                <span>إنشاء حساب</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthButton;
