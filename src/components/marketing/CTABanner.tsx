'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/motion';

type Props = {
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
};

export function CTABanner({
  title = 'Ready to shape a new standard?',
  subtitle = 'First-movers write the rules, earn the largest dividends, and build the infrastructure our industry deserves.',
  cta = 'Join the Working Group',
  href = '/join',
}: Props) {
  return (
    <section className="bg-gradient-to-r from-primary-500 to-primary-400 py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {subtitle}
          </p>
          <div className="mt-8">
            <Button href={href} variant="secondary" size="lg">
              {cta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
