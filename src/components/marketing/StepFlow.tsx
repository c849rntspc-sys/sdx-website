'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/ui/Icon';
import { DIVIDEND_STEPS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';

export function StepFlow() {
  return (
    <section className="py-24 bg-surface-bg">
      <Container>
        <SectionHeading
          eyebrow="The Data Dividend"
          title="Your data creates value. You should share in it."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {DIVIDEND_STEPS.map((step, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative">
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary-400">{step.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary-500/15 flex items-center justify-center">
                    <Icon name={step.icon} className="w-5 h-5 text-primary-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
              {i < DIVIDEND_STEPS.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary-400" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 max-w-xl mx-auto text-center bg-primary-500/10 border border-primary-500/20 rounded-2xl p-6"
        >
          <p className="text-lg font-bold text-primary-400">Cost Center &rarr; Profit Center</p>
          <p className="text-sm text-text-secondary mt-2">
            Dividend formula is objective and auditable &mdash; weighted by eligible buildings, floor area, completeness, and data freshness.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
