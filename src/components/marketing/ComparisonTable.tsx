'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { COMPARISON } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { X, Check } from 'lucide-react';

export function ComparisonTable() {
  return (
    <section className="py-24 bg-surface-bg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Extraction */}
          <motion.div variants={fadeInUp} className="bg-[#111111] border border-[#2A2A2A] rounded-2xl overflow-hidden">
            <div className="bg-[#FF433D]/10 border-b border-[#FF433D]/20 px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#FF433D] mb-1">{COMPARISON.extraction.subtitle}</p>
              <h3 className="text-xl font-bold text-text-primary">{COMPARISON.extraction.title}</h3>
            </div>
            <ul className="p-6 space-y-4">
              {COMPARISON.extraction.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Shared Value */}
          <motion.div variants={fadeInUp} className="bg-[#111111] border-2 border-primary-500/30 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(243,159,65,0.08)]">
            <div className="bg-primary-500/10 border-b border-primary-500/20 px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 mb-1">{COMPARISON.shared.subtitle}</p>
              <h3 className="text-xl font-bold text-text-primary">{COMPARISON.shared.title}</h3>
            </div>
            <ul className="p-6 space-y-4">
              {COMPARISON.shared.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
