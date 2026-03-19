import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { CTABanner } from '@/components/marketing/CTABanner';
import { StatsBar } from '@/components/marketing/StatsBar';
import { BENCHMARK_STANDARDS, ENERGY_STAR_STATS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
export const metadata: Metadata = {
  title: 'How It Works',
  description: 'SDX standardizes definitions, normalization, and benchmarking — the preconditions for comparable, audit-ready sustainability data.',
};

const substrateLayers = [
  {
    icon: 'BookOpen',
    title: 'Definitions',
    description: 'Standardized property types, meter types, boundary definitions, and unit conventions. A shared vocabulary so data means the same thing everywhere.',
  },
  {
    icon: 'Thermometer',
    title: 'Normalization',
    description: 'Weather normalization, area and occupancy intensity adjustments, source-to-site energy conversion. Apples-to-apples comparison across climates and use patterns.',
  },
  {
    icon: 'BarChart3',
    title: 'Benchmarking',
    description: 'Six global standards computed simultaneously — SDX, ENERGY STAR, NABERS, EU EPC, CRREM, and GRESB. One submission, every benchmark.',
  },
  {
    icon: 'FileCheck',
    title: 'Evidence Pack',
    description: 'Metric dictionary, normalization rules, source-to-KPI lineage, completeness scoring, and standardized exception reporting. Audit-ready from day one.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Data Quality Standard',
    description: 'Completeness, coverage, and freshness scoring with letter grades. Limited assurance readiness tracking and meter gap detection.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="How It Works"
        title="The neutral measurement substrate"
        subtitle="SDX standardizes the preconditions for trustworthy data — definitions, normalization, and benchmarking — so everyone above the substrate can focus on creating value."
      />

      <FeatureGrid
        eyebrow="The Substrate"
        title="What SDX standardizes"
        subtitle="Five layers of data infrastructure that make comparable, audit-ready sustainability measurement possible."
        features={substrateLayers}
        columns={3}
      />

      <section className="py-24 bg-navy-800">
        <Container>
          <SectionHeading
            eyebrow="Benchmarking Standards"
            title="One building. Six global benchmarks."
            subtitle="Compare performance across every major standard simultaneously. One data submission produces benchmarks for SDX, ENERGY STAR, NABERS, EU EPC, CRREM, and GRESB."
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

      <StatsBar stats={ENERGY_STAR_STATS} />

      <CTABanner
        title="Built on a proven model"
        subtitle="ENERGY STAR proved that neutral, standardized measurement creates trust and drives adoption. SDX extends the model globally with shared economics."
      />
    </>
  );
}
