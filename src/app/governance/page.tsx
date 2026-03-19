import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { CTABanner } from '@/components/marketing/CTABanner';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/marketing/FadeInView';
import { GovernanceCards } from '@/components/marketing/GovernanceCards';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Governance',
  description: 'SDX is owner-governed, modeled on DTCC, SWIFT, and S&P Index families. No single company owns the substrate.',
};

const charterCommitments = [
  'Voluntary and free for contributors \u2014 data owners retain ownership, portability, and unconditional exit rights',
  'Owner-led governance sets charter, conduct rules, anonymization thresholds, and benchmark product boundaries',
  'Interoperability-first \u2014 reinforce existing national regimes while enabling global comparability',
  'Commercialization boundary \u2014 no sale of raw owner-identifiable data; only aggregated, anonymized benchmarks',
  'Integration parity \u2014 open APIs and equal terms for all ecosystem participants',
];

const antiMonopoly = [
  'Open integration parity \u2014 published APIs, equal terms',
  'Portability and exit rights \u2014 export + defined deletion workflow',
  'Profit governance \u2014 board-defined principles for reasonable margins; excess value returned',
  'Operator re-tender pathway \u2014 transfer readiness with runbooks, specs, and tooling maintained',
];

export default function GovernancePage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Governance & Trust"
        title={
          <>
            Modeled on{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan bg-clip-text text-transparent">
              DTCC, SWIFT, and S&P
            </span>
          </>
        }
        subtitle="SDX separates governance from operations. Owners set the rules. A neutral operator builds and runs the platform under SLA. No single company controls the substrate."
      />

      <section className="py-24 bg-surface-bg">
        <Container>
          <GovernanceCards />
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Charter Commitments"
            title="Rights enshrined at the charter level"
            subtitle="These commitments are not policies \u2014 they are structural. Changing them requires owner supermajority."
          />
          <div className="max-w-2xl mx-auto space-y-4">
            {charterCommitments.map((c, i) => (
              <FadeInView key={i}>
                <div className="flex items-start gap-4 bg-surface-bg border border-gray-100 rounded-xl p-5">
                  <Check className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary leading-relaxed">{c}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-navy-800">
        <Container>
          <SectionHeading
            eyebrow="Anti-Monopoly Guardrails"
            title="Credible competition by design"
            subtitle="The governance structure includes multiple mechanisms to prevent the substrate from becoming a private extraction moat."
            dark
          />
          <div className="max-w-2xl mx-auto space-y-4">
            {antiMonopoly.map((item, i) => (
              <FadeInView key={i}>
                <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                  <Check className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300 leading-relaxed">{item}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Help shape the governance"
        subtitle="Join the working group to define the charter, conduct rules, and comparability standard."
      />
    </>
  );
}
