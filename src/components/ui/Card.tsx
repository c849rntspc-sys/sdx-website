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
    ? 'bg-[#1A1A1A]/70 backdrop-blur-xl border border-[#2A2A2A]'
    : 'bg-[#111111] border border-[#2A2A2A]';

  const hoverClass = hover
    ? dark
      ? 'hover:bg-white/8 hover:border-white/20'
      : 'hover:border-[#3D3D3D] hover:shadow-[0_0_20px_rgba(243,159,65,0.08)] hover:-translate-y-0.5'
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
