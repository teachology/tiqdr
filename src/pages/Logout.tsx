// pages/LogoutPage.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear stored authentication info
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.clear();

    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen text-lg font-semibold">
      يتم تسجيل الخروج...
    </div>
  );
}
