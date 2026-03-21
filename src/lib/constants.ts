// Icon names as strings — resolved at render time in client components
// to avoid passing React components across server/client boundary

// ─── Problem Cards (from pitch deck) ─────────────────────────
export const PROBLEMS = [
  { icon: 'ArrowLeftRight', title: 'Incomparable', description: 'Inconsistent standards and normalization prevent reliable peer comparison.' },
  { icon: 'Shield', title: 'Unauditable', description: 'Fragmented data with no lineage makes audit-grade verification impossible.' },
  { icon: 'Settings', title: 'Innovation Drag', description: 'Resources wasted fixing inputs instead of making decisions.' },
  { icon: 'DollarSign', title: 'Misaligned', description: 'Value created by contributor data is captured entirely by private platform operators.' },
];

// ─── Market Stats ────────────────────────────────────────────
export const MARKET_STATS = [
  { value: '2,400+', label: 'GRESB assessments filed annually' },
  { value: '50+', label: 'U.S. jurisdictions mandating benchmarking' },
  { value: '$268/ton', label: 'NYC LL97 penalty for non-compliance' },
  { value: '63%', label: 'of buildings will exceed 2030 emission caps' },
];

export const ENERGY_STAR_STATS = [
  { value: '25%', label: 'of U.S. commercial space benchmarked' },
  { value: '150K+', label: 'properties actively using the platform' },
  { value: '2.4%/yr', label: 'average energy reduction for users' },
  { value: '50+', label: 'jurisdictions mandating its use' },
];

// ─── Stack Layers ────────────────────────────────────────────
export const STACK_LAYERS = [
  { label: 'VALUE LAYER', description: 'Analytics, CRREM, Assurance, Advisory', note: 'Open competition above the substrate', color: 'navy' as const },
  { label: 'SDX SUBSTRATE', description: 'Definitions, Normalization, Benchmarking', note: 'Neutral, standardized, owner-governed', color: 'primary' as const },
  { label: 'DATA SOURCES', description: 'ENERGY STAR (EPA), Green Button Utilities, Meters, Owners', note: 'Direct API connections — PG&E, Con Ed, National Grid & more', color: 'navy' as const },
];

// ─── Data Dividend Steps ─────────────────────────────────────
export const DIVIDEND_STEPS = [
  { step: 1, title: 'Contribute', description: 'Owners submit verified utility + asset data via approved providers.', icon: 'Database' },
  { step: 2, title: 'Standardize', description: 'SDX normalizes, QA-scores, and establishes audit lineage.', icon: 'Settings' },
  { step: 3, title: 'Benchmark', description: 'SDX licenses aggregated, anonymized benchmarks to the market.', icon: 'TrendingUp' },
  { step: 4, title: 'Share', description: 'Surplus revenue distributed back to contributors as dividends.', icon: 'CheckCircle' },
];

// ─── Flywheel Steps ──────────────────────────────────────────
export const FLYWHEEL_STEPS = ['More Participation', 'Better Benchmarks', 'More Revenue', 'Larger Dividends'];

// ─── Extraction vs. Shared Value ─────────────────────────────
export const COMPARISON = {
  extraction: {
    title: 'Extraction Model',
    subtitle: 'Today',
    items: [
      'Owners pay to submit their own data',
      'Data siloed into proprietary databases',
      'Benchmarks sold back to the contributors who provided them',
      'No owner governance or exit rights',
      'Incentive: maximize lock-in',
    ],
  },
  shared: {
    title: 'Shared Value Model',
    subtitle: 'SDX',
    items: [
      'Platform is completely free for all users — read and write',
      'Licensed content free for contributors\u2019 own internal use',
      'Revenue from third-party licensing shared back as dividends',
      'Owner governance sets all rules',
      'Incentive: maximize participation & trust',
    ],
  },
};

