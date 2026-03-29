'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import * as Icons from 'lucide-react';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
};

export function FeatureGrid({ eyebrow, title, subtitle, features, columns = 3, dark = false }: Props) {
  const colClass = columns === 4 ? 'lg:grid-cols-4' : columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';

  return (
    <section className={`py-24 ${dark ? 'bg-navy-800' : 'bg-surface-bg'}`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} dark={dark} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className={`grid grid-cols-1 md:grid-cols-2 ${colClass} gap-6`}
        >
          {features.map((f, i) => {
            const IconMap = Icons as unknown as Record<string, Icons.LucideIcon>;
            const Icon = IconMap[f.icon] || Icons.Circle;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl p-6 transition-all duration-200 ${
                  dark
                    ? 'bg-white/5 border border-white/10 hover:bg-white/8'
                    : 'bg-[#111111] border border-[#2A2A2A] hover:border-[#3D3D3D] hover:shadow-[0_0_20px_rgba(243,159,65,0.08)] hover:-translate-y-0.5'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  dark ? 'bg-primary-500/20' : 'bg-primary-500/15'
                }`}>
                  <Icon className={`w-5 h-5 ${dark ? 'text-primary-400' : 'text-primary-400'}`} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${dark ? 'text-white' : 'text-text-primary'}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-text-secondary'}`}>
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
