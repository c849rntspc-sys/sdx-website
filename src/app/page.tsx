import { Hero } from '@/components/marketing/Hero';
import { Button } from '@/components/ui/Button';
import { ProblemGrid } from '@/components/marketing/ProblemGrid';
import { StackDiagram } from '@/components/marketing/StackDiagram';
import { StepFlow } from '@/components/marketing/StepFlow';
import { FlywheelDiagram } from '@/components/marketing/FlywheelDiagram';
import { ComparisonTable } from '@/components/marketing/ComparisonTable';
import { CTABanner } from '@/components/marketing/CTABanner';
import { ProvenModel } from '@/components/marketing/ProvenModel';
import { TestimonialBar } from '@/components/marketing/TestimonialBar';
import { WhatSdxIsNot } from '@/components/marketing/WhatSdxIsNot';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { MultiActorModel } from '@/components/marketing/MultiActorModel';

const substrateLayers = [
  {
    icon: 'BookOpen',
    title: 'Definitions',
    description: 'Property types, meter types, boundary definitions, and unit conventions — standardized so that "office" means the same thing in Tokyo, London, and New York.',
  },
  {
    icon: 'Thermometer',
    title: 'Normalization',
    description: 'Weather normalization, area and occupancy intensity adjustments, source-to-site energy conversion. The same building in two climates can be compared fairly.',
  },
  {
    icon: 'BarChart3',
    title: 'Benchmarking',
    description: 'SDX, ENERGY STAR, NABERS, EU EPC, CRREM, and GRESB — six standards computed from a single data submission.',
  },
  {
    icon: 'FileCheck',
    title: 'Evidence & Lineage',
    description: 'Metric dictionary, normalization rules, source-to-KPI lineage, and completeness scoring. Every number has a documented path from raw input to published output.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Data Quality',
    description: 'Completeness, coverage, and freshness scoring with letter grades. Meter gap detection and limited assurance readiness tracking.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Sustainability Data Exchange"
        title={
          <>
            Sustainability data for{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan bg-clip-text text-transparent">
              everyone, everywhere.
            </span>
          </>
        }
        subtitle="SDX unifies today's patchwork of incompatible real estate sustainability data into a single, neutral platform — free to use and built on the principle of shared value."
        pillars={['Neutral', 'Shared Value', 'Owner-governed']}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/data-dividend" size="lg">
            See How Shared Value Works
          </Button>
          <Button href="/platform" variant="outline-light" size="lg">
            Explore the Platform
          </Button>
        </div>
      </Hero>

      <ProblemGrid />

      <WhatSdxIsNot />

      <FeatureGrid
        eyebrow="The Substrate"
        title="What SDX rationalizes"
        subtitle="Five layers of data infrastructure that make comparable, audit-ready sustainability measurement possible. These are the structural problems SDX solves — not features, but foundations."
        features={substrateLayers}
        columns={3}
      />

      <MultiActorModel />

      <ProvenModel />

      <StackDiagram />

      <StepFlow />

      <FlywheelDiagram />

      <ComparisonTable />

      <TestimonialBar />

      <CTABanner />
    </>
  );
}
