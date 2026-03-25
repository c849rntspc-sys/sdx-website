// Icon names as strings — resolved at render time in client components
// to avoid passing React components across server/client boundary

// ─── Problem Cards (from pitch deck) ─────────────────────────
export const PROBLEMS = [
  { icon: 'ArrowLeftRight', title: 'Not Comparable', description: 'Every platform normalizes differently. A building scored in one system can\'t be meaningfully compared to a building scored in another. This makes cross-portfolio and cross-border analysis unreliable.' },
  { icon: 'Shield', title: 'Not Auditable', description: 'Data moves through multiple systems with no shared lineage. When an investor or regulator asks "where did this number come from?" — the answer is often incomplete.' },
  { icon: 'Settings', title: 'Resources Spent on Inputs, Not Decisions', description: 'Sustainability teams spend a disproportionate share of their time collecting, cleaning, and reconciling data. The analysis and decision-making that data should enable gets squeezed.' },
  { icon: 'DollarSign', title: 'Value Extracted, Not Shared', description: 'Owners submit their data to platforms that aggregate it into benchmarks and sell those benchmarks back — often to the same owners who provided the inputs. The economics flow one way.' },
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
    title: 'How it works today',
    subtitle: 'Current model',
    items: [
      'Owners pay subscription fees to submit their own building data',
      'That data is aggregated into proprietary benchmark databases the owner doesn\u2019t control',
      'Benchmarks derived from contributed data are sold — sometimes back to the same contributors',
      'No governance rights, no data portability guarantees, no exit provisions',
      'The platform\u2019s incentive is to maximize lock-in and switching costs',
    ],
  },
  shared: {
    title: 'How SDX works',
    subtitle: 'Shared value model',
    items: [
      'The platform is free for everyone — owners, consultants, and software partners read and write at zero cost',
      'Contributors receive all licensed content free for their own internal use',
      'Revenue from third-party licensing of anonymized benchmarks is shared back as dividends',
      'An owner-led board sets the rules: data boundaries, product approvals, pricing, and surplus allocation',
      'The incentive structure rewards participation and data quality, not lock-in',
    ],
  },
};

// ─── Features (Platform page) ────────────────────────────────
export const PLATFORM_FEATURES = [
  { icon: 'Globe', title: 'Global coverage', description: '60+ property types across 30+ countries. Country-specific emission factors, climate data, and unit systems are built in — you don\u2019t configure them.' },
  { icon: 'BarChart3', title: 'Six benchmarks from one submission', description: 'SDX, ENERGY STAR, NABERS, EU EPC, CRREM, and GRESB scores computed simultaneously from the same underlying data.' },
  { icon: 'FileCheck', title: 'Compliance reporting', description: 'Maps to 16+ regulatory and voluntary frameworks: GRESB, NYC LL97, Boston BERDO, TCFD, CDP, and others. Select the frameworks relevant to your portfolio.' },
  { icon: 'Users', title: 'Owner, consultant, and API access', description: 'Owners manage their portfolios directly. Consultants switch between client organizations. Software platforms integrate via scoped API keys. Each access model is tailored.' },
  { icon: 'Bot', title: 'AI assistant (Claude)', description: 'Powered by Claude (Anthropic). The assistant has access to your actual portfolio data — property count, GHG totals, scores, costs — and answers questions with specific references to your buildings.' },
  { icon: 'Search', title: 'Data quality scoring', description: 'Per-property scoring across timeliness, accuracy (actual vs. estimated readings), and completeness. Letter grades, meter gap detection, and limited assurance readiness tracking.' },
  { icon: 'Zap', title: 'Utility connections', description: 'PG&E, Con Edison, National Grid, ComEd, SCE, and Ameren via Green Button Connect My Data (OAuth 2.0). Users authorize on the utility\u2019s site — credentials never touch SDX.' },
  { icon: 'Key', title: 'Scoped API keys', description: '11 permission scopes for machine-to-machine integration. Keys are shown once at creation, stored as bcrypt hashes, rate-limited, and can be revoked instantly.' },
  { icon: 'Link', title: 'Platform integrations', description: 'Yardi, RealPage, Measurabl, Deepki, Scaler, Cambio, Arc, and others. SDX connects to the systems your portfolio already uses.' },
  { icon: 'ShieldCheck', title: 'GHG calculations (Scope 1 & 2)', description: '6 published emission factor databases: EPA GHG Hub, eGRID, UK DEFRA, IEA, IPCC, and EDGAR. Organizations can override individual factors.' },
  { icon: 'Pencil', title: 'Inline property editing', description: 'Edit property details directly in the portfolio table. Per-field editing with instant save — no separate edit pages or modal dialogs.' },
  { icon: 'Upload', title: 'CSV meter upload', description: 'Drag-and-drop CSV import with column mapping, per-row validation, and a 4-step guided flow. Works with utility bill exports from any format.' },
  { icon: 'MapPin', title: 'Auto-geocoding', description: 'Properties are geocoded when created or updated. Batch geocoding available for existing portfolios.' },
  { icon: 'Table', title: 'Portfolio table view', description: 'Year Built, Annual Energy Spend (with actual/estimated indicators), and performance Score columns for quick portfolio scanning.' },
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
  { title: 'Stop rebuilding normalization logic', description: 'Every sustainability platform writes its own code for weather normalization, unit conversion, and property type classification. SDX handles this at the substrate layer — so you don\'t have to maintain it per client.' },
  { title: 'Consistent, comparable inputs', description: 'When your customers\' data is standardized before it reaches your platform, your analytics, advisory, and compliance outputs improve. The quality of your work depends on the quality of the inputs.' },
  { title: 'Free to read, free to write', description: 'There are no API fees, no per-call charges, and no licensing costs for contributing or consuming data on behalf of owners. The platform is free for all ecosystem participants.' },
  { title: 'More buildings on the substrate means more potential customers for you', description: 'As SDX adoption grows, more buildings produce standardized data that your products can work with. The substrate expanding is your addressable market expanding.' },
];

