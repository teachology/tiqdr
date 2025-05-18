import React from 'react';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <div className="flex items-center">
      <span className={`text-2xl font-bold ${light ? 'text-white' : 'text-primary-500'}`}>
        تقدر
      </span>
      <span className={`mr-1 text-xl ${light ? 'text-accent-400' : 'text-accent-500'}`}>.</span>
    </div>
  );
};

export default Logo;