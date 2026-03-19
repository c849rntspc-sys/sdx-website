'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeInUp } from '@/lib/motion';

export function ProvenModel() {
  return (
    <section className="py-24 bg-surface-bg">
      <Container>
        <SectionHeading
          eyebrow="The Proven Model"
          title="ENERGY STAR proved that neutral, standardized measurement wins."
          subtitle="ENERGY STAR created a neutral measurement substrate that built trust, drove adoption, and enabled an entire ecosystem. SDX applies the same principle globally — adding owner governance, economic alignment through data dividends, and modern infrastructure for audit-ready data."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              SDX is ENERGY STAR for the world.
            </p>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
              A neutral measurement substrate creates trust, drives adoption, and enables an ecosystem on top. SDX adds owner governance and shared economics to a proven model.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
