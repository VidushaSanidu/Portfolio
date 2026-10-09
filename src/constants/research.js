export const ACADEMIC_AFFILIATION = {
  institution: "University of Peradeniya (UOP)",
  shortInstitution: "UOP",
  degree: "B.Sc. (Hons) in Computer Science",
  department: "Department of Statistics & Computer Science",
  status: "Final Year / CS Researcher",
  location: "Peradeniya, Sri Lanka",
  focus: "Focusing on scalable, robust decentralized learning paradigms and clinical decision support datasets.",
  collaborationNotice: "Open to academic research collaborations, preprints, graduate opportunities (M.Sc./Ph.D.), and interdisciplinary initiatives.",
  keywords: [
    "Federated Learning",
    "Privacy-Preserving AI",
    "Differential Privacy",
    "Edge Intelligence",
    "Clinical Decision Support",
    "Distributed Systems"
  ]
};

export const RESEARCH_PILLARS = [
  {
    id: "fl",
    title: "Federated Learning (FL)",
    subtitle: "Decentralized Model Training & Optimization",
    description:
      "Investigating decentralized training paradigms that prevent centralized data collection while addressing statistical client heterogeneity.",
    topics: [
      "Decentralized model training & collaborative aggregation protocols",
      "Aggregation algorithms (FedAvg, FedProx, adaptive optimization)",
      "Heterogeneous data distribution (Non-IID client partition mitigation)",
      "Communication efficiency, gradient compression & sparse updates",
      "Client drift mitigation and personalized federated models"
    ],
    highlight: "Non-IID & Client Drift Mitigation",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(6, 182, 212, 0.15)",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
  },
  {
    id: "privacy",
    title: "Privacy & Security in AI",
    subtitle: "Differential Privacy & Collaborative Robustness",
    description:
      "Engineering rigorous mathematical guarantees and cryptographic mechanisms for collaborative machine learning.",
    topics: [
      "Differential Privacy (DP) with calibrated noise mechanisms (Gaussian/Laplace)",
      "Secure aggregation protocols against curious central servers",
      "Adversarial robustness against data poisoning and model backdoor attacks",
      "Privacy-preserving machine learning frameworks and membership-inference defense"
    ],
    highlight: "Differential Privacy & Secure Aggregation",
    color: "from-purple-500 to-indigo-500",
    glowColor: "rgba(147, 51, 234, 0.15)",
    badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10"
  },
  {
    id: "ml-dl",
    title: "Machine Learning & Deep Learning",
    subtitle: "Medical AI, Trajectory Modeling & Multi-Agent Systems",
    description:
      "Designing specialized deep architectures for complex real-world dynamics, spatial-temporal modeling, and medical data.",
    topics: [
      "Machine learning in the medical field & clinical decision support datasets",
      "Multi-Agent systems & cooperative decision-making frameworks",
      "Spatial-temporal modeling for trajectory and dynamic flow prediction",
      "Representation learning, optimization dynamics, and general machine learning"
    ],
    highlight: "Medical Informatics & Multi-Agent ML",
    color: "from-pink-500 to-rose-500",
    glowColor: "rgba(244, 63, 94, 0.15)",
    badgeColor: "border-pink-500/30 text-pink-400 bg-pink-500/10"
  },
  {
    id: "edge",
    title: "Distributed Computing & Edge Intelligence",
    subtitle: "Resource-Constrained Model Deployment & Orchestration",
    description:
      "Bridging machine learning algorithms with systems-level edge-device execution, memory constraints, and asynchronous networks.",
    topics: [
      "Resource-constrained model deployment & quantization",
      "On-device training and asynchronous edge updates",
      "Edge-cloud orchestration, network latency mitigation, and fault tolerance",
      "High-throughput decentralized communication pipelines"
    ],
    highlight: "On-Device Training & Edge-Cloud Orchestration",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
  }
];

