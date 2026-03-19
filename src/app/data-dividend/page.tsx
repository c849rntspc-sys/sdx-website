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
import { Check, Shield, Eye, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Dividend',
  description: 'SDX shares benchmark revenue back to data contributors. Your data creates value — you should share in it.',
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
            Your data creates value.{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan bg-clip-text text-transparent">
              You should share in it.
            </span>
          </>
        }
        subtitle="SDX flips the incentive model. Instead of private vendors owning the substrate and charging for access, SDX treats data contribution as value creation — and shares the upside."
      />

      <StepFlow />

      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Revenue Sources"
            title="Bounded revenue, no raw data sales"
            subtitle="SDX is funded through a bounded set of derived products. Benchmarks are free to contributors but licensed for a fee to third parties."
          />
          <div className="max-w-2xl mx-auto space-y-4">
            {revenueSources.map((source, i) => (
              <FadeInView key={i}>
                <div className="flex items-start gap-4 bg-surface-bg border border-gray-100 rounded-xl p-5">
                  <Check className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary leading-relaxed">{source}</p>
                </div>
              </FadeInView>
            ))}
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
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                  <g.icon className="w-5 h-5 text-primary-500" />
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

      <section className="py-24 bg-white">
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
        title="Turn sustainability data from a cost center into a profit center"
        subtitle="The dividend formula rewards quality and completeness. Early movers earn the largest dividends."
      />
    </>
  );
}
