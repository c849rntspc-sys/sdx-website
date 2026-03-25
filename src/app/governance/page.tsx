import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { CTABanner } from '@/components/marketing/CTABanner';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/marketing/FadeInView';
import { GovernanceStructureDiagram } from '@/components/marketing/GovernanceStructureDiagram';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'SDX is a not-for-profit, industry-owned sustainability data substrate governed by a permanent board of leading real estate owners and trade associations.',
};

// ─── Permanent Board Members ────────────────────────────────
const boardMembers = [
  { name: 'Matt Ellis', role: 'Co-Founder & Chairman', org: 'SDX', initials: 'ME', tag: 'Founder' },
  { name: 'Derk Welling', role: 'Senior Responsible Investment & Governance Advisor', org: 'APG Asset Management', initials: 'DW', tag: 'Founding Member' },
  { name: 'Nina Jensen Galbiati', role: 'Senior Analyst, Real Assets', org: 'Norges Bank Investment Management', initials: 'NG', tag: 'Founding Member' },
  { name: 'Dominique Moerenhout', role: 'CEO', org: 'EPRA', initials: 'DM', tag: 'Trade Association' },
  { name: 'Steven Wechsler', role: 'President & CEO', org: 'Nareit', initials: 'SW', tag: 'Trade Association' },
  { name: 'Lisette van Doorn', role: 'CEO, Europe', org: 'ULI', initials: 'LV', tag: 'Trade Association' },
  { name: 'Elena Alschuler', role: 'Head of Sustainability, Americas', org: 'LaSalle Investment Management', initials: 'EA', tag: 'Founding Member' },
  { name: 'Peter Hobbs', role: 'Managing Director', org: 'GRESB', initials: 'PH', tag: 'Trade Association' },
];

// ─── Product Committee ──────────────────────────────────────
const productCommitteeMembers = [
  { name: 'Ben Myers', role: 'VP, Sustainability', org: 'BXP', initials: 'BM' },
  { name: 'Sara Neff', role: 'SVP, Sustainability', org: 'Lendlease', initials: 'SN' },
  { name: 'Chris Pyke', role: 'Former SVP, Research', org: 'U.S. Green Building Council', initials: 'CP' },
  { name: 'Emily Corcoran', role: 'VP, ESG & Sustainability', org: 'Prologis', initials: 'EC' },
];

// ─── Commercialization Committee ────────────────────────────
const commercializationCommitteeMembers = [
  { name: 'Abigail Dean', role: 'Global Head of Strategic Insights', org: 'Nuveen Real Estate', initials: 'AD' },
  { name: 'Daniele Iker', role: 'Head of Sustainability', org: 'Brookfield Asset Management', initials: 'DI' },
  { name: 'Mathieu Elshout', role: 'Head of Responsible Investment', org: 'PGGM', initials: 'ME' },
  { name: 'John Wilkinson', role: 'CEO', org: 'PREA', initials: 'JW' },
];

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

