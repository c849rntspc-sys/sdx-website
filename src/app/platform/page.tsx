import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { CTABanner } from '@/components/marketing/CTABanner';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeInView } from '@/components/marketing/FadeInView';
import { PLATFORM_FEATURES, BENCHMARK_STANDARDS, COMPLIANCE_FRAMEWORKS, INTEGRATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'Global benchmarking, multi-standard scoring, automated compliance, and AI-powered insights for real estate sustainability.',
};

export default function PlatformPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Platform"
        title="Everything you need for sustainability benchmarking"
        subtitle="60+ property types, 30+ countries, 6 benchmarking standards, 16+ compliance frameworks, and AI-powered insights — on a neutral, owner-governed substrate."
      />

      <FeatureGrid
        eyebrow="Core Capabilities"
        title="Built for institutional real estate"
        features={PLATFORM_FEATURES}
        columns={4}
      />

      <section id="standards" className="py-24 bg-navy-800">
        <Container>
          <SectionHeading
            eyebrow="Benchmarking Standards"
            title="One building. Six global benchmarks."
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENCHMARK_STANDARDS.map((s, i) => (
              <Card key={i} dark>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-white">{s.name}</h3>
                  <Badge color="cyan">{s.region}</Badge>
                </div>
                <p className="text-sm text-primary-400 font-medium mb-3">{s.scale}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="compliance" className="py-24 bg-surface-bg">
        <Container>
          <SectionHeading
            eyebrow="Compliance"
            title="Automate reporting across 16+ frameworks"
          />
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-6 text-center">
                Voluntary Frameworks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {COMPLIANCE_FRAMEWORKS.voluntary.map((f, i) => (
                  <Card key={i} className="!p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-text-primary">{f.name}</h4>
                      <Badge color="blue">{f.region}</Badge>
                    </div>
                    <p className="text-sm text-text-secondary">{f.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-6 text-center">
                Regulated Compliance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {COMPLIANCE_FRAMEWORKS.regulated.map((f, i) => (
                  <Card key={i} className="!p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-text-primary text-sm">{f.name}</h4>
                      <Badge color="red">{f.region}</Badge>
                    </div>
                    <p className="text-xs text-text-secondary">{f.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="integrations" className="py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Integrations"
            title="Connect your entire real estate stack"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {Object.entries({
              'Property Management': INTEGRATIONS.pms,
              'Benchmarking': INTEGRATIONS.benchmarking,
              'Sustainability': INTEGRATIONS.sustainability,
              [`Utilities (${INTEGRATIONS.utilities.length}+)`]: INTEGRATIONS.utilities.slice(0, 10),
            }).map(([title, items]) => (
              <FadeInView key={title}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">{title}</h3>
                <div className="space-y-2">
                  {items.map((name, i) => (
                    <p key={i} className="text-sm text-text-secondary">{name}</p>
                  ))}
                  {title.includes('Utilities') && (
                    <p className="text-sm text-primary-500 font-medium">+ {INTEGRATIONS.utilities.length - 10} more</p>
                  )}
                </div>
              </FadeInView>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
