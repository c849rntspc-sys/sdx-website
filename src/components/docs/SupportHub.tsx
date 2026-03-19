'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Building2,
  Code,
  Briefcase,
  Search,
  ArrowRight,
  Star,
  BookOpen,
  Zap,
  Shield,
  BarChart3,
  DollarSign,
  FileCheck,
  Link as LinkIcon,
  Globe,
  Key,
  Layers,
} from 'lucide-react';
import type { DocMeta } from '@/lib/docs';

// ---------------------------------------------------------------------------
// Persona definitions
// ---------------------------------------------------------------------------

type Persona = 'owner' | 'developer' | 'consultant';

const PERSONAS: { id: Persona; label: string; description: string; icon: typeof Building2 }[] = [
  {
    id: 'owner',
    label: 'Real Estate Owner',
    description: 'Onboard buildings, submit data, track benchmarks, and earn data dividends',
    icon: Building2,
  },
  {
    id: 'developer',
    label: 'Developer & Third-Party Apps',
    description: 'Integrate via API, contribute data on behalf of owners, build on the substrate',
    icon: Code,
  },
  {
    id: 'consultant',
    label: 'Service Provider & Consultant',
    description: 'Manage client portfolios, access benchmarks, leverage licensed content',
    icon: Briefcase,
  },
];

// Map personas to audience tags used in MDX frontmatter
const PERSONA_AUDIENCES: Record<Persona, string[]> = {
  owner: ['contributor'],
  developer: ['integrator'],
  consultant: ['contributor', 'buyer'],
};

// Recommended topics per persona
const RECOMMENDED: Record<Persona, { title: string; description: string; href: string; icon: typeof Building2 }[]> = {
  owner: [
    { title: 'Adding Your First Property', description: 'Set up property types, addresses, and floor area in minutes', href: '/docs/getting-started/adding-your-first-property', icon: Building2 },
    { title: 'How Benchmarking Works', description: 'Six global standards computed simultaneously from a single submission', href: '/docs/benchmarking', icon: BarChart3 },
    { title: 'Data Quality Scoring', description: 'Understand completeness, coverage, and freshness grades', href: '/docs/benchmarking/data-quality-scoring', icon: Star },
    { title: 'The Data Dividend', description: 'How your contribution earns a share of licensed content revenue', href: '/docs/data-dividend', icon: DollarSign },
    { title: 'Compliance Frameworks', description: 'GRESB, NYC LL97, Boston BERDO, and 13+ more', href: '/docs/benchmarking/compliance-frameworks', icon: FileCheck },
    { title: 'The Platform Is Free', description: 'No fees to use SDX — zero cost to read, write, and benchmark', href: '/docs/pricing/platform-is-free', icon: Zap },
  ],
  developer: [
    { title: 'API Quickstart', description: 'Get your first API call working in under 5 minutes', href: '/docs/integrations/quickstart', icon: Zap },
    { title: 'Authentication', description: 'API keys, OAuth2, and bearer token setup', href: '/docs/api/authentication', icon: Key },
    { title: 'Writing Data on Behalf of Owners', description: 'How to push building and meter data through the API', href: '/docs/integrations/writing-data', icon: Code },
    { title: 'Reading Data on Behalf of Owners', description: 'Retrieve benchmarks, scores, and reports via API', href: '/docs/integrations/reading-data', icon: Layers },
    { title: 'Free to Integrate', description: 'No API fees — read and write at zero cost', href: '/docs/pricing/integrator-pricing', icon: DollarSign },
    { title: 'Code Examples', description: 'Python, JavaScript, cURL, and Ruby samples', href: '/docs/integrations/code-examples', icon: Globe },
  ],
  consultant: [
    { title: 'Getting Started', description: 'Set up your organization and start managing client portfolios', href: '/docs/getting-started', icon: BookOpen },
    { title: 'Submitting Data', description: 'Manual entry, CSV upload, and automated utility feeds', href: '/docs/getting-started/submitting-data', icon: Building2 },
    { title: 'Licensed Content Overview', description: 'Aggregate benchmarks, indices, and data products available', href: '/docs/licensed-content', icon: Shield },
    { title: 'Reports & Exports', description: 'Generate compliance reports and portfolio analytics', href: '/docs/benchmarking/reports-and-exports', icon: FileCheck },
    { title: 'Licensing Terms', description: 'Understand usage rights, restrictions, and redistribution rules', href: '/docs/licensed-content/licensing-terms', icon: LinkIcon },
    { title: 'Pricing & Licensing', description: 'Free platform, licensed content model, and how payments work', href: '/docs/pricing', icon: DollarSign },
  ],
};

