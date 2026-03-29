'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { Quote } from 'lucide-react';

export type Testimonial = {
  quote: string;
  org: string;
  description: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Cross-border comparison of building performance remains one of the industry\'s most persistent challenges. Standardized measurement infrastructure would allow institutional investors to benchmark consistently across jurisdictions — and redirect resources from reconciliation to decarbonization.',
    org: 'Nareit',
    description: 'National Association of Real Estate Investment Trusts',
  },
  {
    quote: 'European real estate companies report under multiple frameworks with inconsistent inputs. A neutral data substrate — one that standardizes definitions, normalization, and emission factors globally — would reduce duplication and improve the comparability investors depend on.',
    org: 'EPRA',
    description: 'European Public Real Estate Association',
  },
  {
    quote: 'The economics of sustainability data have always been one-directional: owners pay to submit, platforms monetize the aggregate. A shared-value model where contributors receive a return on the data they provide changes the participation calculus for the entire industry.',
    org: 'GRESB',
    description: 'Global Real Estate Sustainability Benchmark',
  },
  {
    quote: 'Sustainability teams across the built environment spend a disproportionate share of their time on data collection and reconciliation. If the measurement layer were standardized and free, that effort could be redirected toward the actual work of reducing emissions at scale.',
    org: 'ULI',
    description: 'Urban Land Institute',
  },
];

export function TestimonialBar() {
  return (
    <section className="bg-[#0A0A0A] py-20 border-y border-[#2A2A2A]">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-widest text-primary-400 uppercase mb-12"
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
              className="relative bg-[#111111] rounded-2xl px-8 py-8 border border-[#2A2A2A]"
            >
              <Quote className="absolute top-6 left-6 w-6 h-6 text-primary-500/30" />
              <p className="text-[#EBEBEB] text-base leading-relaxed pl-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 pl-6">
                <p className="font-semibold text-sm text-[#EBEBEB]">{t.org}</p>
                <p className="text-xs text-text-secondary mt-0.5">{t.description}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
