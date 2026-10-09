export const TIMELINE_CATEGORIES = [
  { id: "all", label: "All Milestones" },
  { id: "research", label: "Research & Publications" },
  { id: "academic", label: "Academic Journey" },
  { id: "industry", label: "Systems & Leadership" }
];

export const TIMELINE_EVENTS = [
  {
    id: "event-paper-submission-2026",
    period: "2026",
    title: "Journal Submission: Pedestrian Trajectory Prediction via Federated Learning",
    organization: "Ceylon Journal of Science (CJS)",
    role: "Lead Author / Researcher",
    category: "research",
    typeBadge: "Research Manuscript",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    summary:
      "Submitted research manuscript: 'Socially-Aware Pedestrian Trajectory Prediction System Using Federated Learning'. Focused on spatial-temporal trajectory modeling under strict decentralized privacy constraints and heterogeneous pedestrian behaviors.",
    highlights: [
      "Designed decentralized federated learning pipeline avoiding centralized trajectory storage",
      "Addressed non-IID client drift across heterogeneous urban scenarios",
      "Empirically validated trajectory accuracy against privacy-compromising baselines"
    ],
    tags: ["Federated Learning", "Spatial-Temporal", "Trajectory Prediction", "Paper Submission"],
    link: "#research"
  },
  {
    id: "event-preprints-ongoing",
    period: "2026 – Ongoing",
    title: "Preprints & Research in Clinical Decision Support Systems",
    organization: "University of Peradeniya (UOP)",
    role: "CS Honors Researcher",
    category: "research",
    typeBadge: "Ongoing Research",
    badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    summary:
      "Investigating scalable, robust decentralized learning paradigms for clinical decision support datasets with differential privacy guarantees and communication-efficient aggregation.",
    highlights: [
      "Formulating aggregation protocols resilient to severe medical data heterogeneity",
      "Differential Privacy (DP) budgeting for collaborative diagnostic models",
      "Preparing preprints for peer review in international venues"
    ],
    tags: ["Medical ML", "Differential Privacy", "Non-IID Aggregation", "Clinical Datasets"],
    link: "#research"
  },
  {
    id: "event-taino-spain",
    period: "Sep 2025 – Jan 2026",
    title: "AI & Automation Developer",
    organization: "Taino Spain SL",
    role: "Full-time Engineer",
    category: "industry",
    typeBadge: "Industry Engineering",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    summary:
      "Engineered automated AI pipelines and cloud architectures for enterprise operational workflows, bridging production-grade software engineering with AI automation.",
    highlights: [
      "Engineered end-to-end full-stack systems and FastAPI-backed microservices",
      "Automated complex workflows using custom LLM agents and scheduled pipelines",
      "Architected secure, scalable AWS infrastructure"
    ],
    tags: ["AI Automation", "FastAPI", "AWS", "Full Stack", "Distributed Systems"]
  },
  {
    id: "event-xanvia-cofounder",
    period: "2023 – Present",
    title: "Co-Founder & Solution Architect",
    organization: "Xanvia Tech",
    role: "Technical Leadership & Architecture",
    category: "industry",
    typeBadge: "Leadership & Systems",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    summary:
      "Leading technical architecture, cloud deployments, and AI system engineering. Building scalable SaaS applications that handle high-throughput workloads.",
    highlights: [
      "Architected distributed cloud infrastructure on AWS for growing user bases",
      "Built machine learning integrations and asynchronous task queues",
      "Directed end-to-end software lifecycles from ideation to production deployment"
    ],
    tags: ["Cloud Architecture", "System Design", "AWS", "Distributed SaaS", "Leadership"]
  },
  {
    id: "event-uop-degree",
    period: "Undergraduate Program",
    title: "B.Sc. (Hons) in Computer Science",
    organization: "University of Peradeniya (UOP)",
    role: "Undergraduate Scholar",
    category: "academic",
    typeBadge: "Academic Affiliation",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    summary:
      "Pursuing Honors degree in Computer Science at Sri Lanka's premier academic institution, specializing in machine learning algorithms, distributed computing, and data privacy.",
    highlights: [
      "Deep focus on theoretical foundations of machine learning & statistical analysis",
      "Undergraduate research on decentralized spatial-temporal trajectory prediction",
      "Active member in collaborative technical and research societies"
    ],
    tags: ["Computer Science", "Algorithms", "Distributed Computing", "University of Peradeniya"]
  },
  {
    id: "event-freelance-fullstack",
    period: "2023 – 2025",
    title: "Full Stack & Machine Learning Solutions Engineer",
    organization: "Independent Practice",
    role: "Consultant & Developer",
    category: "industry",
    typeBadge: "Consulting",
    badgeColor: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
    summary:
      "Engineered bespoke machine learning models, modern web applications, and data extraction pipelines for international clients across multiple domains.",
    highlights: [
      "Implemented custom computer vision and NLP models for business applications",
      "Delivered production-grade Next.js and Python web architectures",
      "Integrated secure payment gateways and cloud services"
    ],
    tags: ["Python", "PyTorch", "Full Stack", "Client Delivery"]
  }
];