// Getting started links per persona
const GETTING_STARTED: Record<Persona, { title: string; href: string }[]> = {
  owner: [
    { title: 'Create an account', href: '/docs/getting-started/creating-an-account' },
    { title: 'Add your first property', href: '/docs/getting-started/adding-your-first-property' },
    { title: 'Submit utility data', href: '/docs/getting-started/submitting-data' },
    { title: 'Understand your dashboard', href: '/docs/getting-started/understanding-your-dashboard' },
    { title: 'Learn how benchmarking works', href: '/docs/benchmarking' },
  ],
  developer: [
    { title: 'API overview', href: '/docs/api' },
    { title: '5-minute quickstart', href: '/docs/integrations/quickstart' },
    { title: 'Set up authentication', href: '/docs/api/authentication' },
    { title: 'Write data on behalf of owners', href: '/docs/integrations/writing-data' },
    { title: 'Explore the sandbox', href: '/docs/integrations/sandbox-environment' },
  ],
  consultant: [
    { title: 'Create an account', href: '/docs/getting-started/creating-an-account' },
    { title: 'Add client properties', href: '/docs/getting-started/adding-your-first-property' },
    { title: 'Submit data for clients', href: '/docs/getting-started/submitting-data' },
    { title: 'Access licensed content', href: '/docs/licensed-content' },
    { title: 'Understand pricing', href: '/docs/pricing' },
  ],
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SupportHub({ allDocs }: { allDocs: DocMeta[] }) {
  const [persona, setPersona] = useState<Persona | null>(null);
  const [query, setQuery] = useState('');

  // Filter docs by persona audiences + search query
  const filteredDocs = useMemo(() => {
    if (!persona) return [];
    const audiences = PERSONA_AUDIENCES[persona];
    let docs = allDocs.filter((d) =>
      d.audience.some((a) => audiences.includes(a))
    );
    if (query.trim()) {
      const q = query.toLowerCase();
      docs = docs.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q)
      );
    }
    return docs;
  }, [persona, query, allDocs]);

  // ---------------------------------------------------------------------------
  // Persona selection screen
  // ---------------------------------------------------------------------------
  if (!persona) {
    return (
      <div className="py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-3">Support Center</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How can we help?</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Select your role to see documentation and guides tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {PERSONAS.map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setPersona(p.id)}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-left transition-all hover:border-primary-500/40 hover:bg-white/[0.07] active:scale-[0.98]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center mb-4 group-hover:bg-primary-500/25 transition-colors">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">{p.label}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary-400 group-hover:text-primary-300">
                  Get started <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Persona-selected hub
  // ---------------------------------------------------------------------------
  const currentPersona = PERSONAS.find((p) => p.id === persona)!;
  const recommended = RECOMMENDED[persona];
  const gettingStarted = GETTING_STARTED[persona];

  return (
    <div className="py-10">
      {/* Persona toggle */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {PERSONAS.map((p) => {
          const Icon = p.icon;
          const isActive = p.id === persona;
          return (
            <button
              key={p.id}
              onClick={() => { setPersona(p.id); setQuery(''); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/40'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {currentPersona.label} Support
        </h1>
        <p className="text-gray-400">{currentPersona.description}</p>
      </div>

      {/* Search */}
      <div className="relative mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${currentPersona.label.toLowerCase()} documentation...`}
          className="w-full pl-12 pr-4 py-3 text-sm rounded-xl border border-white/10 bg-white/5 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50"
        />
      </div>

      {/* Search results */}
      {query.trim() && (
        <div className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
            {filteredDocs.length} result{filteredDocs.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </h2>
          {filteredDocs.length > 0 ? (
            <div className="space-y-2">
              {filteredDocs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="block bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-primary-500/30 hover:bg-white/[0.07] transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{doc.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{doc.description}</p>
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wide text-gray-500 bg-white/5 px-2 py-0.5 rounded shrink-0">
                      {doc.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No results found. Try a different search term.</p>
          )}
        </div>
      )}

      {/* Recommended for you */}
      {!query.trim() && (
        <>
          <div className="mb-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-primary-400" />
              Recommended for you
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommended.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-primary-500/30 hover:bg-white/[0.07] transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-500/15 flex items-center justify-center shrink-0 group-hover:bg-primary-500/25 transition-colors">
                        <Icon className="w-4 h-4 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors">{item.title}</h3>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Getting Started */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan" />
              Getting started
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl divide-y divide-white/10">
              {gettingStarted.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-5 py-3.5 hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-200 group-hover:text-white transition-colors">{item.title}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
