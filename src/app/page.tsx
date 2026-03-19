import { Hero } from '@/components/marketing/Hero';
import { Button } from '@/components/ui/Button';
import { ProblemGrid } from '@/components/marketing/ProblemGrid';
import { StatsBar } from '@/components/marketing/StatsBar';
import { StackDiagram } from '@/components/marketing/StackDiagram';
import { StepFlow } from '@/components/marketing/StepFlow';
import { FlywheelDiagram } from '@/components/marketing/FlywheelDiagram';
import { ComparisonTable } from '@/components/marketing/ComparisonTable';
import { CTABanner } from '@/components/marketing/CTABanner';
import { ProvenModel } from '@/components/marketing/ProvenModel';
import { MARKET_STATS, ENERGY_STAR_STATS } from '@/lib/constants';

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
        pillars={['Neutral', 'Comparable', 'Owner-governed']}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/join" size="lg">
            Join the Working Group
          </Button>
          <Button href="/platform" variant="outline-light" size="lg">
            Explore the Platform
          </Button>
        </div>
      </Hero>

      <StatsBar stats={MARKET_STATS} />

      <ProblemGrid />

      <ProvenModel />

      <StatsBar stats={ENERGY_STAR_STATS} dark />

      <StackDiagram />

      <StepFlow />

      <FlywheelDiagram />

      <ComparisonTable />

      <CTABanner />
    </>
  );
}
