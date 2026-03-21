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
  {
    icon: 'Wifi',
    title: 'Direct Utility Connections',
    description: 'Live integrations with ENERGY STAR Portfolio Manager (EPA) and 6+ utilities via Green Button Connect My Data. Automated meter data import at the infrastructure layer.',
  },
  {
    icon: 'Bot',
    title: 'AI Assistant (Claude)',
    description: 'A real AI with live access to your portfolio data — ask about building performance, energy costs, and carbon trends and get specific, data-driven answers.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Sustainability Data Exchange"
        title={
          <>
            A new model for shared,{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan bg-clip-text text-transparent">
              sustainable value
            </span>
          </>
        }
        subtitle="The neutral, owner-governed measurement substrate for comparable, audit-ready real estate sustainability data."
        pillars={['Neutral', 'Shared Value', 'Owner-governed']}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/data-dividend" size="lg">
            Learn About the Data Dividend
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
        subtitle="Five layers of data infrastructure that make comparable, audit-ready sustainability measurement possible."
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
