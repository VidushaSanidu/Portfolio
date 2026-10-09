import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { TIMELINE_CATEGORIES, TIMELINE_EVENTS } from '../../../constants/timeline';
import {
  Calendar,
  GraduationCap,
  BookOpen,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';

const categoryIcons = {
  research: BookOpen,
  academic: GraduationCap,
  industry: Briefcase,
  milestone: Award
};

export default function Timeline() {
  const { currentTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const isMinimal = currentTheme === 'minimal';

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'all') return TIMELINE_EVENTS;
    return TIMELINE_EVENTS.filter((event) => event.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="timeline" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-3 bg-slate-800/90 border border-slate-700/80 text-cyan-300">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>Curriculum Vitae & Milestones</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Academic & Professional Trajectory
        </h2>

        <p
          className={`text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-sans ${
            isMinimal ? 'text-gray-600' : 'text-slate-300'
          }`}
        >
          Chronological record of research publications, academic qualifications, and systems architecture leadership.
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-2 mb-14"
      >
        {TIMELINE_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                isActive
                  ? 'text-cyan-300 bg-slate-800 border-slate-600 shadow-sm'
                  : isMinimal
                  ? 'text-gray-600 hover:text-gray-900 bg-gray-100 border-gray-200'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-850 border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </motion.div>

      {/* Timeline Stream */}
      <div className="relative">
        {/* Subdued vertical guide line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-slate-800" />

        <div className="space-y-10 relative">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => {
              const Icon = categoryIcons[event.category] || BookOpen;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Event Card */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-10' : 'md:pl-10'
                    }`}
                  >
                    <div
                      className={`rounded-2xl p-6 border transition-all duration-200 ${
                        isMinimal
                          ? 'bg-white border-gray-200 shadow-sm'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-md'
                      }`}
                    >
                      {/* Top metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-800 text-cyan-300 border border-slate-700">
                          {event.typeBadge}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {event.period}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 leading-snug">
                        {event.title}
                      </h4>

                      {/* Role & Institution */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                        <span className="text-cyan-400">{event.role}</span>
                        <span>•</span>
                        <span className="font-serif italic text-slate-300 text-sm">{event.organization}</span>
                      </div>

                      {/* Summary */}
                      <p className={`text-xs sm:text-sm leading-relaxed mb-3 font-sans ${isMinimal ? 'text-gray-600' : 'text-slate-300'}`}>
                        {event.summary}
                      </p>

                      {/* Highlights */}
                      {event.highlights && event.highlights.length > 0 && (
                        <div className="space-y-1.5 mb-3 pt-3 border-t border-slate-800">
                          {event.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags & Action Link */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80">
                        <div className="flex flex-wrap gap-1">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 text-slate-400 border border-slate-700/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {event.link && (
                          <a
                            href={event.link}
                            className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <span>Inspect</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
