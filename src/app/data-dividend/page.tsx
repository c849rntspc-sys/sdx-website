import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { StepFlow } from '@/components/marketing/StepFlow';
import { FlywheelDiagram } from '@/components/marketing/FlywheelDiagram';
import { CTABanner } from '@/components/marketing/CTABanner';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ } from '@/lib/constants';
import { FadeInView } from '@/components/marketing/FadeInView';
import { SharedValueEconomics } from '@/components/marketing/SharedValueEconomics';
import { Check, Shield, Eye, DollarSign, Building2, Ruler, BarChart3, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Dividend',
  description: 'The Data Dividend is a breakthrough in shared value. SDX shares benchmark revenue back to the data contributors who make the platform possible.',
};

const revenueSources = [
  'Benchmark subscriptions — aggregated, anonymized peer benchmarks by asset class, geography, and cohort',
  'Regulator-grade data packs — standardized, versioned outputs for public agencies',
  'Index partnerships — curated benchmark series for third-party indices and underwriting tools',
  'Certification programs — optional attestation for the SDX Data Quality Standard',
];

const precedents = [
  { name: 'DTCC', description: 'User-owned financial market infrastructure where participants collectively fund and govern shared rails.' },
  { name: 'SWIFT', description: 'Global cooperative owned by member financial institutions — neutral messaging substrate with shared governance.' },
  { name: 'S&P iBoxx', description: 'Benchmark families built from contributed pricing inputs under codes of conduct, producing widely used market benchmarks.' },
];

const guardrails = [
  { icon: Shield, title: 'No raw data sales', description: 'Only aggregated, anonymized benchmark products. Building-level data is never shared.' },
  { icon: Eye, title: 'Full transparency', description: 'Methods, operating budget, and financials published annually. Auditable by contributors.' },
  { icon: DollarSign, title: 'Objective formula', description: 'Weighted by eligible buildings, floor area, completeness, and freshness. No subjective adjustments.' },
];

