'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/ui/Icon';
import { PROBLEMS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/motion';

export function ProblemGrid() {
  return (
    <section className="bg-navy-800 py-24">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Real estate sustainability data is broken."
          dark
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                <Icon name={p.icon} className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