// ─── Features (Platform page) ────────────────────────────────
export const PLATFORM_FEATURES = [
  { icon: 'Globe', title: 'Global Benchmarking', description: '60+ property types across 30+ countries with country-specific emission factors, climate data, and unit systems.' },
  { icon: 'BarChart3', title: 'Multi-Standard Scoring', description: 'Benchmark against SDX, ENERGY STAR, NABERS, EU EPC, CRREM, and GRESB simultaneously.' },
  { icon: 'FileCheck', title: 'Automated Compliance', description: '16+ regulatory and voluntary report frameworks including GRESB, NYC LL97, Boston BERDO, TCFD, and CDP.' },
  { icon: 'Users', title: 'Multi-Actor Access', description: 'Support for owners, authorized representatives, and API integration partners — each with granular permissions and a complete audit trail.' },
  { icon: 'Bot', title: 'AI Assistant (Claude)', description: 'A real AI assistant with live access to your portfolio data — not canned responses. Ask about building performance, energy costs, carbon trends, and get specific, data-driven recommendations.' },
  { icon: 'Search', title: 'Data Quality Audit', description: 'Completeness, coverage, and freshness scoring with limited assurance readiness and meter gap detection.' },
  { icon: 'Zap', title: 'Direct Utility Connections', description: 'Live integrations with PG&E, Con Edison, National Grid, ComEd, SCE, and Ameren via Green Button Connect My Data (OAuth 2.0). Your credentials never touch SDX.' },
  { icon: 'Key', title: 'Scoped API Keys', description: '11 granular permission scopes for machine-to-machine integration. Keys shown once, stored as bcrypt hashes, rate-limited, and instantly revocable.' },
  { icon: 'Link', title: 'Enterprise Integrations', description: 'Connect with Yardi, RealPage, Measurabl, Deepki, Scaler, Cambio, Arc, and more.' },
  { icon: 'ShieldCheck', title: 'Scope 1 & 2 GHG', description: 'Country-specific grid emission factors for 30+ countries with fuel-type breakdowns and renewable energy tracking.' },
];

// ─── Benchmarking Standards ──────────────────────────────────
export const BENCHMARK_STANDARDS = [
  { name: 'SDX Internal', region: 'Global', scale: '1\u2013100 percentile', description: 'Weather-normalized source EUI percentile ranking against all SDX buildings of the same property type.' },
  { name: 'ENERGY STAR', region: 'United States', scale: '1\u2013100 regression', description: 'EPA methodology using multivariate regression with CBECS survey data. 75+ qualifies for certification.' },
  { name: 'NABERS', region: 'Australia', scale: '0\u20136 stars', description: 'Operational energy performance normalized for climate zone, hours of use, and occupancy density.' },
  { name: 'EU EPC', region: 'European Union', scale: 'A\u2013G rating', description: 'Primary energy consumption rating based on building envelope, systems efficiency, and local climate.' },
  { name: 'CRREM', region: 'Global', scale: 'Stranding risk', description: 'Compares GHG intensity against Paris 1.5\u00B0C decarbonization pathways to identify stranding risk year.' },
  { name: 'GRESB', region: 'Global', scale: '0\u2013100 ESG', description: 'Weighted ESG scoring (Management 30%, Performance 70%) covering energy, GHG, water, waste, and certifications.' },
];

// ─── Compliance Frameworks ───────────────────────────────────
export const COMPLIANCE_FRAMEWORKS = {
  voluntary: [
    { name: 'GRESB', region: 'Global', description: 'Global Real Estate Sustainability Benchmark for investor-driven ESG assessment.' },
    { name: 'CRREM', region: 'Global', description: 'Carbon Risk Real Estate Monitor with Paris-aligned decarbonization pathways.' },
    { name: 'ENERGY STAR', region: 'US/Canada', description: 'EPA building performance certification and benchmarking program.' },
    { name: 'LEED Arc', region: 'Global', description: 'USGBC operational performance tracking for LEED-certified buildings.' },
    { name: 'CDP Climate', region: 'Global', description: 'Carbon Disclosure Project climate change questionnaire for corporates.' },
    { name: 'TCFD / ISSB', region: 'Global', description: 'Task Force on Climate-related Financial Disclosures reporting standard.' },
    { name: 'NABERS', region: 'Australia', description: 'National Australian Built Environment Rating System for operational performance.' },
  ],
  regulated: [
    { name: 'EU EPC', region: 'European Union', description: 'Energy Performance Certificate with A\u2013G rating mandated for transactions.' },
    { name: 'NYC LL97', region: 'New York City', description: 'Local Law 97 carbon emission limits with $268/ton penalties.' },
    { name: 'Boston BERDO', region: 'Boston', description: 'Building Energy Reporting and Disclosure Ordinance with net-zero targets.' },
    { name: 'Energize Denver', region: 'Denver', description: 'Performance requirements for commercial and multifamily buildings.' },
    { name: 'WA EWRB', region: 'Washington State', description: 'Energy performance standards for existing commercial buildings.' },
    { name: 'DC BEPS', region: 'Washington DC', description: 'Building Energy Performance Standards under the Clean Energy DC Act.' },
    { name: 'CA Title 24', region: 'California', description: 'California Energy Commission building energy efficiency standards.' },
    { name: 'UK MEES', region: 'United Kingdom', description: 'Minimum Energy Efficiency Standards for commercial property lettings.' },
  ],
};

