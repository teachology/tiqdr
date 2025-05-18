import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  fullWidth = false,
  bgColor = 'bg-white',
}) => {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${bgColor} ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="container-custom">{children}</div>
      )}
    </section>
  );
};

export default Section;