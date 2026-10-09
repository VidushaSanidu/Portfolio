import { motion } from "framer-motion";
import ReferenceCard from "./ReferenceCard";
import { REFERENCES } from "../../../constants/references";
import { useTheme } from "../../../contexts/ThemeContext";
import SectionHeading from "../../ui/common/SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

export default function ReferenceSection() {
  const { currentTheme } = useTheme();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <SectionHeading level="section">
          Collaborator References & Endorsements
        </SectionHeading>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans ${
          currentTheme === 'minimal' ? 'text-gray-600' : 'text-slate-300'
        }`}>
          Endorsements from engineering colleagues, co-founders, and clients who have collaborated with me directly.
        </p>
        
      </motion.div>

      {/* References Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8"
      >
        {REFERENCES.map((reference, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="flex justify-center"
          >
            <ReferenceCard {...reference} />
          </motion.div>
        ))}
      </motion.div>

      {/* Academic Referee Dossier Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 max-w-2xl mx-auto p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center"
      >
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          <strong className="text-slate-900 font-semibold">Institutional Verification: </strong>
          Detailed academic recommendation letters and references from faculty members at the University of Peradeniya and technical supervisors are available upon request for graduate admissions and grant evaluation.
        </p>
      </motion.div>
    </section>
  );
}
