'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

export function FadeInView({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