function PersonCard({ name, role, org, initials, tag }: {
  name: string; role: string; org: string; initials: string; tag?: string;
}) {
  const isFounder = tag === 'Founder';
  return (
    <div className={`${isFounder ? 'bg-gradient-to-br from-navy-800 to-navy-900 border-primary-500/30' : 'bg-white border-gray-100'} border rounded-xl p-5 flex flex-col items-center text-center`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-3 ${isFounder ? 'bg-gradient-to-br from-primary-500 to-primary-400 text-white' : 'bg-primary-50 text-primary-600'}`}>
        {initials}
      </div>
      <h3 className={`font-semibold text-sm ${isFounder ? 'text-white' : 'text-navy-900'}`}>{name}</h3>
      <p className={`text-xs mt-1 ${isFounder ? 'text-gray-400' : 'text-text-secondary'}`}>{role}</p>
      <p className={`text-xs font-medium mt-0.5 ${isFounder ? 'text-primary-400' : 'text-primary-600'}`}>{org}</p>
      {tag && (
        <span className={`mt-2 inline-block text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full ${
          isFounder ? 'bg-primary-500/20 text-primary-400' :
          tag === 'Trade Association' ? 'bg-cyan/10 text-cyan' :
          'bg-primary-50 text-primary-600'
        }`}>
          {tag}
        </span>
      )}
    </div>
  );
}

function CommitteeMemberCard({ name, role, org, initials }: {
  name: string; role: string; org: string; initials: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold mb-2 bg-white/10 text-gray-300">
        {initials}
      </div>
      <h3 className="font-semibold text-xs text-white">{name}</h3>
      <p className="text-[11px] mt-0.5 text-gray-500">{role}</p>
      <p className="text-[11px] font-medium mt-0.5 text-gray-400">{org}</p>
    </div>
  );
}

export default function GovernancePage() {
  return (
    <>
      <Hero
        compact
        eyebrow="About SDX"
        title={
          <>
            Who governs SDX — and{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan bg-clip-text text-transparent">
              why it matters.
            </span>
          </>
        }
        subtitle="SDX is a not-for-profit governed by the real estate industry it serves. This isn't a startup with outside investors or a platform optimizing for shareholder returns. The people who use the data make the rules. This page explains the structure, the people involved, and how decisions get made."
      />

      {/* Not-for-profit explainer */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Not-for-Profit"
            title="No outside investors. No shareholder returns."
            subtitle="SDX operates as a not-for-profit. There is no venture capital, no private equity, and no incentive to maximize extraction. Surplus revenue is reinvested in the platform or distributed to contributors as dividends. The board — not management — decides how."
          />
          <div className="max-w-3xl mx-auto">
            <FadeInView>
              <div className="bg-surface-bg border border-gray-100 rounded-2xl p-8 md:p-10 space-y-5 text-sm text-text-secondary leading-relaxed">
                <p>
                  SDX exists to serve as neutral infrastructure — not to maximize profit. The platform is completely free to use for everyone: owners, service providers, and third-party software platforms can all read from and write to SDX at zero cost.
                </p>
                <p>
                  The sole source of revenue is board-approved licensed content — anonymized, aggregated benchmarks, indices, and analytics datasets sold to third parties. Data contributors receive all licensed content free for their own internal use. No raw, owner-identifiable data is ever sold.
                </p>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      <GovernanceStructureDiagram />

      {/* Board Members */}
      <section className="py-24 bg-surface-bg">
        <Container>
          <SectionHeading
            eyebrow="Permanent Board"
            title="The organizations that govern SDX"
            subtitle="Board membership is at the organizational level. Founding members and trade associations hold permanent seats. Each organization appoints its own representative(s)."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {boardMembers.map((p, i) => (
              <FadeInView key={i}>
                <PersonCard {...p} />
              </FadeInView>
            ))}
          </div>
        </Container>
      </section>

      {/* Committee Members */}
      <section className="py-24 bg-navy-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Product Committee */}
            <div>
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Product Committee</p>
                <p className="text-sm text-gray-400">Governs data standards, normalization methodology, platform roadmap, and API specifications. 2-year terms, renewable by the Board.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {productCommitteeMembers.map((p, i) => (
                  <FadeInView key={i}>
                    <CommitteeMemberCard {...p} />
                  </FadeInView>
                ))}
              </div>
            </div>

            {/* Commercialization Committee */}
            <div>
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-widest text-cyan uppercase mb-2">Commercialization Committee</p>
                <p className="text-sm text-gray-400">Governs derivative data products, pricing frameworks, contributor discounts, and licensing terms. 2-year terms, renewable by the Board.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {commercializationCommitteeMembers.map((p, i) => (
                  <FadeInView key={i}>
                    <CommitteeMemberCard {...p} />
                  </FadeInView>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Charter Commitments */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Charter Commitments"
            title="Structural commitments, not policies"
            subtitle="These are not guidelines that management can override. They are embedded in the charter and can only be changed by owner supermajority on the board. If you see something missing, tell us."
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

      {/* Anti-Monopoly */}
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
        title="This is an open process."
        subtitle="SDX is being built with the industry, not delivered to it. If you see something that should be different — a governance gap, a missing safeguard, a better precedent — we want to hear it."
        cta="Talk to Someone on the Team"
        href="/docs"
      />
    </>
  );
}
