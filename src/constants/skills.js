import { Brain, Cpu, FolderGit2, History, MonitorCog, ShieldCheck } from "lucide-react";

// Enhanced skills data with proficiency levels and categories
export const SKILLS_DATA = {
  "Federated Learning & Privacy-Preserving AI": {
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Federated Optimization (FedAvg, FedProx)", level: 90, years: 2, projects: 3 },
      { name: "Non-IID Data & Client Drift Mitigation", level: 88, years: 2, projects: 2 },
      { name: "Differential Privacy & Secure Aggregation", level: 85, years: 2, projects: 2 },
      { name: "Decentralized Edge Learning (Flower/PySyft)", level: 85, years: 2, projects: 3 },
      { name: "Collaborative Adversarial Robustness", level: 80, years: 1, projects: 2 },
    ]
  },
  "Machine Learning & Deep Learning": {
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PyTorch & Deep Neural Architectures", level: 90, years: 3, projects: 5 },
      { name: "Spatial-Temporal & Trajectory Modeling", level: 88, years: 2, projects: 2 },
      { name: "Medical ML & Clinical Datasets", level: 82, years: 2, projects: 2 },
      { name: "Multi-Agent Systems & Cooperative AI", level: 80, years: 2, projects: 2 },
      { name: "Statistical Learning & Scikit-learn", level: 92, years: 3, projects: 8 },
    ]
  },
  "Distributed Computing & Edge Intelligence": {
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "On-Device Training & Quantization", level: 82, years: 2, projects: 2 },
      { name: "Edge-Cloud Orchestration", level: 85, years: 2, projects: 3 },
      { name: "Docker & Containerized Clusters", level: 90, years: 3, projects: 5 },
      { name: "Asynchronous Message Queues (SQS/Redis)", level: 88, years: 3, projects: 4 },
      { name: "AWS Cloud Infrastructure", level: 88, years: 3, projects: 4 },
    ]
  },
  "Systems & Software Engineering": {
    icon: MonitorCog,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Python / C / GoLang", level: 92, years: 4, projects: 12 },
      { name: "FastAPI / Node.js / Nest.js", level: 90, years: 3, projects: 8 },
      { name: "Next.js / React.js / TypeScript", level: 88, years: 3, projects: 10 },
      { name: "PostgreSQL / MongoDB / Vector DBs", level: 90, years: 4, projects: 9 },
      { name: "CI/CD Pipelines & DevOps", level: 88, years: 3, projects: 5 },
    ]
  }
};

export const QUICK_STATS = [
  { label: "Research Pillars", value: "4", icon: Brain },
  { label: "Publications / Preprints", value: "2+", icon: FolderGit2 },
  { label: "Years in AI & Systems", value: "4+", icon: History },
  { label: "Engineered Systems", value: "20+", icon: Cpu },
];