export const PUBLICATIONS = [
  {
    id: "pedestrian-trajectory-fl-2026",
    title: "Socially-Aware Pedestrian Trajectory Prediction System Using Federated Learning",
    authors: "Vidusha Sanidu et al.",
    venue: "Submitted to Ceylon Journal of Science (2026)",
    year: "2026",
    statusBadge: "Submitted / Under Review",
    type: "Journal Submission",
    primaryTopic: "Federated Learning & Spatial-Temporal Dynamics",
    focus: "Decentralized spatial-temporal trajectory modeling under privacy-sensitive constraints and diverse environments.",
    abstract:
      "Pedestrian trajectory forecasting plays a vital role in autonomous navigation and urban surveillance, yet centralized trajectory data collection poses severe privacy risks. This work proposes a socially-aware spatial-temporal trajectory prediction framework trained in a decentralized manner via Federated Learning. By preserving sensitive raw trajectory sequences on edge nodes and mitigating non-IID client drift across heterogeneous pedestrian movement patterns, the system achieves robust predictive accuracy without centralized data exposure.",
    contributions: [
      "Decentralized spatial-temporal pedestrian trajectory modeling across distributed edge clients.",
      "Investigation of non-IID client drift mitigation across heterogeneous urban environments.",
      "Strict preservation of participant spatial coordinates and sensitive location metadata.",
      "Empirical benchmark evaluating prediction error (ADE/FDE) against centralized baselines."
    ],
    tags: [
      "Federated Learning",
      "Trajectory Prediction",
      "Spatial-Temporal Modeling",
      "Privacy-Preserving AI",
      "Edge Intelligence"
    ],
    metrics: [
      { label: "Status", value: "Under Review" },
      { label: "Venue", value: "Ceylon Journal of Science" },
      { label: "Year", value: "2026" }
    ],
    bibtex: `@article{sanidu2026socially,
  title={Socially-Aware Pedestrian Trajectory Prediction System Using Federated Learning},
  author={Sanidu, Vidusha and others},
  journal={Ceylon Journal of Science},
  year={2026},
  note={Submitted, Under Review}
}`
  },
  {
    id: "fl-preprints-ongoing",
    title: "Robust Decentralized Learning Paradigms & Clinical Decision Support Systems",
    authors: "Vidusha Sanidu, Collaborators",
    venue: "Preprints & Research Manuscripts in Preparation",
    year: "2026",
    statusBadge: "Manuscript in Preparation",
    type: "Working Paper / Preprint",
    primaryTopic: "Clinical Decision Support & Federated Optimization",
    focus: "Scalable, robust decentralized learning paradigms and clinical decision support datasets.",
    abstract:
      "Collaborative training across medical institutions is heavily restricted by privacy regulations (HIPAA/GDPR) and severe institutional data heterogeneity. This ongoing research explores communication-efficient aggregation algorithms and differential privacy mechanisms tailored for clinical decision support datasets, evaluating generalization bounds and robustness against catastrophic forgetting.",
    contributions: [
      "Architecting decentralized pipelines for multi-institutional diagnostic data collaboration.",
      "Differential privacy (DP) integration with strict epsilon budget management for patient records.",
      "Evaluation of aggregation robustness under heavy clinical feature skew."
    ],
    tags: [
      "Medical AI",
      "Clinical Decision Support",
      "Federated Learning",
      "Differential Privacy",
      "Non-IID Data"
    ],
    metrics: [
      { label: "Phase", value: "Preprint Drafting" },
      { label: "Affiliation", value: "University of Peradeniya" },
      { label: "Domain", value: "Healthcare AI" }
    ],
    bibtex: `@article{sanidu2026robust,
  title={Robust Decentralized Learning Paradigms and Clinical Decision Support Systems},
  author={Sanidu, Vidusha and others},
  journal={Preprint in Preparation},
  year={2026},
  institution={University of Peradeniya}
}`
  }
];

export const RESEARCH_STATS = [
  { label: "Research Pillars", value: "4", detail: "FL, Privacy, Medical ML, Edge AI" },
  { label: "Manuscripts / Submissions", value: "2+", detail: "Journal submission & active preprints" },
  { label: "Academic Affiliation", value: "UOP", detail: "University of Peradeniya" },
  { label: "Primary Paradigm", value: "Decentralized", detail: "Privacy-Preserving Federated ML" }
];
