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
  title = 'See how it works.',
  subtitle = 'SDX is free for every owner — from a single building to a global portfolio. Explore the platform, or talk to someone on the team.',
  cta = 'Explore the Platform',
  href = '/platform',
}: Props) {
  return (
    <section className="bg-[#111111] border-y border-[#2A2A2A] py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#EBEBEB] tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-[#9A9A9A]">
            {subtitle}
          </p>
          <div className="mt-8">
            <Button href={href} variant="primary" size="lg">
              {cta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
