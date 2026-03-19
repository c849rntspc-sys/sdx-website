'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { Quote } from 'lucide-react';

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  org: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The industry needs a neutral measurement layer that no single vendor controls. SDX is exactly that infrastructure.',
    name: 'Derk Welling',
    title: 'Senior Responsible Investment & Governance Advisor',
    org: 'APG Asset Management',
  },
  {
    quote: 'Comparable, audit-ready data across jurisdictions is the single biggest gap in real estate sustainability. This fills it.',
    name: 'Nina Jensen Galbiati',
    title: 'Senior Analyst, Real Assets',
    org: 'Norges Bank Investment Management',
  },
  {
    quote: 'We spend too much time reconciling data across systems. A shared substrate would let us focus on actual decarbonization.',
    name: 'Ben Myers',
    title: 'VP, Sustainability',
    org: 'BXP (formerly Boston Properties)',
  },
  {
    quote: 'Aligning incentives between data contributors and data consumers is the breakthrough. The dividend model makes participation rational.',
    name: 'Elena Alschuler',
    title: 'Head of Sustainability, Americas',
    org: 'LaSalle Investment Management',
  },
];

export function TestimonialBar() {
  return (
    <section className="bg-white py-20 border-y border-gray-100">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-widest text-primary-500 uppercase mb-12"
        >
          What industry leaders are saying
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={fadeInUp}
              className="relative bg-gray-50 rounded-2xl px-8 py-8 border border-gray-100"
            >
              <Quote className="absolute top-6 left-6 w-6 h-6 text-primary-200" />
              <p className="text-text-primary text-base leading-relaxed pl-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 pl-6">
                <p className="font-semibold text-sm text-navy-900">{t.name}</p>
                <p className="text-xs text-text-secondary mt-0.5">{t.title}</p>
                <p className="text-xs font-medium text-primary-600 mt-0.5">{t.org}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
