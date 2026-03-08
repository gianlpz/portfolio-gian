import Link from "next/link";

// Case Hero Section
function CaseHero() {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 md:px-8 lg:px-16 pt-24 pb-8 max-w-7xl mx-auto">
      <div className="flex-1 max-w-xl text-center lg:text-left">
        <Link
          href="/#projects"
          className="inline-block text-white/60 text-sm mb-6 hover:text-coral transition-colors"
        >
          &larr; Back to Projects
        </Link>

        <div className="mb-4 flex justify-center lg:justify-start">
          <svg
            className="w-12 h-12"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="NHS Wait Times logo"
          >
            <defs>
              <linearGradient id="hero-nhs-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#005eb8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#003d7a" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="hero-nhs-bar" x1="25" y1="40" x2="99" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="hero-nhs-shine" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                <stop offset="50%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <filter id="hero-nhs-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width="120" height="120" rx="28" fill="url(#hero-nhs-bg)" />
            <rect x="0" y="0" width="120" height="55" rx="28" fill="rgba(255,255,255,0.1)" />
            <circle cx="60" cy="65" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            <rect x="25" y="75" width="14" height="25" rx="4" fill="url(#hero-nhs-bar)" />
            <rect x="45" y="55" width="14" height="45" rx="4" fill="url(#hero-nhs-bar)" />
            <rect x="65" y="40" width="14" height="60" rx="4" fill="url(#hero-nhs-bar)" />
            <rect x="85" y="60" width="14" height="40" rx="4" fill="url(#hero-nhs-bar)" />
            <polygon points="60,8 35,42 60,36" fill="url(#hero-nhs-shine)" opacity="0.4" />
            <circle cx="32" cy="68" r="3" fill="white" opacity="0.6" filter="url(#hero-nhs-glow)" />
            <circle cx="52" cy="48" r="3" fill="white" opacity="0.6" filter="url(#hero-nhs-glow)" />
            <circle cx="72" cy="33" r="3" fill="white" opacity="0.6" filter="url(#hero-nhs-glow)" />
            <circle cx="92" cy="53" r="3" fill="white" opacity="0.6" filter="url(#hero-nhs-glow)" />
            <line x1="32" y1="68" x2="52" y2="48" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" filter="url(#hero-nhs-glow)" />
            <line x1="52" y1="48" x2="72" y2="33" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" filter="url(#hero-nhs-glow)" />
            <line x1="72" y1="33" x2="92" y2="53" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" filter="url(#hero-nhs-glow)" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
          NHS Wait Times
        </h1>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6">
          A data dashboard visualizing NHS hospital wait times across 500+
          providers and 24 specialties&mdash;built with Next.js 16, Recharts,
          and a Python data pipeline processing official RTT statistics.
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
          <span className="meta-badge">Data Visualization</span>
          <span className="meta-badge">Public Data</span>
          <span className="meta-badge">Recharts</span>
          <span className="meta-badge">Next.js 16</span>
          <span className="meta-badge">TypeScript</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://nhs-visualizer.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Live Demo
          </a>
          <a
            href="https://github.com/gianlpz/nhs-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View Source
          </a>
        </div>
      </div>

      {/* Right side — dashboard mockup */}
      <div className="flex-1 mt-8 lg:mt-0 flex items-center justify-center">
        <div className="w-72 md:w-80 rounded-2xl bg-[#0a0a0f] border border-white/10 shadow-2xl overflow-hidden">
          {/* Dashboard header */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#005eb8] to-[#41b6e6] flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="25" y="75" width="14" height="25" rx="3" fill="white" />
                <rect x="45" y="55" width="14" height="45" rx="3" fill="white" />
                <rect x="65" y="40" width="14" height="60" rx="3" fill="white" />
                <rect x="85" y="60" width="14" height="40" rx="3" fill="white" />
              </svg>
            </div>
            <span className="text-white/80 text-sm font-medium">
              NHS Wait Times
            </span>
          </div>
          {/* Stats row */}
          <div className="px-4 pt-3 grid grid-cols-3 gap-2">
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <p className="text-[#41b6e6] text-lg font-bold">507</p>
              <p className="text-white/40 text-[10px]">Providers</p>
            </div>
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <p className="text-[#41b6e6] text-lg font-bold">24</p>
              <p className="text-white/40 text-[10px]">Specialties</p>
            </div>
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <p className="text-[#41b6e6] text-lg font-bold">62%</p>
              <p className="text-white/40 text-[10px]">Within 18wk</p>
            </div>
          </div>
          {/* Mini bar chart */}
          <div className="px-4 py-3">
            <div className="flex items-end gap-1 h-16">
              {[40, 65, 55, 80, 70, 45, 75, 60, 85, 50, 70, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(to top, #005eb8, #41b6e6)`,
                    opacity: 0.7 + (i * 0.025),
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-white/30 text-[9px]">Jan</span>
              <span className="text-white/30 text-[9px]">Dec</span>
            </div>
          </div>
          {/* Search input mockup */}
          <div className="px-4 pb-3">
            <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
              <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span className="text-white/30 text-xs">Search hospitals...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Overview Section
function Overview() {
  const items = [
    {
      title: "The Problem",
      content:
        "NHS publishes wait time data as massive CSV files with millions of rows. The raw data is inaccessible to patients, journalists, and researchers who want to understand how long they might wait at their local hospital.",
    },
    {
      title: "The Solution",
      content:
        "A searchable dashboard that processes 12 months of RTT data into interactive charts. Users can search by hospital, compare providers side-by-side, and drill into specialty-level wait times.",
    },
    {
      title: "My Role",
      content:
        "Sole developer — built the Python data pipeline, designed the JSON schema, implemented 4 Next.js pages with interactive Recharts visualizations, and deployed to Vercel.",
    },
    {
      title: "Key Deliverables",
      content:
        "A Python pipeline processing raw CSVs into optimized JSON, 4 interactive pages (home, hospital detail, specialty view, comparison), fuzzy search across 500+ providers, and responsive chart components.",
    },
  ];

  return (
    <section id="overview" className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="text-coral text-sm font-semibold uppercase tracking-wider mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Architecture & Design Decisions Section
function Architecture() {
  const decisions = [
    {
      title: "Static JSON Over Database",
      content:
        "NHS data updates monthly, not in real-time. Pre-processing CSVs into static JSON files eliminates database costs and complexity while enabling instant page loads with zero cold starts.",
    },
    {
      title: "Python + TypeScript Split",
      content:
        "Python handles the heavy data parsing (pandas-like CSV processing) while TypeScript handles the frontend. Each language plays to its strengths — data munging vs. type-safe UI.",
    },
    {
      title: "Server Components First",
      content:
        "Data loading happens in React Server Components, keeping JSON parsing off the client bundle. Only interactive chart components use 'use client' — minimizing JavaScript shipped to the browser.",
    },
    {
      title: "Recharts for Visualization",
      content:
        "Recharts provides composable, React-native chart components with built-in responsiveness and tooltips. No need to learn a separate charting DSL — it's just JSX.",
    },
    {
      title: "Parse-Time Aggregation",
      content:
        "Statistics like 18-week compliance rates and median wait times are computed once during the Python parse step, not on every page load. The frontend simply reads pre-calculated values.",
    },
  ];

  const principles = [
    {
      title: "Process Once, Read Many",
      content:
        "Heavy computation happens in the build pipeline, not at request time — pre-calculate everything the UI needs",
    },
    {
      title: "Type the Boundaries",
      content:
        "TypeScript interfaces define the JSON schema contract between the Python pipeline and the Next.js frontend",
    },
    {
      title: "Progressive Disclosure",
      content:
        "National stats → hospital list → hospital detail → specialty breakdown — each level reveals more detail",
    },
    {
      title: "Mobile-First Charts",
      content:
        "ResponsiveContainer ensures charts adapt to any viewport — critical when most NHS patients check on their phones",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Architecture & Design Decisions
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Every architectural choice was driven by one question: how do we make
          millions of rows of NHS data instantly accessible and understandable?
        </p>

        <h3 className="text-white text-xl font-semibold mb-4">
          Key Technical Decisions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {decisions.map((decision) => (
            <div key={decision.title} className="insight-card">
              <h4 className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
                {decision.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {decision.content}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-white text-xl font-semibold mb-4">
          Engineering Principles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((principle) => (
            <div key={principle.title} className="principle-card">
              <h4 className="text-coral font-semibold mb-2">
                {principle.title}
              </h4>
              <p className="text-white/60 text-sm">{principle.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Data Pipeline Section
function DataPipeline() {
  const sourceFiles = [
    "parse-nhs-data.py",
    "providers.json",
    "trends.json",
    "metadata.json",
  ];

  const steps = [
    {
      label: "Step 1",
      title: "Download CSVs",
      description:
        "Fetch 12 monthly RTT CSV files from NHS England's public data portal. Each file contains hundreds of thousands of rows covering every provider-specialty-commissioner combination.",
      detail: "Using official Incomplete Pathways (Part 2) data — patients still waiting for treatment.",
    },
    {
      label: "Step 2",
      title: "Parse & Filter",
      description:
        "Read each CSV with Python, filtering to only Incomplete Pathways rows. Extract provider codes, specialty codes, and the wait time distribution columns (0-1 weeks through 52+ weeks).",
      detail: "Filtering early reduces memory usage and keeps only the data the dashboard actually needs.",
    },
    {
      label: "Step 3",
      title: "Aggregate",
      description:
        "Sum wait time counts across all commissioners for each provider-specialty pair. This collapses the commissioner dimension, giving one row per provider per specialty per month.",
      detail: "Patients care about their hospital's total wait, not which CCG referred them.",
    },
    {
      label: "Step 4",
      title: "Compute Statistics",
      description:
        "Calculate 18-week compliance rates, estimated median wait times, and total patients waiting from the aggregated distribution data. These become the headline numbers on each page.",
      detail: "Pre-computing stats means the frontend never needs to process raw distributions.",
    },
    {
      label: "Step 5",
      title: "Output JSON",
      description:
        "Write structured JSON files: providers.json (hospital list with stats), trends.json (monthly time series), and metadata.json (specialty names, national averages). Ready for Next.js to import.",
      detail: "Three focused files instead of one monolith — each page loads only what it needs.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          The Data Pipeline
        </h2>
        <p className="text-white/70 text-lg mb-6 max-w-3xl">
          Transforming raw NHS CSV files into optimized JSON that powers
          instant dashboard loads&mdash;all computed once at build time.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {sourceFiles.map((doc) => (
            <span key={doc} className="bank-badge">
              {doc}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step.title} className="finding-card">
              <span className="inline-block bg-[#005eb8]/20 text-[#41b6e6] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4">
                {step.label}
              </span>
              <h4 className="text-white font-semibold mb-2">{step.title}</h4>
              <p className="text-white/60 text-sm mb-4">{step.description}</p>
              <p>
                <span className="text-coral font-medium text-sm">
                  Why:
                </span>{" "}
                <span className="text-white/70 text-sm">{step.detail}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features in Action Section
function FeaturesInAction() {
  const scenarios = [
    {
      title: "Hospital Search",
      description:
        "Fuzzy search across 500+ NHS providers. Users can type partial names, handle typos, and instantly find their local hospital — no need to know the exact NHS provider code.",
      trace: `Search: "guys and st thomas"

Results:
  1. Guy's and St Thomas' NHS Foundation Trust
     ├─ 18-week: 58.2%  |  Median: 14.3 wks
     └─ Total waiting: 142,847 patients

  2. St Thomas' Medical Group
     ├─ 18-week: 71.4%  |  Median: 11.2 wks
     └─ Total waiting: 3,241 patients`,
    },
    {
      title: "Hospital Detail Drill-Down",
      description:
        "Click any hospital to see a full breakdown — headline stats, a 12-month trend chart, and wait times for each specialty. Progressive disclosure lets users go as deep as they need.",
      trace: `Hospital: Guy's and St Thomas' NHS Trust

  18-Week Compliance:    58.2%  (national: 62.4%)
  Median Wait:           14.3 weeks
  Total Waiting:         142,847

  Trend: [chart showing 12-month compliance]

  Specialties:
    Ophthalmology         42.1%  ▼
    Trauma & Orthopaedics 51.3%  ▼
    General Surgery       63.7%  ▲
    Cardiology            71.2%  ▲`,
    },
    {
      title: "Side-by-Side Comparison",
      description:
        "Compare up to 3 hospitals on the same chart. Overlaid trend lines make it easy to see which hospital is improving and which is falling behind — useful for patients choosing where to be referred.",
      trace: `Comparing:
  [1] Guy's and St Thomas'
  [2] King's College Hospital
  [3] University College London

  18-Week Compliance Trends:
  Month    Guy's   King's   UCL
  Jan      55.1%   48.3%   61.2%
  Mar      56.8%   50.1%   62.4%
  Jun      57.4%   52.7%   60.8%
  Sep      58.0%   55.2%   63.1%
  Dec      58.2%   56.8%   64.5%`,
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Features in Action
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-3xl">
          Three scenarios showing how users interact with the
          dashboard&mdash;from search to deep comparison.
        </p>

        <div className="space-y-16">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1">
                <h3 className="text-coral text-xl font-semibold mb-3">
                  {scenario.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {scenario.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <pre className="bg-[#0a0a0f] border border-white/10 rounded-xl p-6 font-mono text-sm text-white/70 overflow-x-auto whitespace-pre-wrap">
                  {scenario.trace}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Development Process Section
function DevelopmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Data Pipeline",
      description:
        "Built the Python script to parse NHS RTT CSVs, aggregate across commissioners, compute statistics, and output structured JSON. Iterated on the schema until it matched exactly what the frontend needed.",
    },
    {
      number: "02",
      title: "Core Pages",
      description:
        "Implemented 4 Next.js routes: homepage with search and national stats, hospital detail with specialty breakdown, specialty ranking view, and side-by-side comparison page.",
    },
    {
      number: "03",
      title: "Visualization",
      description:
        "Built responsive Recharts components for trend lines, bar charts, and comparison overlays. Added custom tooltips, color-coded compliance indicators, and mobile-friendly layouts.",
    },
    {
      number: "04",
      title: "Search & Polish",
      description:
        "Implemented fuzzy search with Fuse.js, added loading states, refined the responsive layout for mobile users, and deployed to Vercel with optimized static file serving.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Development Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="text-3xl font-bold text-[#41b6e6] mb-4">
                {step.number}
              </div>
              <h3 className="text-white font-semibold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Key Technical Features Section
function TechnicalFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M3 3v18h18" strokeLinecap="round" />
          <rect x="7" y="13" width="3" height="5" rx="1" fill="white" opacity="0.8" />
          <rect x="12" y="9" width="3" height="9" rx="1" fill="white" opacity="0.8" />
          <rect x="17" y="5" width="3" height="13" rx="1" fill="white" opacity="0.8" />
        </svg>
      ),
      title: "Data Pipeline",
      description:
        "Python script processes 12 months of NHS RTT CSVs into optimized JSON — aggregating across commissioners, computing statistics, and outputting files ready for the frontend.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Interactive Charts",
      description:
        "Recharts-powered trend lines and bar charts with custom tooltips, responsive containers, and color-coded compliance indicators that adapt to any screen size.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" strokeLinecap="round" />
        </svg>
      ),
      title: "Fuzzy Search",
      description:
        "Fuse.js-powered search across 500+ hospital names with typo tolerance and instant results. Users find their local hospital without knowing the exact NHS provider name.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="2" y="3" width="8" height="18" rx="2" />
          <rect x="14" y="3" width="8" height="18" rx="2" />
          <path d="M6 8h0M18 8h0" strokeLinecap="round" />
        </svg>
      ),
      title: "Hospital Comparison",
      description:
        "Compare up to 3 hospitals side-by-side with overlaid trend lines. Patients and researchers can instantly see which providers are improving or falling behind.",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 9h16M9 4v16" />
        </svg>
      ),
      title: "Server Component Architecture",
      description:
        "Data loading happens in React Server Components, keeping JSON parsing off the client. Only chart components use 'use client' — minimizing the JavaScript bundle.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Key Technical Features
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Five capabilities that turn raw NHS data into an accessible,
          interactive dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="mvp-feature-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#005eb8] to-[#41b6e6] flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tech Stack Section
function TechStack() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Tech Stack & Architecture
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Four layers working together&mdash;from raw CSV data to interactive
          browser charts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Data Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Python 3 (CSV parsing)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                NHS RTT CSV files
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Static JSON output
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                12 months of data
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Frontend Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Next.js 16 App Router
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                React 19
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                TypeScript
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Tailwind CSS v4
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">
              Visualization Layer
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Recharts 3
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Responsive containers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Custom tooltips
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Fuse.js fuzzy search
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">
              Infrastructure Layer
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Vercel (hosting)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                Static file serving
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                GitHub (source)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#41b6e6]">&bull;</span>
                No database needed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Learnings & Outcomes Section
function Learnings() {
  const learnings = [
    "Building a data pipeline taught me to think about data shape before writing any frontend code — the JSON schema drives everything",
    "React Server Components are perfect for data dashboards — heavy JSON parsing stays on the server, only interactive charts need client JS",
    "Recharts' composable API made complex visualizations approachable — trend lines, tooltips, and responsive layouts with just JSX",
    "Public data is messy — NHS CSVs have inconsistent provider names, missing months, and edge cases that require defensive parsing",
    "Progressive disclosure (national → hospital → specialty) keeps the dashboard from being overwhelming despite having 500+ providers",
    "Managing comparison state across URL params taught me practical patterns for shareable, bookmarkable dashboard views",
  ];

  const skills = [
    "Data Visualization",
    "Data Pipelines",
    "Python",
    "Recharts",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Server Components",
    "Tailwind CSS",
    "Public Data",
    "Responsive Design",
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Learnings & Outcomes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-coral text-xl font-semibold mb-4">
              What I Learned
            </h3>
            <ul className="space-y-3">
              {learnings.map((learning) => (
                <li
                  key={learning}
                  className="text-white/70 flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41b6e6] mt-2 flex-shrink-0" />
                  {learning}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-coral text-xl font-semibold mb-4">
              Skills Demonstrated
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 text-center bg-gradient-to-b from-[#0a0a0f] to-[#0f1419]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explore NHS Wait Times
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Search hospitals, compare providers, and explore the data yourself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://nhs-visualizer.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Live Demo
          </a>
          <a
            href="https://github.com/gianlpz/nhs-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function NHSVisualizerPage() {
  return (
    <main>
      <CaseHero />
      <Overview />
      <Architecture />
      <DataPipeline />
      <FeaturesInAction />
      <DevelopmentProcess />
      <TechnicalFeatures />
      <TechStack />
      <Learnings />
      <CTA />
    </main>
  );
}
