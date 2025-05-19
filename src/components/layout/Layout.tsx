import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header section with cart */}
      <div className="relative">
        <Header />
        {/* HeaderCart positioned in top right corner (adjust if needed) */}

      </div>

      {/* Main content */}
      <main className="flex-grow pt-6">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
