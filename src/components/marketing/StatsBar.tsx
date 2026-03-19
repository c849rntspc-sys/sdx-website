'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { CountUp } from './CountUp';
import { staggerContainer, fadeInUp } from '@/lib/motion';

type Stat = { value: string; label: string };

export function StatsBar({ stats, dark = false }: { stats: Stat[]; dark?: boolean }) {
  return (
    <section className={dark ? 'bg-navy-800 py-16' : 'bg-white py-16 border-y border-gray-100'}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold tracking-tight ${dark ? 'text-cyan' : 'text-primary-500'}`}>
                <CountUp value={stat.value} />
              </div>
              <p className={`mt-2 text-sm ${dark ? 'text-gray-400' : 'text-text-secondary'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
