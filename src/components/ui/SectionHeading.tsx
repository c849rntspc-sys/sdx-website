'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      className={`max-w-3xl ${alignClass} mb-16`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-gray-400' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
