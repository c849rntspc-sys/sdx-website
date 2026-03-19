'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/marketing/FadeInView';
import { Check, DollarSign, ArrowRightLeft, Users, ShieldCheck, X } from 'lucide-react';

export function SharedValueEconomics() {
  return (
    <section className="py-24 bg-navy-900">
      <Container>
        <SectionHeading
          eyebrow="Shared Value Model"
          title="How the economics work"
          subtitle="The platform is completely free to use — for everyone. The only monetization comes from board-approved licensed content purchased by third parties."
          dark
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <FadeInView>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-white font-semibold">Data Contributors</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Free platform access — all tools to read, write, benchmark, and report at zero cost</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Free licensed content for internal use — benchmarks, indices, and analytics for your own portfolio</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Data dividends — share of revenue from third-party licensed content sales</li>
              </ul>
            </div>
          </FadeInView>
          <FadeInView>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <ArrowRightLeft className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-white font-semibold">Third-Party Providers</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Free to integrate — read and write data on behalf of owners at zero cost</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Free API access for contributing data on behalf of their owner clients</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Open APIs and equal integration terms for all ecosystem participants</li>
              </ul>
            </div>
          </FadeInView>
          <FadeInView>
            <div className="bg-white/5 border border-cyan/20 rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="text-white font-semibold">Licensed Content Buyers</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" />Third parties who want to consume board-approved licensed content pay to access it</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" />Aggregate benchmarks, indices, analytics datasets, and regulator-grade data packs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" />This is the only source of monetization for SDX</li>
              </ul>
            </div>
          </FadeInView>
        </div>

        {/* Key principles */}
        <FadeInView>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="w-5 h-5 text-primary-400" />
                <h3 className="text-white font-semibold">Key economic principles</h3>
              </div>
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                <p>
                  <span className="text-white font-medium">No fees to use the platform</span> — Everyone can read from and write to SDX for free. Owners, their service providers, and third-party software platforms all access the full platform at zero cost.
                </p>
                <p>
                  <span className="text-white font-medium">Licensed content is the sole revenue source</span> — SDX only monetizes board-approved derivative data products: anonymized, aggregated benchmarks, indices, and analytics datasets. These are licensed to third parties who want to consume them for their own commercial purposes.
                </p>
                <p>
                  <span className="text-white font-medium">Contributors get licensed content free</span> — Data contributors never pay for licensed content so long as it is for their own internal use. Re-licensing or redistributing content requires a commercial arrangement.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-400">
                    <span className="text-cyan font-medium">Surplus allocation</span> — After operating costs, surplus revenue from licensed content sales is governed by the board: returned to contributors as data dividends, reinvested in platform capabilities, or used to expand the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
