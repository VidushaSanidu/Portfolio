import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import SectionHeading from '../../ui/common/SectionHeading';
import { Brain, Cpu, Goal, GraduationCap, Quote, Route, ShieldCheck } from 'lucide-react';

const BRAND_ELEMENTS = {
  philosophy: {
    title: "Research Philosophy",
    icon: <Quote />,
    content: [
      "Decentralize intelligence, democratize access, and provably protect privacy",
      "Bridge theoretical machine learning with rigorous distributed systems engineering",
      "Empirical reproducibility over ephemeral benchmark chasing",
      "Advancing foundational science for high-stakes societal domains like healthcare"
    ]
  },
  journey: {
    title: "Academic & Systems Journey",
    icon: <GraduationCap />,
    content: [
      "Deep foundational study in Computer Science @ University of Peradeniya (UOP)",
      "Pivoted from commercial full-stack architecture to decentralized AI research",
      "Researched Federated Learning for spatial-temporal trajectory forecasting (submitted 2026)",
      "Currently investigating robust federated paradigms for clinical decision support datasets"
    ]
  },
  values: {
    title: "Scholarly Values",
    icon: <ShieldCheck />,
    content: [
      "Privacy as a fundamental human right in all machine learning paradigms",
      "Mathematical rigor in differential privacy & statistical heterogeneity (Non-IID)",
      "Open scientific collaboration, transparent peer review, and preprint sharing",
      "Engineering resilient AI deployable on resource-constrained edge hardware"
    ]
  },
  goals: {
    title: "Research & Scholarly Goals",
    icon: <Goal />,
    content: [
      "Pursue advanced doctoral (Ph.D.) research in Federated Intelligence & Edge Learning",
      "Publish impactful breakthroughs in leading ML conferences (NeurIPS, ICML, ICLR)",
      "Architect privacy-preserving clinical decision support frameworks with hospital networks",
      "Collaborate globally with interdisciplinary academic labs and researchers"
    ]
  }
};


// const ACHIEVEMENTS = [
//   {
//     title: "Performance Leader",
//     description: "Lighthouse 100/89 scores consistently",
//     icon: "🚀",
//     metric: "100%",
//     color: "from-green-400 to-emerald-500"
//   },
//   {
//     title: "AI Innovation",
//     description: "LangChain & RAG implementations",
//     icon: "🤖",
//     metric: "5+",
//     color: "from-purple-400 to-pink-500"
//   },
//   {
//     title: "Full Stack",
//     description: "End-to-end project delivery",
//     icon: "🛠️",
//     metric: "50+",
//     color: "from-blue-400 to-cyan-500"
//   },
//   {
//     title: "Open Source",
//     description: "Community contributions",
//     icon: "🌟",
//     metric: "MIT",
//     color: "from-orange-400 to-red-500"
//   }
// ];

const BrandCard = ({ data, theme }) => (
  <motion.div
    layout
    className="relative p-6 sm:p-7 rounded-2xl transition-all duration-300 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
    whileHover={{ y: -3 }}
  >
    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
      <div className="p-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-200">
        {data.icon}
      </div>
      <h3 className="font-serif font-bold text-lg text-slate-900">
        {data.title}
      </h3>
    </div>

    <div className="space-y-2.5">
      {data.content.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
        >
          <span className="text-blue-900 font-mono mt-0.5">▪</span>
          <span className="leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const AchievementCard = ({ achievement, index, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="relative p-6 rounded-2xl text-center bg-white border border-slate-200 shadow-xs"
  >
    <div className="relative z-10">
      <div className="text-3xl mb-3">{achievement.icon}</div>
      <div className="text-2xl font-bold mb-2 text-slate-900">
        {achievement.metric}
      </div>
      <div className="font-semibold mb-1 text-slate-800">
        {achievement.title}
      </div>
      <div className="text-xs mt-1 text-slate-500">
        {achievement.description}
      </div>
    </div>
  </motion.div>
);

const CodeSnippet = ({ theme }) => {
  const [typedText, setTypedText] = useState('');
  const codeText = `// Academic Research Trajectory & Focus
const scholar = {
  name: "Vidusha Sanidu",
  institution: "University of Peradeniya (UOP)",
  focus: "Federated Learning & Differential Privacy",
  specializations: [
    "Non-IID Client Drift Mitigation",
    "Secure Aggregation & Provable DP",
    "Decentralized Clinical Decision Support"
  ],
  objective: "Advancing privacy-preserving distributed intelligence"
};`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < codeText.length) {
        setTypedText(codeText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="p-6 rounded-2xl font-mono text-xs sm:text-sm relative overflow-hidden bg-slate-900 text-slate-200 border border-slate-800 shadow-md"
    >
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
        <span>researcher_profile.ts</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        </div>
      </div>
      <div className="whitespace-pre-wrap leading-relaxed text-slate-200">
        {typedText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
          className="inline-block w-1.5 h-4 bg-blue-400 ml-1 align-middle"
        />
      </div>
    </motion.div>
  );
};

export default function PersonalBranding() {
  const theme = useTheme();

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <SectionHeading level="section">
          Scholarly Vision & Philosophy
        </SectionHeading>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans ${
          theme.currentTheme === 'minimal' ? 'text-gray-600' : 'text-slate-300'
        }`}>
          Core scientific principles, academic trajectory, scholarly ethics, and doctoral research objectives.
        </p>
      </motion.div>

      {/* Brand Elements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {Object.entries(BRAND_ELEMENTS).map(([key, data]) => (
          <BrandCard
            key={key}
            data={data}
            theme={theme}
          />
        ))}
      </div>

      {/* Achievements Grid
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            achievement={achievement}
            index={index}
            theme={theme}
          />
        ))}
      </div> */}

      {/* Code Snippet */}
      <div className="max-w-2xl mx-auto">
        <CodeSnippet theme={theme} />
      </div>
    </section>
  );
}