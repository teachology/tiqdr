import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Briefcase, Clock } from 'lucide-react';
import Section from '../ui/Section';

interface StatItemProps {
  icon: React.ReactNode;
  count: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, count, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="bg-white w-16 h-16 rounded-full shadow-md mx-auto flex items-center justify-center text-primary-500 mb-4">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary-600">{count}</div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users size={28} />,
      count: "+2500",
      label: "طالب سعيد"
    },
    {
      icon: <Briefcase size={28} />,
      count: "+500",
      label: "مشروع مكتمل"
    },
    {
      icon: <Award size={28} />,
      count: "+50",
      label: "جائزة وتقدير"
    },
    {
      icon: <Clock size={28} />,
      count: "+10",
      label: "سنوات من الخبرة"
    }
  ];

  return (
    <Section bgColor="bg-primary-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            count={stat.count}
            label={stat.label}
            delay={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Stats;