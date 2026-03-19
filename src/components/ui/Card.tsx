'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  dark?: boolean;
};

export function Card({ children, className = '', hover = true, glass = false, dark = false }: Props) {
  const base = dark
    ? 'bg-white/5 border border-white/10 backdrop-blur-sm'
    : glass
    ? 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm'
    : 'bg-white border border-gray-100 shadow-sm';

  const hoverClass = hover
    ? dark
      ? 'hover:bg-white/8 hover:border-white/20'
      : 'hover:shadow-md hover:-translate-y-0.5'
    : '';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeInUp}
      className={`rounded-2xl p-7 transition-all duration-200 ${base} ${hoverClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