// ─── FAQ ─────────────────────────────────────────────────────
export const FAQ = [
  { question: 'If I contribute data, does that help my competitors?', answer: 'No. SDX only publishes aggregated, anonymized benchmarks — never building-level data. Suppression thresholds ensure that individual properties cannot be reverse-engineered from published outputs. Your data contributes to better market benchmarks without exposing your portfolio.' },
  { question: 'I already have a sustainability platform. Why would I use SDX?', answer: 'You probably wouldn\'t replace your existing tools. SDX sits beneath them as measurement infrastructure — standardizing definitions and normalization so the data flowing into your existing systems is consistent and comparable. Your current platforms can integrate with SDX\'s open API, or you can use SDX directly alongside them.' },
  { question: 'What prevents free-riders from benefiting without contributing?', answer: 'The platform is free for everyone — that\'s by design. But only data contributors receive dividends from licensed content revenue, and the dividend formula weights quality and completeness. Early movers with thorough data earn the largest share. The incentive is to participate, not to wait.' },
  { question: 'How is SDX different from GRESB?', answer: 'GRESB is a rating and assessment framework. SDX is the measurement substrate beneath it — standardizing the property types, normalization methods, and emission factors so that GRESB, CRREM, regulators, and every other framework receives comparable inputs. They address different layers of the same problem.' },
  { question: 'Where does the money come from?', answer: 'Board-approved licensed content only: aggregate benchmark datasets, regulator-grade data packs, index partnerships, and certification programs. The platform itself is free. No subscription fees, no per-call API charges. Contributors receive all licensed content free for their own internal use.' },
  { question: 'How is the dividend calculated?', answer: 'The formula weights four variables: number of eligible buildings, total floor area, data quality score, and whole-building data completeness. It is objective, auditable, and published. One dividend per building per underlying owner — regardless of how many software platforms submit that building\'s data. Formula changes require owner supermajority on the board.' },
];

// ─── Early Adopter Steps ─────────────────────────────────────
export const EARLY_ADOPTER_STEPS = [
  { step: 1, title: 'Create a free account', description: 'Add your first building and start receiving benchmarks. No credit card, no sales call, no trial period.', icon: 'Users' },
  { step: 2, title: 'Start with a pilot', description: 'Pick 2\u20133 jurisdictions and 1\u20132 asset classes. See how SDX handles your data before making any broader commitment.', icon: 'Building2' },
  { step: 3, title: 'Shape the governance', description: 'Early participants help define the charter, data standards, and product roadmap. The rules are being written now.', icon: 'ShieldCheck' },
  { step: 4, title: 'Earn the first dividends', description: 'As licensed content revenue begins, contributors with the earliest and highest-quality data receive the largest share.', icon: 'Zap' },
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
  quote: 'I spent a decade building a sustainability data company. The thing I learned is that the measurement layer itself needs to be neutral — no single company should own the substrate the entire industry depends on. That\u2019s why SDX is structured as a not-for-profit.',
  stats: [
    { value: '$190M', label: 'Venture Capital Raised at Measurabl' },
    { value: '23B', label: 'Sq Ft Benchmarked' },
    { value: '90+', label: 'Countries' },
    { value: '6x', label: 'ENERGY STAR Partner of Year' },
  ],
};