// ─── Integrations ────────────────────────────────────────────
export const INTEGRATIONS = {
  pms: ['Yardi Voyager', 'RealPage', 'Entrata', 'MRI Software', 'AppFolio', 'Buildium'],
  benchmarking: ['ENERGY STAR Portfolio Manager', 'CBRE Asset IQ', 'JLL Azara', 'Arc by USGBC'],
  sustainability: ['Measurabl', 'Deepki', 'Scaler', 'Cambio', 'Arc by USGBC'],
  utilities: [
    'Green Button', 'EDF', 'Enel', 'ENGIE', 'TEPCO', 'Duke Energy',
    'Southern California Edison', 'PG&E', 'National Grid', 'Con Edison',
    'Origin Energy', 'APS', 'Eversource', 'Exelon', 'FPL',
    'Iberdrola', 'CenterPoint', 'Dominion', 'Entergy', 'FirstEnergy',
    'PPL', 'Sempra', 'Southern Company', 'Xcel Energy', 'Ameren',
  ],
};

// ─── Governance ──────────────────────────────────────────────
export const GOVERNANCE = {
  owner: [
    { icon: 'Users', text: 'Owner-led board sets charter, conduct rules, and anonymization thresholds' },
    { icon: 'Shield', text: 'Commercialization boundary: no sale of raw owner-identifiable data' },
    { icon: 'ShieldCheck', text: 'Portability and unconditional exit rights are charter-level commitments' },
    { icon: 'DollarSign', text: 'Surplus allocation governed by owners: dividends, price cuts, or reinvestment' },
  ],
  operator: [
    { icon: 'Settings', text: 'Builds and runs platform under SLA with performance KPIs' },
    { icon: 'Landmark', text: 'Implements governance rules, publishes change logs and financials' },
    { icon: 'ArrowLeftRight', text: 'Open integration parity: published APIs, equal terms for all' },
    { icon: 'RefreshCw', text: 'Periodic re-tender pathway prevents monopoly lock-in' },
  ],
};

// ─── Ecosystem Benefits ──────────────────────────────────────
export const ECOSYSTEM_BENEFITS = [
  { title: 'Eliminate reconciliation friction', description: 'Stop rebuilding normalization logic. SDX handles definitions, weather normalization, and unit conversion so you can focus on value-add features.' },
  { title: 'Access global benchmarks', description: 'Tap into the largest comparable benchmark dataset globally. Free to read and write for all ecosystem participants contributing data on behalf of owners.' },
  { title: 'Better data, better outcomes', description: 'Your customers get higher-quality, audit-ready inputs. Better data quality means better outcomes from your analytics and advisory tools.' },
  { title: 'Expand your addressable market', description: 'SDX drives adoption across the industry. More buildings on the substrate means more potential customers for your value-layer products.' },
];

