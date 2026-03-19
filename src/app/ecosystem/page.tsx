import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { StackDiagram } from '@/components/marketing/StackDiagram';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { CTABanner } from '@/components/marketing/CTABanner';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { FadeInView } from '@/components/marketing/FadeInView';
import { ECOSYSTEM_BENEFITS, INTEGRATIONS } from '@/lib/constants';
import { Minus, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ecosystem',
  description: 'Build on SDX. Open APIs, free integration, and equal access for all ecosystem partners.',
};

const apiFeatures = [
  {
    icon: 'Code',
    title: 'RESTful APIs',
    description: 'Well-documented endpoints for benchmark data, property metadata, and aggregated analytics. OpenAPI specification included.',
  },
  {
    icon: 'Key',
    title: 'Free to Integrate',
    description: 'Read and write data on behalf of your owner clients at zero cost. No licensing fees, no per-call charges, no lock-in.',
  },
  {
    icon: 'Gauge',
    title: 'Integration Parity',
    description: 'Published APIs with equal terms for all partners. No preferential access, no secret endpoints. Open is a charter-level commitment.',
  },
];

export default function EcosystemPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Ecosystem"
        title={
          <>
            SDX is not your competitor.{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan bg-clip-text text-transparent">
              It&apos;s your substrate.
            </span>
          </>
        }
        subtitle="SDX handles measurement. You handle analytics, advisory, CRREM pathways, assurance, and everything else your clients need. Better data in means better outcomes from your products."
      />

      <StackDiagram />

      <section className="py-24 bg-surface-bg">
        <Container>
          <SectionHeading
            eyebrow="For Software Providers"
            title="Why build on SDX?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ECOSYSTEM_BENEFITS.map((b, i) => (
              <Card key={i}>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{b.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{b.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-navy-800">
        <Container>
          <SectionHeading
            eyebrow="Your tools don't get replaced"
            title="Competition shifts up the stack"
            dark
          />
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInView>
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-red-400">Without SDX</h3>
                {[
                  'Rebuild normalization logic per client',
                  'Reconcile inconsistent data formats',
                  'Maintain proprietary benchmark datasets',
                  'Compete on data collection (low value)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Minus className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <p className="text-sm text-gray-400">{item}</p>
                  </div>
                ))}
              </div>
            </FadeInView>
            <FadeInView>
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary-400">With SDX</h3>
                {[
                  'Consume standardized, audit-ready data via API',
                  'Focus on analytics, advisory, and insights',
                  'Access the deepest global benchmark dataset',
                  'Compete on value creation (high value)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary-400 shrink-0 mt-1" />
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      <FeatureGrid
        eyebrow="Open API Access"
        title="Free integration for everyone"
        subtitle="Published endpoints, equal terms, zero cost. Read and write data on behalf of owners at no charge."
        features={apiFeatures}
        columns={3}
      />

      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Existing Integrations"
            title="Already connected to the ecosystem"
            subtitle="SDX integrates with leading property management systems, sustainability platforms, and utility providers."
          />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInView>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">Property Management</h3>
              <div className="space-y-2">
                {INTEGRATIONS.pms.map((name, i) => (
                  <p key={i} className="text-sm text-text-secondary">{name}</p>
                ))}
              </div>
            </FadeInView>
            <FadeInView>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">Sustainability Platforms</h3>
              <div className="space-y-2">
                {INTEGRATIONS.sustainability.map((name, i) => (
                  <p key={i} className="text-sm text-text-secondary">{name}</p>
                ))}
              </div>
            </FadeInView>
            <FadeInView>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">Utilities ({INTEGRATIONS.utilities.length}+)</h3>
              <div className="space-y-2">
                {INTEGRATIONS.utilities.slice(0, 8).map((name, i) => (
                  <p key={i} className="text-sm text-text-secondary">{name}</p>
                ))}
                <p className="text-sm text-primary-500 font-medium">+ {INTEGRATIONS.utilities.length - 8} more</p>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Build on SDX"
        subtitle="Join the ecosystem. Integrate with SDX for free. Access standardized benchmark data via open APIs."
        cta="Partner with SDX"
        href="/join"
      />
    </>
  );
}