export default function DataDividendPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="The Data Dividend"
        title={
          <>
            The economics of sustainability data are{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan bg-clip-text text-transparent">
              upside down.
            </span>
          </>
        }
        subtitle="Today, owners pay to submit their data to platforms that aggregate it and sell benchmarks back. The value flows one way. SDX inverts this: the platform is free, and contributors receive a share of the revenue their data generates. This page explains how."
      />

      {/* Breakthrough explainer */}
      <section className="py-20 bg-[#0A0A0A]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeInView>
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 md:p-10">
                <p className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-4">Why this matters</p>
                <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                  <p>
                    Every sustainability platform in the market today operates the same way: owners pay to submit data, the platform aggregates it into proprietary benchmarks, then sells those benchmarks back — often to the same owners who provided the inputs. The value created by contributor data is captured entirely by the platform operator.
                  </p>
                  <p>
                    <span className="text-text-primary font-semibold">The Data Dividend inverts this model.</span> SDX is completely free to use for everyone — owners, their service providers, and third-party software platforms can all read from and write to the platform at zero cost. SDX only monetizes board-approved licensed content sold to third parties. Contributors receive that content free for their own internal use, plus a share of the revenue generated. The more you contribute, the larger your dividend.
                  </p>
                  <p>
                    This isn&rsquo;t theoretical — it&rsquo;s the same economic model that powers DTCC, SWIFT, and S&P index families in financial markets. The difference is that SDX applies it to real estate sustainability data for the first time.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      <StepFlow />

      <section className="py-24 bg-[#0A0A0A]">
        <Container>
          <SectionHeading
            eyebrow="Licensed Content"
            title="The sole source of revenue"
            subtitle="The platform is free. The only monetization is board-approved licensed content — sold to third parties, free to contributors for internal use."
          />
          <div className="max-w-2xl mx-auto space-y-4">
            {revenueSources.map((source, i) => (
              <FadeInView key={i}>
                <div className="flex items-start gap-4 bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
                  <Check className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary leading-relaxed">{source}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </Container>
      </section>

      <SharedValueEconomics />

      {/* Dividend Formula */}
      <section className="py-24 bg-[#0A0A0A]">
        <Container>
          <SectionHeading
            eyebrow="The Dividend Formula"
            title="How your share is calculated"
            subtitle="An objective, auditable formula that rewards both breadth and quality of contribution — and treats every asset class and owner size equitably."
          />

          {/* Formula variables */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            <FadeInView>
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Number of Buildings</h3>
                <p className="text-xs text-text-secondary leading-relaxed">More buildings contributed means a larger share. Incentivizes organizations to bring their full portfolio onto the platform.</p>
              </div>
            </FadeInView>
            <FadeInView>
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center mx-auto mb-4">
                  <Ruler className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Total Square Footage</h3>
                <p className="text-xs text-text-secondary leading-relaxed">Larger properties contribute more data to the substrate. Floor area weighting ensures proportional recognition of contribution scale.</p>
              </div>
            </FadeInView>
            <FadeInView>
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Data Quality Score</h3>
                <p className="text-xs text-text-secondary leading-relaxed">Completeness, coverage, and freshness of whole-building data. Higher quality data produces better benchmarks and earns a larger dividend.</p>
              </div>
            </FadeInView>
            <FadeInView>
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Whole-Building Completeness</h3>
                <p className="text-xs text-text-secondary leading-relaxed">Energy, water, waste, and emissions data for the entire building. Incentivizes contributors to close data gaps, not just report partial metrics.</p>
              </div>
            </FadeInView>
          </div>

          {/* Fairness explainer */}
          <div className="max-w-3xl mx-auto">
            <FadeInView>
              <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 md:p-10">
                <p className="text-xs font-semibold tracking-widest text-cyan uppercase mb-4">Designed for fairness</p>
                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                  <p>
                    The weighted formula creates the right incentives: contribute more assets and strive for the highest quality whole-building data. SDX provides every contributor the free tools to achieve both — benchmarking, data quality scoring, gap detection, and audit-readiness tracking.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The model treats small and large owners equitably.</span> A 50-building portfolio with excellent data quality can earn a proportionally competitive dividend alongside a 500-building portfolio with moderate completeness. Quality multiplies quantity.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Different asset classes are treated fairly.</span> An industrial owner may have large properties and extensive portfolios but relatively sparse whole-building data compared to an office REIT. Since all asset classes and owners face the same data constraints in their respective markets, the formula applies the same weighting uniformly — no asset class is advantaged or penalized.
                  </p>
                </div>
                {/* One dividend per building */}
                <div className="mt-6 pt-5 border-t border-white/10 mb-6">
                  <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <Building2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-white font-semibold mb-1">One dividend per building, per owner</p>
                      <p className="text-xs text-gray-400 leading-relaxed">If an owner has a building managed through multiple software platforms that each integrate with SDX, SDX pays the dividend only once to the underlying owner. This prevents duplicate payouts and ensures the dividend pool is distributed fairly based on unique building contributions.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400">Objective and auditable — no subjective adjustments</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400">Published methodology — every contributor can verify their own calculation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400">Board-governed — formula changes require owner supermajority</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-surface-bg">
        <Container>
          <SectionHeading
            eyebrow="Trust Guardrails"
            title="Privacy and transparency by design"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {guardrails.map((g, i) => (
              <Card key={i}>
                <div className="w-10 h-10 rounded-lg bg-primary-500/15 flex items-center justify-center mb-4">
                  <g.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{g.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{g.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FlywheelDiagram />

      <section className="py-24 bg-surface-bg">
        <Container>
          <SectionHeading
            eyebrow="Proven Precedent"
            title="This model already works in finance"
            subtitle="DTCC, SWIFT, and S&P iBoxx all monetize derived benchmarks from contributed data — without ever selling raw inputs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {precedents.map((p, i) => (
              <Card key={i}>
                <h3 className="text-lg font-bold text-text-primary mb-2">{p.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Addressing your concerns"
          />
          <div className="max-w-2xl mx-auto">
            <Accordion items={FAQ} />
          </div>
        </Container>
      </section>

      <CTABanner
        title="Want to understand the economics in more detail?"
        subtitle="The dividend formula, licensed content catalog, and financial methodology are documented in the Support center. If something is unclear, tell us."
        cta="Read the Documentation"
        href="/docs"
      />
    </>
  );
}