// ─── FAQ ─────────────────────────────────────────────────────
export const FAQ = [
  { question: 'Does sharing data help my competitors?', answer: 'SDX only publishes aggregated, anonymized benchmarks. Your building-level data is never shared. Suppression thresholds prevent reverse-engineering.' },
  { question: 'Why not just use my existing vendor?', answer: 'Vendors optimize for lock-in. SDX provides the neutral substrate with open APIs and full portability. Your existing tools plug in \u2014 they don\'t get replaced.' },
  { question: 'What if I invest and others free-ride?', answer: 'The dividend formula rewards quality and completeness. Early movers earn the largest dividends. The platform is free for everyone, but only contributors receive dividends from licensed content revenue.' },
  { question: 'How is this different from GRESB?', answer: 'GRESB is a rating framework. SDX is the measurement substrate beneath it \u2014 standardizing definitions so GRESB, CRREM, and regulators get comparable inputs.' },
  { question: 'What are the revenue sources?', answer: 'Board-approved licensed content only \u2014 aggregate benchmark products, regulator-grade data packs, index partnerships, and certification programs. The platform itself is free. Contributors receive all licensed content free for their own internal use.' },
  { question: 'How is the dividend calculated?', answer: 'The formula is objective and auditable \u2014 weighted by eligible buildings, floor area, data completeness, and freshness. One dividend per building per underlying owner, regardless of how many software platforms submit that building\u2019s data.' },
];

// ─── Early Adopter Steps ─────────────────────────────────────
export const EARLY_ADOPTER_STEPS = [
  { step: 1, title: 'Create a Free Account', description: 'Sign up in minutes. Add your first building and start receiving benchmarks — at zero cost.', icon: 'Users' },
  { step: 2, title: 'Commit Pilot Assets', description: '2\u20133 jurisdictions, 1\u20132 asset classes. Define success metrics and integration priorities together.', icon: 'Building2' },
  { step: 3, title: 'Lend Your Credibility', description: 'Your name signals to the market that this is serious. Early movers set the rules and earn the largest dividends.', icon: 'ShieldCheck' },
  { step: 4, title: 'Co-Fund the MVP', description: 'Help fund the initial build. Your investment is returned through dividends as the platform scales.', icon: 'Zap' },
];

// ─── Live Data Connections (go-live capabilities) ───────────
export const LIVE_CONNECTIONS = {
  utility: [
    { name: 'PG&E', protocol: 'Green Button Connect My Data', auth: 'OAuth 2.0', status: 'Live' },
    { name: 'Con Edison', protocol: 'Green Button Connect My Data', auth: 'OAuth 2.0', status: 'Ready' },
    { name: 'National Grid', protocol: 'Green Button Connect My Data', auth: 'OAuth 2.0', status: 'Ready' },
    { name: 'ComEd (Exelon)', protocol: 'Green Button Connect My Data', auth: 'OAuth 2.0', status: 'Ready' },
    { name: 'SCE', protocol: 'Green Button Connect My Data', auth: 'OAuth 2.0', status: 'Ready' },
    { name: 'Ameren', protocol: 'Green Button Connect My Data', auth: 'OAuth 2.0', status: 'Ready' },
  ],
  standards: [
    { name: 'ENERGY STAR Portfolio Manager', protocol: 'EPA Web Services API', auth: 'Property sharing', status: 'Live' },
  ],
  architecture: [
    'NAESB ESPI standard — any Green Button-compliant utility can be added with configuration only',
    'OAuth 2.0 authorization — users authorize directly on the utility\'s website; credentials never touch SDX',
    'Automated interval data (15-min/hourly), billing summaries, and cost import',
    'ENERGY STAR score sync, meter import, and consumption data pull from EPA\'s official API',
  ],
};

// ─── App URL ─────────────────────────────────────────────────
export const APP_URL = 'https://balanced-light-production-ce6f.up.railway.app';

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Platform', href: '/platform' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Data Dividend', href: '/data-dividend' },
  { label: 'Support', href: '/docs' },
  { label: 'About Us', href: '/governance' },
];

// ─── Founder ─────────────────────────────────────────────────
export const FOUNDER = {
  name: 'Matt Ellis',
  title: 'Co-Founder & Chairman, SDX',
  previousRole: 'Co-Founder & Executive Chairman, Measurabl · Formerly Director of Sustainability Solutions, CBRE',
  quote: 'The measurement layer itself needs to be neutral. No single company should own the substrate the entire industry depends on.',
  stats: [
    { value: '$190M', label: 'Venture Capital Raised' },
    { value: '23B', label: 'Sq Ft on Platform' },
    { value: '90+', label: 'Countries Covered' },
    { value: '6x', label: 'ENERGY STAR Partner of Year' },
  ],
};
