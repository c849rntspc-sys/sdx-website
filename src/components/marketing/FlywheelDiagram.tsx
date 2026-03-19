'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FLYWHEEL_STEPS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';

export function FlywheelDiagram() {
  return (
    <section className="bg-navy-800 py-24">
      <Container>
        <SectionHeading
          eyebrow="The Flywheel"
          title="Participation drives quality drives revenue drives dividends."
          dark
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {FLYWHEEL_STEPS.map((step, i) => (
            <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-primary-500/20 to-cyan/10 border border-white/10 rounded-2xl px-6 py-5 text-center min-w-[160px]">
                <p className="text-white font-bold text-sm">{step}</p>
              </div>
              {i < FLYWHEEL_STEPS.length - 1 && (
                <ArrowRight className="w-5 h-5 text-primary-400 shrink-0" />
              )}
            </motion.div>
          ))}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <ArrowRight className="w-5 h-5 text-primary-400 shrink-0 rotate-[135deg]" />
          </motion.div>
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-cyan text-sm mt-8 italic"
        >
          Cycle repeats &mdash; dividends attract more participants
        </motion.p>
      </Container>
    </section>
  );
}
