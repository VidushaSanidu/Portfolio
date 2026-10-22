import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../../ui/common/SectionHeading';
import {
  RESEARCH_PILLARS,
  PUBLICATIONS
} from '../../../constants/research';
import {
  BookOpen,
  ShieldCheck,
  Brain,
  Cpu,
  Network,
  ChevronDown,
  Mail,
  Layers,
  FileText
} from 'lucide-react';

const iconMap = {
  dai: Network,
  fl: Network,
  privacy: ShieldCheck,
  'ml-dl': Brain,
  edge: Cpu
};

export default function Research() {
  const [expandedAbstract, setExpandedAbstract] = useState(null);

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-3 bg-slate-100 border border-slate-200 text-slate-700 shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 text-blue-900" />
          <span>Research Profile</span>
        </div>

        <SectionHeading level="section">
          Research Thrusts & Publications
        </SectionHeading>

        <p className="text-base sm:text-lg max-w-3xl mx-auto mt-3 leading-relaxed font-sans text-slate-600">
          Exploring how decentralized intelligence can solve real-world problems, keeping data private, making collaborative models smarter, and applying machine learning where it matters most, from healthcare to edge systems.
        </p>
      </motion.div>

      {/* Research Pillars / Themes */}
      <div className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2 border-b border-slate-200 pb-3">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-blue-900" />
              Core Research Pillars
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Foundational themes driving my research in decentralized systems and applied AI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {RESEARCH_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.id] || Brain;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl p-6 sm:p-7 border transition-all duration-300 bg-white border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 flex flex-col justify-start"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {pillar.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Selected Publications & Manuscripts */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2 border-b border-slate-200 pb-3">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2.5">
              <FileText className="w-6 h-6 text-blue-900" />
              Selected Research & Publications
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Peer-reviewed manuscripts under review, working papers, and preprints.
            </p>
          </div>
          <span className="text-xs font-mono text-blue-900 font-medium bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
            [Active Manuscripts & Preprints]
          </span>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, index) => {
            const isAbstractExpanded = expandedAbstract === pub.id;
            const hasAbstract = Boolean(pub.abstract);

            return (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 sm:p-8 border transition-all duration-300 bg-white border-slate-200 shadow-sm hover:shadow-md"
              >
                {/* Academic Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200">
                      {pub.code ? `[${pub.code}] ` : ''}{pub.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {pub.statusBadge}
                    </span>
                  </div>

                  <span className="font-serif italic text-sm text-slate-600">
                    {pub.venue}
                  </span>
                </div>

                {/* Paper Title (Scholarly Serif) */}
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                  {pub.title}
                </h4>

                {/* Authors Citation Style */}
                <p className="text-sm text-slate-700 mb-3">
                  <span className="font-semibold text-slate-900 underline decoration-slate-400">
                    Vidusha Sanidu
                  </span>
                  <span>{pub.authors.replace(/^Vidusha Sanidu/, '')}</span>
                </p>

                {/* Core Focus Line */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 mb-4">
                  <p className="text-xs sm:text-sm text-slate-700 font-sans">
                    <strong className="text-blue-900 font-medium">Research Scope: </strong>
                    {pub.focus}
                  </p>
                </div>

                {/* Scholarly Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {hasAbstract ? (
                    <button
                      type="button"
                      onClick={() => setExpandedAbstract(isAbstractExpanded ? null : pub.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors cursor-pointer"
                    >
                      <span>{isAbstractExpanded ? "Hide Abstract" : "Read Abstract"}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isAbstractExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed opacity-75"
                      title="Abstract in preparation"
                    >
                      <span>Abstract in Preparation</span>
                    </button>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>Request Draft</span>
                  </a>
                </div>

                {/* Abstract Accordion */}
                <AnimatePresence>
                  {isAbstractExpanded && pub.abstract && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden space-y-4 mb-4 pt-2 border-t border-slate-100"
                    >
                      <div>
                        <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                          Abstract:
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans text-justify">
                          {pub.abstract}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Topic Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Academic Inquiries & Collaboration Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center relative shadow-xs"
      >
        <div className="max-w-2xl mx-auto space-y-3">
          <h4 className="font-serif text-2xl font-bold text-slate-900">
            Academic Research Collaborations & Graduate Opportunities
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            I welcome discussions regarding prospective M.Sc. / Ph.D. positions, co-authorship on preprints, and interdisciplinary research initiatives in Federated Learning and Privacy-Preserving AI.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs font-mono border border-slate-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-300" />
              <span>Contact via Email</span>
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-medium text-xs font-mono border border-slate-300 transition-colors shadow-2xs"
            >
              <span>View Journey & Milestones</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
