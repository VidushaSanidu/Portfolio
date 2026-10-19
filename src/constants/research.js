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
    title: "Federated Learning (FL) & Aggregation Algorithms",
    subtitle: "Decentralized Model Training & Optimization Dynamics",
    description:
      "Investigating decentralized training paradigms and mathematical aggregation schemes to optimize convergence under statistical client heterogeneity.",
    topics: [
      "Decentralized model training & collaborative aggregation protocols",
      "Robust aggregation algorithms (FedAvg, FedProx, adaptive optimization)",
      "Statistical client heterogeneity & Non-IID data partition mitigation",
      "Communication-efficient training, gradient compression & sparse updates",
      "Client drift compensation and convergence acceleration"
    ],
    highlight: "Aggregation Algorithms & Non-IID Optimization",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(6, 182, 212, 0.15)",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
  },
  {
    id: "privacy",
    title: "Privacy-Preserving & Personalized Federated Learning",
    subtitle: "Differential Privacy, Secure Protocols & Local Model Adaptation",
    description:
      "Engineering rigorous privacy guarantees and tailored client adaptation strategies to deliver private, client-specific predictive models.",
    topics: [
      "Differential Privacy (DP) with calibrated Gaussian/Laplace noise mechanisms",
      "Client model personalization (meta-learning, local adaptation, fine-tuning)",
      "Secure aggregation protocols against semi-honest and malicious servers",
      "Adversarial defense against membership inference and model poisoning",
      "Balancing privacy-utility trade-offs in distributed collaborative learning"
    ],
    highlight: "Differential Privacy & Client Personalization",
    color: "from-purple-500 to-indigo-500",
    glowColor: "rgba(147, 51, 234, 0.15)",
    badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10"
  },
  {
    id: "ml-dl",
    title: "Machine Learning in Healthcare & Medical Decision Support",
    subtitle: "Clinical Decision Support, Diagnostic Systems & Healthcare AI",
    description:
      "Designing specialized predictive architectures and clinical decision support models tailored for high-stakes healthcare environments.",
    topics: [
      "Clinical decision support systems (CDSS) & diagnostic predictive modeling",
      "Electronic Health Records (EHR) & multi-modal medical data analysis",
      "Cross-silo privacy-preserving collaborative learning across medical centers",
      "Model explainability, interpretability, and clinical risk stratification",
      "Fairness, validation, and generalization in healthcare machine learning"
    ],
    highlight: "Clinical Informatics & Diagnostic Support",
    color: "from-pink-500 to-rose-500",
    glowColor: "rgba(244, 63, 94, 0.15)",
    badgeColor: "border-pink-500/30 text-pink-400 bg-pink-500/10"
  },
  {
    id: "edge",
    title: "Distributed Computing & Edge Intelligence",
    subtitle: "Resource-Constrained Model Deployment & Edge Orchestration",
    description:
      "Bridging algorithmic machine learning with systems-level edge-device execution, memory constraints, and asynchronous networks.",
    topics: [
      "Resource-constrained model deployment, quantization & pruning",
      "On-device local training and asynchronous edge-cloud communication",
      "Edge-cloud orchestration, network latency mitigation, and fault tolerance",
      "Scalable decentralized message passing and distributed pipelines"
    ],
    highlight: "On-Device Inference & Edge-Cloud Orchestration",
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
