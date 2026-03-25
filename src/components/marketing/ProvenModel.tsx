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
          eyebrow="The Precedent"
          title="This model already exists in the United States."
          subtitle="ENERGY STAR Portfolio Manager benchmarks 25% of U.S. commercial space — 150,000+ properties — using a free, neutral tool run by the EPA. Owners submit data, receive consistent benchmarks, and an entire ecosystem of private software, advisory, and compliance services exists around that data."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-8">
            <p className="text-sm text-gray-300 leading-relaxed">
              The problem is that this infrastructure and economic model don&apos;t exist outside the U.S. — and even within the U.S., ENERGY STAR covers energy but not carbon, water, or waste in a way that maps to global frameworks like GRESB or CRREM.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-4">
              SDX applies the same principle — free, neutral, standardized measurement — but extends it globally, adds owner governance, and introduces an economic model where contributors share in the value their data creates.
            </p>
            <p className="mt-6 text-xs text-gray-500 leading-relaxed">
              This is not a new idea. It&apos;s the same model that DTCC, SWIFT, and S&P iBoxx use in financial markets — industry-governed infrastructure that standardizes inputs so competition can happen at the value layer above.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
