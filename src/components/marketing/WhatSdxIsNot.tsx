'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { XCircle, CheckCircle } from 'lucide-react';

const NOT_ITEMS = [
  {
    text: 'A replacement for ENERGY STAR',
    detail: 'SDX extends the ENERGY STAR model globally — it doesn\u2019t compete with it.',
  },
  {
    text: 'A competitor to benchmarking standards',
    detail: 'GRESB, NABERS, CRREM, and EU EPC all plug into SDX as scoring frameworks.',
  },
  {
    text: 'A competitor to private software',
    detail: 'Measurabl, Deepki, Scaler, and others build value on top of the substrate — not against it.',
  },
  {
    text: 'A new standard',
    detail: 'SDX implements existing standards consistently. It doesn\u2019t invent new ones.',
  },
];

export function WhatSdxIsNot() {
  return (
    <section className="bg-navy-900 py-24 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-4">
              Positioning
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What SDX is{' '}
              <span className="text-red-400">not</span>.
            </h2>
          </motion.div>

          {/* NOT grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-20">
            {NOT_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 bg-navy-800/60 border border-navy-700 rounded-xl px-5 py-5"
              >
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{item.text}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 max-w-3xl mx-auto mb-20">
            <div className="flex-1 h-px bg-navy-700" />
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">What it is</span>
            <div className="flex-1 h-px bg-navy-700" />
          </motion.div>

          {/* IS section */}
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-navy-800 to-navy-800/40 border border-primary-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex gap-3 items-start mb-6">
                <CheckCircle className="w-6 h-6 text-primary-400 mt-0.5 shrink-0" />
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  A common, globally consistent, shared data substrate.
                </h3>
              </div>

              <div className="space-y-4 text-gray-300 text-[15px] leading-relaxed pl-9">
                <p>
                  SDX provides simple, free tools that eliminate the barriers to sustainability data management — so that any real estate organization can easily contribute data and receive comparable, consistent benchmarks back.
                </p>
                <p>
                  Once data has been consistently calculated, formatted, and compared, it becomes available to any third party that wishes to build value on top — analytics providers, advisory firms, lenders, investors, and regulators alike.
                </p>
              </div>

              {/* ENERGY STAR analogy */}
              <div className="mt-8 bg-navy-900/60 rounded-xl border border-navy-700 p-6 ml-9">
                <p className="text-xs font-semibold tracking-widest text-cyan uppercase mb-3">The proven precedent</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  ENERGY STAR Portfolio Manager provides a simple, free application that convenes data from real estate owners, service providers, and utilities — then delivers transparent, consistent calculations including a 1–100 benchmark. An entire ecosystem of private software, advisory, and compliance services exists around this data.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mt-3">
                  The problem? This infrastructure and economic model don&rsquo;t exist globally — leading to fragmentation in how data is treated and compared, and unnecessary costs for everyone: real estate owners, investors, lenders, and private software applications.
                </p>
                <p className="text-white text-sm font-semibold mt-4">
                  SDX builds that missing global infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
