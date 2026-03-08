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
            aria-label="HealthBridge logo"
          >
            <defs>
              <linearGradient id="hero-hb-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#065f5b" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="hero-hb-cross" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#99f6e4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="hero-hb-shine" x1="0" y1="0" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                <stop offset="50%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <filter id="hero-hb-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width="120" height="120" rx="28" fill="url(#hero-hb-bg)" />
            <rect x="0" y="0" width="120" height="55" rx="28" fill="rgba(255,255,255,0.1)" />
            <g transform="translate(60,60)">
              <circle r="36" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <rect x="-10" y="-30" width="20" height="60" rx="4" fill="url(#hero-hb-cross)" />
              <rect x="-30" y="-10" width="60" height="20" rx="4" fill="url(#hero-hb-cross)" />
            </g>
            <polygon points="60,10 35,45 60,38" fill="url(#hero-hb-shine)" opacity="0.4" />
            <circle cx="30" cy="30" r="3" fill="white" opacity="0.5" filter="url(#hero-hb-glow)" />
            <circle cx="90" cy="30" r="2.5" fill="white" opacity="0.4" filter="url(#hero-hb-glow)" />
            <circle cx="30" cy="90" r="2.5" fill="white" opacity="0.3" filter="url(#hero-hb-glow)" />
            <circle cx="90" cy="90" r="3" fill="white" opacity="0.4" filter="url(#hero-hb-glow)" />
            <line x1="33" y1="30" x2="50" y2="42" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
            <line x1="87" y1="30" x2="70" y2="42" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
            <line x1="33" y1="90" x2="50" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round" />
            <line x1="87" y1="90" x2="70" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
          HealthBridge
        </h1>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6">
          An AI-powered symptom triage assistant that uses RAG, tool
          orchestration, and multi-step reasoning to provide reliable health
          guidance&mdash;built with Next.js 16, Vercel AI SDK, and Google
          Gemini.
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
          <span className="meta-badge">AI Engineering</span>
          <span className="meta-badge">RAG</span>
          <span className="meta-badge">Tool Use</span>
          <span className="meta-badge">Streaming</span>
          <span className="meta-badge">Next.js 16</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://healthbridge-khaki.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Try Live Demo
          </a>
          <a
            href="https://github.com/gianlpz/healthbridge"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View Source
          </a>
        </div>
      </div>

      {/* Right side — chat mockup */}
      <div className="flex-1 mt-8 lg:mt-0 flex items-center justify-center">
        <div className="w-72 md:w-80 rounded-2xl bg-[#0a0a0f] border border-white/10 shadow-2xl overflow-hidden">
          {/* Chat header */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-300 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="50"
                  y="30"
                  width="20"
                  height="60"
                  rx="4"
                  fill="white"
                />
                <rect
                  x="30"
                  y="50"
                  width="60"
                  height="20"
                  rx="4"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-white/80 text-sm font-medium">
              HealthBridge
            </span>
          </div>
          {/* Chat messages */}
          <div className="p-4 space-y-3">
            <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
              <p className="text-white/70 text-xs">
                Hi! I can help you understand your symptoms. What are you
                experiencing?
              </p>
            </div>
            <div className="bg-teal-500/20 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%] ml-auto">
              <p className="text-teal-200 text-xs">
                I have a bad headache and slight fever for 3 days
              </p>
            </div>
            <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
              <p className="text-white/50 text-[10px] mb-1">
                Searching knowledge base...
              </p>
              <p className="text-white/50 text-[10px] mb-1">
                Checking symptom interactions...
              </p>
              <p className="text-white/50 text-[10px]">
                Assessing severity...
              </p>
            </div>
            <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
              <p className="text-white/70 text-xs">
                Based on my assessment, a headache with fever for 3 days
                warrants a GP visit.
              </p>
              <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-400">
                TRIAGE: AMBER
              </span>
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
        "People searching symptoms online get unreliable information from SEO-driven articles, leading to unnecessary anxiety or missed warning signs. There's no middle ground between Googling symptoms and calling a doctor.",
    },
    {
      title: "The Solution",
      content:
        "A multi-step AI agent that searches a curated medical knowledge base, checks symptom interactions, assesses severity with structured rules, and provides a clear triage recommendation — all through a streaming chat interface.",
    },
    {
      title: "My Role",
      content:
        "Sole AI engineer — designed the system prompt, built 3 specialized tools, implemented the RAG pipeline with embeddings and cosine similarity, and deployed the full-stack application.",
    },
    {
      title: "Key Deliverables",
      content:
        "3 AI tools (RAG search, symptom interaction checker, severity assessor), 6 knowledge documents with embedding-based retrieval, a streaming chat UI, and a safety-first triage system (GREEN/AMBER/RED).",
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
      title: "RAG Over Fine-Tuning",
      content:
        "Fine-tuning a model on medical data is expensive, hard to update, and risks hallucination. RAG lets us ground every answer in specific, verifiable knowledge documents that can be updated instantly.",
    },
    {
      title: "Tools Over Prompting",
      content:
        "Instead of stuffing everything into one prompt, each capability (search, interaction check, severity assessment) is a separate tool the AI calls when needed — making the system modular and debuggable.",
    },
    {
      title: "Streaming First",
      content:
        "Health questions create anxiety. Streaming responses token-by-token reduces perceived wait time and shows the user that something is happening — critical for a medical context.",
    },
    {
      title: "Safety-First Design",
      content:
        "Emergency symptoms (chest pain, stroke signs) bypass all tools and immediately return a RED triage. The system errs on the side of caution — better to over-refer than under-refer.",
    },
    {
      title: "In-Memory Vector Cache",
      content:
        "Knowledge documents are embedded once on first request, then cached in memory. This avoids re-calling the embedding API on every search while keeping the architecture simple.",
    },
  ];

  const principles = [
    {
      title: "Decompose, Don't Delegate",
      content:
        "Break complex reasoning into discrete tool calls instead of asking one prompt to do everything",
    },
    {
      title: "Ground in Data",
      content:
        "Every health claim is backed by a specific knowledge document retrieved via embeddings",
    },
    {
      title: "Fail Safe",
      content:
        "When uncertain, escalate severity — a false alarm is better than a missed emergency",
    },
    {
      title: "Show the Thinking",
      content:
        "Log every agent step to the terminal so the multi-step reasoning is observable and debuggable",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Architecture & Design Decisions
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Every architectural choice was driven by one question: how do we give
          reliable health guidance without hallucinating or missing emergencies?
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

// The AI Agent: How It Thinks
function AgentTools() {
  const tools = [
    {
      icon: "🔍",
      name: "searchHealthInfo",
      subtitle: "RAG-Powered Knowledge Search",
      gradient: "from-teal-600 to-teal-400",
      quote:
        'searchHealthInfo("tension headache causes and treatment")',
      inputs: ["query — the symptom or health topic to search"],
      returns: "Top 3 most relevant knowledge chunks ranked by cosine similarity",
      whenUsed:
        "Always called first. Grounds the AI's response in verified medical information instead of relying on training data.",
    },
    {
      icon: "⚠️",
      name: "checkSymptomInteractions",
      subtitle: "Dangerous Combination Detector",
      gradient: "from-amber-600 to-amber-400",
      quote:
        'checkSymptomInteractions(["headache", "fever", "stiff neck"])',
      inputs: ["symptoms — array of symptoms to check against known dangerous combinations"],
      returns: "Matching combinations with severity level (RED/AMBER) and specific medical advice",
      whenUsed:
        "Called when the user reports 2+ symptoms. Catches dangerous combinations like headache + fever + stiff neck (possible meningitis).",
    },
    {
      icon: "📊",
      name: "assessSeverity",
      subtitle: "Rule-Based Severity Scorer",
      gradient: "from-rose-600 to-rose-400",
      quote:
        'assessSeverity("headache", 7, 6)',
      inputs: [
        "symptom — the main symptom being assessed",
        "duration_days — how long the user has had it",
        "pain_level — severity on a 1-10 scale",
      ],
      returns: "Structured assessment with severity (LOW/MODERATE/HIGH), recommendation, and risk flags",
      whenUsed:
        "Called after gathering duration and pain information. Uses rule-based logic to consistently categorize severity.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          The AI Agent: How It Thinks
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Three specialized tools that the AI calls in sequence, choosing which
          to use based on the information available — like a doctor running
          through a checklist.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((t) => (
            <div key={t.name} className="persona-card">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br ${t.gradient}`}
                >
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {t.name}
                  </h3>
                  <p className="text-white/60 text-sm">{t.subtitle}</p>
                </div>
              </div>

              <div className="bg-white/5 border-l-2 border-coral p-4 rounded-r-lg mb-6">
                <p className="text-white/80 italic font-mono text-sm">
                  {t.quote}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Inputs
                  </h4>
                  <ul className="space-y-1">
                    {t.inputs.map((input) => (
                      <li
                        key={input}
                        className="text-white/70 text-sm flex items-start gap-2"
                      >
                        <span className="text-teal">&bull;</span>
                        {input}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    Returns
                  </h4>
                  <p className="text-white/70 text-sm">{t.returns}</p>
                </div>

                <div>
                  <h4 className="text-coral text-sm font-semibold uppercase tracking-wider mb-2">
                    When Used
                  </h4>
                  <p className="text-white/70 text-sm">{t.whenUsed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// The RAG Pipeline
function RAGPipeline() {
  const knowledgeDocs = [
    "headaches.md",
    "fever.md",
    "sore-throat.md",
    "stomach-pain.md",
    "dizziness.md",
    "knee-pain.md",
  ];

  const steps = [
    {
      label: "Step 1",
      title: "Load & Chunk",
      description:
        "Read all 6 markdown files from the knowledge directory. Split each file by ## headings so each section becomes its own chunk — keeping related information together.",
      detail: "Splitting by headings preserves context better than arbitrary character limits.",
    },
    {
      label: "Step 2",
      title: "Embed Documents",
      description:
        "Convert each text chunk into a 768-dimensional vector using Google's text-embedding-004 model. These vectors capture the semantic meaning of each chunk.",
      detail: "Embeddings are cached in memory after the first request — no re-embedding needed.",
    },
    {
      label: "Step 3",
      title: "Embed Query",
      description:
        "When the AI calls searchHealthInfo, the user's query is also converted into a vector using the same embedding model.",
      detail: "Using the same model for documents and queries ensures vectors are in the same space.",
    },
    {
      label: "Step 4",
      title: "Cosine Similarity",
      description:
        "Compare the query vector against every document chunk vector. Cosine similarity measures the angle between vectors — 1.0 means identical meaning, 0.0 means unrelated.",
      detail: "The custom implementation runs a dot product divided by the product of magnitudes.",
    },
    {
      label: "Step 5",
      title: "Return Top 3",
      description:
        "Sort all chunks by similarity score and return the 3 most relevant passages. The AI reads these to ground its response in verified information.",
      detail: "Top-3 balances enough context for the AI without overwhelming the prompt.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          The RAG Pipeline
        </h2>
        <p className="text-white/70 text-lg mb-6 max-w-3xl">
          Retrieval-Augmented Generation grounds the AI in real medical
          knowledge instead of relying on training data that could be outdated or
          hallucinated.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {knowledgeDocs.map((doc) => (
            <span key={doc} className="bank-badge">
              {doc}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step.title} className="finding-card">
              <span className="inline-block bg-teal/20 text-teal text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4">
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

// Multi-Step Agent in Action
function AgentInAction() {
  const scenarios = [
    {
      title: "Simple Lookup",
      description:
        'A single vague symptom — the agent searches the knowledge base and asks follow-up questions instead of guessing.',
      trace: `User: "My head hurts"

Step 1 → searchHealthInfo("headache causes and types")
   📊 Top match: headaches.md (0.87)

Step 2 → Response:
   "I'd like to help you with your headache.
    To give you better guidance, can you tell me:
    • How long have you had it?
    • Where exactly is the pain?
    • Pain level from 1-10?"`,
    },
    {
      title: "Multi-Tool Chaining",
      description:
        "Two symptoms with details — the agent chains three tools in sequence, building context at each step before synthesizing a response.",
      trace: `User: "I've had a headache and fever for 5 days,
        pain is about 6/10"

Step 1 → searchHealthInfo("headache with fever")
   📊 Top match: headaches.md (0.84)

Step 2 → checkSymptomInteractions(
           ["headache", "fever"])
   ⚠️  Match: "Possible infection or flu"
   Severity: AMBER

Step 3 → assessSeverity("headache", 5, 6)
   📊 Result: MODERATE
   Flag: longDuration = false

Step 4 → Final Response + [TRIAGE: AMBER]`,
    },
    {
      title: "Emergency Bypass",
      description:
        "Emergency symptoms skip all tools entirely — the safety rules in the system prompt override the normal workflow.",
      trace: `User: "I'm having chest pain and can't breathe"

Step 1 → Response (NO tools called):
   "This sounds like it could be a medical
    emergency. Please:
    • Call 999 immediately
    • Do not wait to see if it improves
    • If someone is with you, let them know

    [TRIAGE: RED]"`,
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Multi-Step Agent in Action
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-3xl">
          Three real scenarios showing how the agent reasons through
          problems&mdash;from simple lookups to emergency bypasses.
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

// Development Process
function DevelopmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Prompt Engineering",
      description:
        "Designed the system prompt with role definition, triage rules, safety guardrails, multi-step workflow instructions, and output formatting. Iterated through multiple versions to balance helpfulness with safety.",
    },
    {
      number: "02",
      title: "Knowledge Base + RAG",
      description:
        "Wrote 6 medical knowledge documents, built the chunking pipeline (split by ## headings), implemented embedding with text-embedding-004, and wrote cosine similarity search with in-memory caching.",
    },
    {
      number: "03",
      title: "Tool Orchestration",
      description:
        "Built 3 typed tools with Zod schemas (RAG search, symptom interaction checker, severity assessor). Configured multi-step execution with stopWhen: stepCountIs(5) and onStepFinish logging.",
    },
    {
      number: "04",
      title: "Streaming UI + Deploy",
      description:
        "Connected the chat UI using useChat from @ai-sdk/react with real-time streaming. Added triage badge rendering, auto-scroll, and deployed to Vercel with environment variable configuration.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Development Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="text-3xl font-bold text-teal mb-4">
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

// Key Technical Features
function TechnicalFeatures() {
  const features = [
    {
      icon: "🧠",
      title: "Multi-Step Reasoning",
      description:
        "The AI agent chains up to 3 tool calls per conversation turn, building context at each step before synthesizing a final response with triage recommendation.",
    },
    {
      icon: "📚",
      title: "Embedding-Based RAG",
      description:
        "6 knowledge documents are embedded with Google's text-embedding-004 model. Cosine similarity search retrieves the 3 most relevant chunks for every query.",
    },
    {
      icon: "🛡️",
      title: "Safety-First Triage",
      description:
        "A three-tier system (GREEN/AMBER/RED) with hardcoded emergency bypass rules. Chest pain and stroke symptoms skip all tools and immediately direct to emergency services.",
    },
    {
      icon: "⚡",
      title: "Real-Time Streaming",
      description:
        "Responses stream token-by-token using Vercel AI SDK's streamText, reducing perceived latency and showing users the AI is actively working on their question.",
    },
    {
      icon: "🔒",
      title: "Typed Tool Contracts",
      description:
        "Every tool has a Zod-validated input schema, ensuring the AI can only call tools with correctly structured parameters — no runtime type errors.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Key Technical Features
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Five capabilities that make the system reliable, safe, and responsive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="mvp-feature-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center text-2xl flex-shrink-0">
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

// Tech Stack & Architecture
function TechStack() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Tech Stack & Architecture
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-3xl">
          Four layers working together&mdash;from the AI model to the user
          interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">
              AI / Model Layer
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Google Gemini 2.5 Flash
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Vercel AI SDK v6 (streamText)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                text-embedding-004 for RAG
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Temperature: 0.2 (low creativity)
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Tool Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                3 typed tools with Zod schemas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                RAG search (embedding + cosine)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Symptom interaction lookup
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Rule-based severity assessor
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Safety Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                GREEN / AMBER / RED triage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Emergency symptom bypass
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                No prescriptions or dosages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Always recommends professional care
              </li>
            </ul>
          </div>

          <div className="design-system-card">
            <h4 className="text-white font-semibold mb-4">Frontend Layer</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Next.js 16 App Router
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                useChat from @ai-sdk/react
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Tailwind CSS styling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal">&bull;</span>
                Deployed on Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Learnings & Outcomes
function Learnings() {
  const learnings = [
    "RAG is more maintainable than fine-tuning — updating a knowledge doc is instant, retraining a model takes hours",
    "Decomposing AI reasoning into discrete tools makes the system debuggable and each capability independently testable",
    "Safety rules need to live in the system prompt, not just in tools — emergency bypass must happen before any tool is called",
    "Multi-step agents need step limits (stopWhen) to prevent infinite loops and control API costs",
    "Streaming responses are essential for health queries — users need to see the AI is working, not staring at a blank screen",
    "Building the full pipeline from embeddings to UI taught me how each AI concept connects in a production system",
  ];

  const skills = [
    "Prompt Engineering",
    "RAG",
    "Tool Use",
    "Multi-Step Agents",
    "Embeddings",
    "Cosine Similarity",
    "Streaming",
    "Vercel AI SDK",
    "Next.js 16",
    "Zod",
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
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
          Try HealthBridge
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Chat with the AI triage assistant or explore the source code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://healthbridge-khaki.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Try Live Demo
          </a>
          <a
            href="https://github.com/gianlpz/healthbridge"
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
export default function HealthBridgePage() {
  return (
    <main>
      <CaseHero />
      <Overview />
      <Architecture />
      <AgentTools />
      <RAGPipeline />
      <AgentInAction />
      <DevelopmentProcess />
      <TechnicalFeatures />
      <TechStack />
      <Learnings />
      <CTA />
    </main>
  );
}
