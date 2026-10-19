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
    description:
      "Designing robust decentralized optimization methods and aggregation algorithms that enable multiple participants to train shared models collaboratively without exposing raw data.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(6, 182, 212, 0.15)",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
  },
  {
    id: "privacy",
    title: "Privacy-Preserving & Personalized Federated Learning",
    description:
      "Developing rigorous privacy guarantees via differential privacy and secure aggregation, paired with client-specific personalization for diverse, real-world environments.",
    color: "from-purple-500 to-indigo-500",
    glowColor: "rgba(147, 51, 234, 0.15)",
    badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10"
  },
  {
    id: "ml-dl",
    title: "Machine Learning in Healthcare & Medical Decision Support",
    description:
      "Applying machine learning to clinical datasets and diagnostic support systems, focusing on reliability, interpretability, and predictive modeling for high-stakes healthcare workflows.",
    color: "from-pink-500 to-rose-500",
    glowColor: "rgba(244, 63, 94, 0.15)",
    badgeColor: "border-pink-500/30 text-pink-400 bg-pink-500/10"
  },
  {
    id: "edge",
    title: "Distributed Computing & Edge Intelligence",
    description:
      "Connecting algorithmic machine learning with physical edge devices, optimizing memory constraints, on-device computation, and asynchronous communication across distributed systems.",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
  }
];

export const PUBLICATIONS = [
  {
    id: "federated-edge-ai-ev-speed-2026",
    code: "M1",
    title: "Optimized Federated Edge AI Framework with Image Processing for Speed Prediction in Semi-Automated Electric Vehicles",
    authors: "Vidusha Sanidu, Dr. Erunika Dayaratna",
    venue: "Manuscript in Preparation",
    year: "2026",
    statusBadge: "Started / Ongoing Research",
    type: "Research Manuscript",
    primaryTopic: "Federated Edge AI & Semi-Automated EVs",
    focus: "Real-time edge speed prediction and computer vision processing under decentralized privacy constraints for semi-automated electric vehicles.",
    abstract: null,
    contributions: [
      "Optimized on-device federated learning framework for semi-automated electric vehicles.",
      "Integration of real-time computer vision image processing for vehicle speed prediction.",
      "Asynchronous decentralized communication reducing edge-to-server bandwidth overhead.",
      "Mitigation of distributed client drift across diverse road and driving conditions."
    ],
    tags: [
      "Federated Edge AI",
      "Electric Vehicles",
      "Image Processing",
      "Speed Prediction",
      "Autonomous Systems"
    ],
    metrics: [
      { label: "Status", value: "In Progress" },
      { label: "Domain", value: "Electric Vehicles" },
      { label: "Year", value: "2026" }
    ]
  },
  {
    id: "pedestrian-trajectory-fl-2026",
    code: "J1",
    title: "Socially-Aware Pedestrian Trajectory Prediction System Using Federated Learning",
    authors: "Vidusha Sanidu, Prof. Saluka Kodithuwakku",
    venue: "Submitted to Ceylon Journal of Science (2026)",
    year: "2026",
    statusBadge: "Submitted / Under Review",
    type: "Journal Submission",
    primaryTopic: "Personalized Federated Learning & Spatial-Temporal Dynamics",
    focus: "Decentralized spatial-temporal trajectory modeling under privacy-sensitive constraints using lightweight edge transformers.",
    abstract:
      "Pedestrian trajectory prediction is a fundamental capability for autonomous vehicles and intelligent surveillance systems, enabling them to navigate safely in public environments. However, state-of-the-art prediction models typically rely on centralized training with massive datasets, raising significant concerns regarding data privacy and the “data island” problem. To address these challenges, this study proposes a novel Personalized Federated Learning (pFL) framework that enables collaborative model training without sharing raw data. This paper introduces a lightweight Social Interaction-Aware Transformer (Light-SIAT) designed specifically for resource-constrained edge deployment. The proposed architecture integrates a Transformer encoder to capture individual pattern dynamics and a Graph Convolutional Network (GCN) to model complex social interactions. To mitigate the issue of non-Independent and Identically Distributed (non-IID) data across different surveillance scenes, the model is decoupled into shared feature extractors and client-specific prediction heads (Personalized layer). This allows the model to learn generalized social norms globally while adapting to unique local environmental constraints. Extensive experiments on the standard ETH (ETH Zurich Pedestrian Dataset) and UCY (University of Cyprus Pedestrian Dataset) benchmarks demonstrate the efficacy of our approach. The proposed method achieves an Average Displacement Error (ADE) of 0.32m, outperforming standard Federated Averaging (FedAvg) by approximately 14% and remaining competitive with centralized baselines. These results confirm that the proposed framework successfully bridges the gap between high accuracy trajectory forecasting and strict data privacy requirements.",
    contributions: [
      "Lightweight Social Interaction-Aware Transformer (Light-SIAT) tailored for edge-constrained deployment.",
      "Hybrid Transformer encoder and Graph Convolutional Network (GCN) for joint individual and social modeling.",
      "Decoupled feature extractors and personalized prediction heads mitigating non-IID scene variations.",
      "0.32m ADE on ETH/UCY benchmarks, outperforming standard FedAvg by ~14% with strict privacy guarantees."
    ],
    tags: [
      "Personalized FL (pFL)",
      "Light-SIAT",
      "Graph Neural Networks (GCN)",
      "Trajectory Prediction",
      "Privacy-Preserving AI",
      "Edge Intelligence"
    ],
    metrics: [
      { label: "Metric", value: "0.32m ADE" },
      { label: "Performance", value: "~14% > FedAvg" },
      { label: "Venue", value: "Ceylon Journal of Science" }
    ]
  }
];

export const RESEARCH_STATS = [
  { label: "Research Pillars", value: "4", detail: "FL, Privacy, Medical ML, Edge AI" },
  { label: "Manuscripts / Submissions", value: "2", detail: "Active EV manuscript & journal submission" },
  { label: "Academic Affiliation", value: "UOP", detail: "University of Peradeniya" },
  { label: "Primary Paradigm", value: "Decentralized", detail: "Privacy-Preserving Federated ML" }
];

