import { Brain, Code2, Cpu, FolderGit2, History, Network, Server } from "lucide-react";

// Technical & Scientific Competencies categorized data
export const SKILLS_DATA = {
  "Machine Learning": {
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
      { name: "XGBoost" },
      { name: "LightGBM" },
      { name: "Random Forest" },
      { name: "YOLO" },
      { name: "Predictive Modeling" },
      { name: "Transfer Learning" },
      { name: "Model Fine-tuning" },
    ]
  },
  "Distributed and Decentralized AI": {
    icon: Network,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Federated Learning" },
      { name: "FlowerAI" },
      { name: "FedAvg" },
      { name: "Distributed Model Training" },
      { name: "Client-based Learning" },
      { name: "Model Aggregation" },
      { name: "Distributed AI Systems" },
    ]
  },
  "Programming Languages": {
    icon: Code2,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C/C++" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "LaTeX" },
    ]
  },
  "Backend, Cloud & DevOps": {
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "FastAPI" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "Node.js" },
      { name: "Microservices" },
      { name: "Docker" },
      { name: "Redis" },
      { name: "AWS (S3, Lambda)" },
      { name: "Linux" },
    ]
  }
};

export const QUICK_STATS = [
  { label: "Research Pillars", value: "4", icon: Brain },
  { label: "Publications / Preprints", value: "2+", icon: FolderGit2 },
  { label: "Years in AI & Systems", value: "4+", icon: History },
  { label: "Engineered Systems", value: "20+", icon: Cpu },
];

