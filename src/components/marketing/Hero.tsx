'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { fadeInUp, staggerContainer } from '@/lib/motion';

type Props = {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  pillars?: string[];
  children?: ReactNode;
  compact?: boolean;
};

export function Hero({ eyebrow, title, subtitle, pillars, children, compact = false }: Props) {
  return (
    <section className="relative bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/8 rounded-full blur-3xl" />

      <Container className={`relative ${compact ? 'pt-32 pb-16' : 'pt-32 pb-24 md:pt-40 md:pb-32'}`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className={`${compact ? 'max-w-3xl' : 'max-w-4xl'} mx-auto text-center`}
        >
          {eyebrow && (
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-4"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={fadeInUp}
            className={`${
              compact ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl lg:text-7xl'
            } font-bold tracking-tight text-white`}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
          {pillars && (
            <motion.div variants={fadeInUp} className="mt-6 flex items-center justify-center gap-3 text-sm text-cyan">
              {pillars.map((p, i) => (
                <span key={i} className="flex items-center gap-3">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-cyan/50" />}
                  <span className="font-medium">{p}</span>
                </span>
              ))}
            </motion.div>
          )}
          {children && (
            <motion.div variants={fadeInUp} className="mt-10">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
