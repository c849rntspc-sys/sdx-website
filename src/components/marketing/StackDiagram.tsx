'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { STACK_LAYERS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { TrendingUp, Layers, Database } from 'lucide-react';

const icons = [TrendingUp, Layers, Database];

export function StackDiagram() {
  return (
    <section className="bg-navy-900 py-24">
      <Container>
        <SectionHeading
          eyebrow="What Is SDX?"
          title="The neutral measurement substrate for comparable sustainability data."
          dark
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto space-y-4"
        >
          {STACK_LAYERS.map((layer, i) => {
            const Icon = icons[i];
            const isSubstrate = i === 1;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl p-6 flex items-center gap-5 ${
                  isSubstrate
                    ? 'bg-gradient-to-r from-primary-500/20 to-primary-400/20 border-2 border-primary-400/40'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    isSubstrate ? 'bg-primary-500/30' : 'bg-white/10'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isSubstrate ? 'text-primary-400' : 'text-gray-400'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-bold tracking-wider ${isSubstrate ? 'text-primary-400' : 'text-white'}`}>
                      {layer.label}
                    </h3>
                    <span className="text-xs text-gray-500 italic hidden sm:block">{layer.note}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{layer.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-cyan text-sm mt-8 italic"
        >
          SDX standardizes the preconditions for trustworthy data. Competition shifts up the stack.
        </motion.p>
      </Container>
    </section>
  );
}
