import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import SectionHeading from '../../ui/common/SectionHeading';
import { Goal, GraduationCap, Quote, ShieldCheck } from 'lucide-react';

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

const BrandCard = ({ data }) => (
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

export default function PersonalBranding() {
  const theme = useTheme();

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(BRAND_ELEMENTS).map(([key, data]) => (
          <BrandCard
            key={key}
            data={data}
          />
        ))}
      </div>
    </section>
  );
}