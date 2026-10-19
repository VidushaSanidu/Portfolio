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
  CheckCircle2,
  Layers,
  Copy,
  Check,
  FileCode,
  FileText
} from 'lucide-react';

const iconMap = {
  fl: Network,
  privacy: ShieldCheck,
  'ml-dl': Brain,
  edge: Cpu
};

export default function Research() {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [expandedAbstract, setExpandedAbstract] = useState("pedestrian-trajectory-fl-2026");
  const [bibtexOpen, setBibtexOpen] = useState(null);
  const [copiedBibtex, setCopiedBibtex] = useState(null);

  const copyToClipboard = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtex(id);
    setTimeout(() => {
      setCopiedBibtex(null);
    }, 2500);
  };

  return (
    <section id="research" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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
          Investigating the frontiers of decentralized machine learning, provable privacy guarantees, and edge systems with applications in spatial-temporal dynamics and clinical informatics.
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
              Methodological foundations, theoretical challenges, and distributed architectures.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {RESEARCH_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.id] || Brain;
            const isSelected = selectedPillar === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => setSelectedPillar(isSelected ? null : pillar.id)}
                className={`rounded-2xl p-6 sm:p-7 border cursor-pointer transition-all duration-300 bg-white shadow-xs hover:shadow-md ${isSelected ? 'border-blue-900 ring-1 ring-blue-900/30' : 'border-slate-200 hover:border-slate-300'
                  }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isSelected ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono bg-slate-100 text-slate-800 border border-slate-200">
                    Focal: {pillar.highlight}
                  </span>
                </div>

                {/* Sub-areas */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {pillar.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-blue-900 font-mono mt-0.5">•</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
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
          <span className="text-xs font-mono text-blue-900 font-medium bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            [CJS 2026 Submission]
          </span>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, index) => {
            const isAbstractExpanded = expandedAbstract === pub.id;
            const isBibtexVisible = bibtexOpen === pub.id;
            const isCopied = copiedBibtex === pub.id;

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
                      {index === 0 ? '[J1]' : '[W1]'} {pub.type}
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
                  <span className="font-semibold text-slate-900 underline decoration-slate-400">Vidusha Sanidu</span>
                  {pub.authors.includes('et al.') ? ', et al.' : ', Collaborators'}
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
                  <button
                    type="button"
                    onClick={() => setExpandedAbstract(isAbstractExpanded ? null : pub.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors cursor-pointer"
                  >
                    <span>{isAbstractExpanded ? "Hide Abstract" : "Read Abstract"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isAbstractExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {pub.bibtex && (
                    <button
                      type="button"
                      onClick={() => setBibtexOpen(isBibtexVisible ? null : pub.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors cursor-pointer"
                    >
                      <FileCode className="w-3.5 h-3.5 text-blue-900" />
                      <span>BibTeX</span>
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
                  {isAbstractExpanded && (
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

                      <div>
                        <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                          Key Contributions:
                        </h5>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {pub.contributions.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* BibTeX Code Viewer Block */}
                <AnimatePresence>
                  {isBibtexVisible && pub.bibtex && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mb-4"
                    >
                      <div className="relative rounded-xl bg-slate-900 p-4 border border-slate-800 font-mono text-xs text-slate-200 shadow-sm">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                          <span>BibTeX Entry</span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(pub.id, pub.bibtex)}
                            className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition-colors cursor-pointer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed text-slate-200">
                          {pub.bibtex}
                        </pre>
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
    </section>
  );
}
