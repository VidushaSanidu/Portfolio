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
    className={`
      relative p-6 rounded-xl transition-all duration-300
      ${theme.currentTheme === 'minimal' 
        ? 'bg-white border border-gray-200 hover:border-gray-300' 
        : 'bg-neutral-800/40 border border-neutral-700/50 hover:border-neutral-600'
      }
    `}
    whileHover={{ scale: 1.02, y: -4 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">{data.icon}</span>
      <h3 className={`font-bold text-lg ${
        theme.currentTheme === 'minimal' ? 'text-gray-800' : 'text-white'
      }`}>
        {data.title}
      </h3>
    </div>

    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.3 }}
      className="space-y-3"
    >
      {data.content.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex items-start gap-3 text-sm ${
            theme.currentTheme === 'minimal' ? 'text-gray-600' : 'text-neutral-300'
          }`}
        >
          <span className="text-purple-400 mt-1">▶</span>
          <span>{item}</span>
        </motion.div>
      ))}
    </motion.div>

    {/* Background gradient */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    className={`
      relative p-6 rounded-xl text-center overflow-hidden group
      ${theme.currentTheme === 'minimal' 
        ? 'bg-white border border-gray-200' 
        : 'bg-neutral-800/30 border border-neutral-700/30'
      }
    `}
  >
    {/* Background glow */}
    <div className={`
      absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
      bg-gradient-to-r ${achievement.color}
    `} style={{ filter: 'blur(20px)', transform: 'scale(1.5)' }} />
    
    <div className="relative z-10">
      <div className="text-3xl mb-3">{achievement.icon}</div>
      <div className={`text-2xl font-bold mb-2 ${
        theme.currentTheme === 'minimal' ? 'text-gray-800' : 'text-white'
      }`}>
        {achievement.metric}
      </div>
      <div className={`font-semibold mb-1 ${
        theme.currentTheme === 'minimal' ? 'text-gray-700' : 'text-neutral-200'
      }`}>
        {achievement.title}
      </div>
      <div className={`text-sm ${
        theme.currentTheme === 'minimal' ? 'text-gray-500' : 'text-neutral-400'
      }`}>
        {achievement.description}
      </div>
    </div>
  </motion.div>
);

const CodeSnippet = ({ theme }) => {
  const [typedText, setTypedText] = useState('');
  const codeText = `const developer = {
  name: "Vidusha Sanidu",
  role: "Full Stack Developer",
  passion: "Creating impactful digital experiences",
  superpower: "Make complex concepts simple",
  weekness: "Always hungry!"
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
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className={`
        p-6 rounded-xl font-mono text-sm relative overflow-hidden
        ${theme.currentTheme === 'minimal' 
          ? 'bg-gray-50 border border-gray-200' 
          : 'bg-neutral-900/50 border border-neutral-700/50'
        }
      `}
    >
      <div className={`whitespace-pre-wrap ${
        theme.currentTheme === 'minimal' ? 'text-gray-700' : 'text-green-400'
      }`}>
        {typedText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-current ml-1"
        />
      </div>

      {/* Code highlighting effects */}
      <div className="absolute top-4 right-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
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