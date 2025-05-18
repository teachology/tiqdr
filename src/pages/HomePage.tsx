import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import Courses from '../components/home/Courses';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Services />
      <Testimonials />
      <Stats />
      <CTA />
    </div>
  );
};

export default HomePage