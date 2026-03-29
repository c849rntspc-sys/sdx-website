import { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { FeatureGrid } from '@/components/marketing/FeatureGrid';
import { CTABanner } from '@/components/marketing/CTABanner';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeInView } from '@/components/marketing/FadeInView';
import { PLATFORM_FEATURES, BENCHMARK_STANDARDS, COMPLIANCE_FRAMEWORKS, INTEGRATIONS, LIVE_CONNECTIONS } from '@/lib/constants';
import { Wifi, Bot, ShieldCheck, Check, Pencil, Upload, MapPin, Table, Layers, Building2, Target, UserPlus, UserCheck, Camera, Languages, RefreshCw, PanelLeftClose, Globe, Smartphone } from 'lucide-react';

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
        title="What SDX does — and how it works"
        subtitle="SDX standardizes building performance data across 60+ property types and 30+ countries, computes 6 benchmarking standards simultaneously, and maps to 16+ compliance frameworks. The platform is free for every user. Here is what that looks like in practice."
      />

      <FeatureGrid
        eyebrow="Core Capabilities"
        title="Built for owners of all sizes and types"
        subtitle="From a single-building owner benchmarking for the first time to the largest institutional investors in the world — SDX scales with you."
        features={PLATFORM_FEATURES}
        columns={4}
      />

      {/* Live Data Connections */}
      <section className="py-24 bg-navy-800">
        <Container>
          <SectionHeading
            eyebrow="Live Data Connections"
            title="Connected to the infrastructure layer"
            subtitle="SDX pulls data directly from utilities and the EPA — not through intermediaries. Your credentials never touch SDX."
            dark
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeInView>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="w-5 h-5 text-primary-400" />
                  <h3 className="text-lg font-bold text-white">ENERGY STAR Portfolio Manager</h3>
                  <Badge color="green">Live</Badge>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Full integration with EPA&apos;s official Web Services API. Connect your Portfolio Manager account,
                  share properties with SDX, and automatically sync ENERGY STAR scores, meters, and consumption data.
                </p>
                <div className="border-t border-navy-700 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Wifi className="w-5 h-5 text-primary-400" />
                    <h3 className="text-lg font-bold text-white">Green Button Connect My Data</h3>
                    <Badge color="green">Live</Badge>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    OAuth 2.0 utility connections using the NAESB ESPI standard. Users authorize directly on the
                    utility&apos;s website — SDX receives interval data (15-min/hourly), billing summaries, and costs automatically.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {LIVE_CONNECTIONS.utility.map((u, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${u.status === 'Live' ? 'bg-green-400' : 'bg-amber-400'}`} />
                        <span className="text-sm text-gray-300">{u.name}</span>
                        <span className="text-xs text-gray-500">{u.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>
            <FadeInView>
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary-400 mb-4">Architecture</h3>
                {LIVE_CONNECTIONS.architecture.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary-400 shrink-0 mt-1" />
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
                <div className="mt-6 p-4 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A]">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="text-primary-400 font-semibold">Infrastructure-layer integration.</span>{' '}
                    Any Green Button-compliant utility can be added with configuration only. SDX connects to the
                    same data sources that sit beneath every sustainability platform — reinforcing its role as
                    neutral substrate, not a competing application.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* AI Assistant */}
      <section className="py-24 bg-surface-bg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="AI-Powered Analysis"
              title="Ask questions. Get answers grounded in your actual data."
              subtitle="The SDX AI assistant is powered by Claude (Anthropic) and has access to your portfolio context — property count, GHG totals, ENERGY STAR scores, energy costs. Responses reference your specific buildings and metrics, not generic advice."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Bot, title: 'Portfolio Context', description: 'Every response is grounded in your actual buildings, meters, scores, and costs — not hypotheticals.' },
                { icon: ShieldCheck, title: 'Data-Driven Recommendations', description: 'Identifies retrofit candidates, cost savings opportunities, and carbon reduction priorities from real performance data.' },
                { icon: Wifi, title: 'Connected to Live Data', description: 'Draws on utility feeds, ENERGY STAR scores, and benchmark comparisons as they update — always current.' },
              ].map((f, i) => (
                <Card key={i}>
                  <f.icon className="w-8 h-8 text-primary-500 mb-3" />
                  <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
                  <p className="text-sm text-text-secondary">{f.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Global-First Design */}
      <section className="py-24 bg-[#0A0A0A]">
        <Container>
          <SectionHeading
            eyebrow="Global-First Design"
            title="Built for international portfolios from day one"
            subtitle="Multi-language support, dynamic unit conversion, and localized currency formatting — so teams in Tokyo, London, and São Paulo see the same platform in their own terms."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Languages, title: '14 Languages', description: 'Full UI translation across English, Spanish, French, German, Japanese, Chinese, Korean, Portuguese, Italian, Arabic, Hindi, Swedish, Norwegian, and Danish. Language selector on login for immediate localization.' },
              { icon: RefreshCw, title: 'Dynamic Units & Currency', description: 'Metric or imperial, any of 15 currencies — applied globally across every page, chart, and report. Automatic conversion between m²↔ft², kWh/m²↔kBTU/ft², kg↔lb with no manual recalculation.' },
              { icon: Globe, title: '60+ Property Types, 30+ Countries', description: 'Country-specific emission factors, climate data, and regulatory frameworks built in. From office towers in Frankfurt to logistics parks in Osaka — the platform adapts.' },
            ].map((f, i) => (
              <Card key={i}>
                <f.icon className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Day-to-Day Portfolio Management */}
      <section className="py-24 bg-surface-bg">
        <Container>
          <SectionHeading
            eyebrow="Portfolio Management"
            title="Day-to-day tools for sustainability teams"
            subtitle="Benchmarking is only useful if the data behind it stays current. SDX includes the portfolio management tools that sustainability teams need to maintain data quality over time — not as an add-on, but as part of the free platform."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: 'Fund Organization', description: 'Organize properties into investment funds — Core, Value-Add, Opportunistic. Filter portfolio and benchmarks by fund. Fund-level analytics in Data Explorer with weighted-average performance metrics.' },
              { icon: Building2, title: 'Interactive Stacking Plan', description: 'Visual 2D floor plans per building showing tenant spaces and meter assignments. Add spaces with tenant names (logos auto-fetched), assign meters, and track occupancy and data quality.' },
              { icon: Target, title: 'Goal & Pathway Tracking', description: 'Set decarbonization targets aligned to CRREM 1.5°C pathways, SBTi, LL97/BEPS/MEES, or GRESB. Real-time progress with on-track/at-risk/off-track status badges. Goals cascade from entity to fund to building.' },
              { icon: UserPlus, title: 'Tenant & PM Portal', description: 'Mobile-first PWA with data quality dashboard, action items with severity badges, property cards with meter health indicators, and direct data contribution. Installable on mobile home screens.' },
              { icon: UserCheck, title: 'Building-Level Delegation', description: 'Invite tenants and property managers to specific buildings with read-only or edit access. Track invitation status, assigned properties, and last login from Settings and Building Profile.' },
              { icon: Pencil, title: 'Inline Editing', description: 'Edit property details directly from the portfolio view. Per-field editing with instant save and visual confirmation.' },
              { icon: Upload, title: 'CSV Upload Wizard', description: 'Drag-and-drop meter data import with intelligent column mapping, per-row validation, and a guided 4-step flow.' },
              { icon: Camera, title: 'Building Photos', description: 'Upload photos for each property. Photos replace the default map view on building pages, creating a visual portfolio that stakeholders can browse.' },
              { icon: Table, title: 'Customizable Table', description: 'Show or hide any column via an Edit Columns dropdown. Defaults to Property, Type, Fund, Location, Floor Area, Score, Users. Optional: Year Built, Site EUI, GHG, Energy Spend.' },
              { icon: PanelLeftClose, title: 'Collapsible Sidebar', description: 'Clean, space-efficient navigation with a vertical toggle. Collapsed state shows icon-only nav — maximizing workspace for data-heavy portfolio views.' },
            ].map((f, i) => (
              <Card key={i}>
                <f.icon className="w-6 h-6 text-primary-500 mb-3" />
                <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

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

      <section id="integrations" className="py-24 bg-[#0A0A0A]">
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
