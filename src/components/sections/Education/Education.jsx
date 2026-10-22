import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import SectionHeading from '../../ui/common/SectionHeading';
import { EDUCATION, EXPERIENCES } from '../../../constants/education';
import {
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react';

export default function Education() {
  const { currentTheme } = useTheme();
  const isMinimal = currentTheme === 'minimal';

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Anchor for experience link */}
      <div id="experience" className="absolute -top-24" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 sm:mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-3 border shadow-2xs ${isMinimal
          ? 'bg-slate-100 border-slate-200 text-slate-700'
          : 'bg-neutral-900 border-neutral-700 text-slate-300'
          }`}>
          <span>Academic & Professional Track</span>
        </div>

        <SectionHeading level="section">
          Education & Experience
        </SectionHeading>

        <p className={`text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans leading-relaxed ${isMinimal ? 'text-slate-600' : 'text-slate-300'
          }`}>
          Foundation in computer science through a rigorous academic curriculum, strengthened by research appointments and industry experience.
        </p>
      </motion.div>

      {/* Two-Column Grid: Education (Left) & Experience (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

        {/* ================= LEFT COLUMN: EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full space-y-6"
        >
          {/* Column Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-neutral-800">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isMinimal ? 'bg-blue-50 text-blue-900 border border-blue-200' : 'bg-blue-950/40 text-blue-400 border border-blue-800/40'
              }`}>
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isMinimal ? 'text-slate-900' : 'text-white'
                }`}>
                Education
              </h3>
              <p className="text-xs text-slate-500 font-mono">Academic qualifications & curriculum</p>
            </div>
          </div>

          {/* Education Content Cards */}
          <div className="flex-1 flex flex-col gap-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex-1 flex flex-col justify-between ${isMinimal
                  ? 'bg-white border-slate-200 shadow-sm'
                  : 'bg-neutral-900/60 border-neutral-800 shadow-md'
                  }`}
              >
                <div>
                  {/* Header Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium ${isMinimal
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40'
                      }`}>
                      <Award className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>{edu.status}</span>
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-semibold ${isMinimal
                      ? 'bg-blue-50 text-blue-900 border border-blue-200'
                      : 'bg-blue-950/40 text-blue-300 border border-blue-800/40'
                      }`}>
                      {edu.gpa}
                    </span>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded border ml-auto ${isMinimal ? 'bg-slate-50 text-slate-600 border-slate-200' : 'bg-neutral-800 text-slate-400 border-neutral-700'
                      }`}>
                      {edu.period}
                    </span>
                  </div>

                  {/* Degree Title & Institution */}
                  <h4 className={`font-serif text-xl sm:text-2xl font-bold tracking-tight ${isMinimal ? 'text-slate-900' : 'text-white'
                    }`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm font-medium mt-1 ${isMinimal ? 'text-blue-900' : 'text-blue-400'}`}>
                    {edu.institution}
                  </p>
                  {(edu.faculty || edu.department) && (
                    <p className={`text-xs font-serif italic mt-0.5 ${isMinimal ? 'text-slate-500' : 'text-slate-400'}`}>
                      {[edu.faculty, edu.department].filter(Boolean).join(' • ')}
                    </p>
                  )}

                  {/* Summary */}
                  {edu.summary && (
                    <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isMinimal ? 'text-slate-600' : 'text-slate-300'
                      }`}>
                      {edu.summary}
                    </p>
                  )}
                </div>

                {/* Mathematics, Statistics & CS Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-neutral-800">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
                      {edu.courseworkLabel || "Key Modules"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className={`text-[11px] font-sans px-2.5 py-1 rounded-md border ${isMinimal
                            ? 'bg-slate-50 text-slate-700 border-slate-200'
                            : 'bg-neutral-800/60 text-slate-300 border-neutral-700/80'
                            }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: EXPERIENCE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full space-y-6"
        >
          {/* Column Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-neutral-800">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isMinimal ? 'bg-blue-50 text-blue-900 border border-blue-200' : 'bg-blue-950/40 text-blue-400 border border-blue-800/40'
              }`}>
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isMinimal ? 'text-slate-900' : 'text-white'
                }`}>
                Experience
              </h3>
              <p className="text-xs text-slate-500 font-mono">Research appointments & industry roles</p>
            </div>
          </div>

          {/* Experience Timeline Stack */}
          <div className="flex-1 flex flex-col justify-between gap-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className={`rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex-1 flex flex-col justify-between ${isMinimal
                  ? 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                  : 'bg-neutral-900/60 border-neutral-800 shadow-md hover:border-neutral-700'
                  }`}
              >
                <div>
                  {/* Role & Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div>
                      <h4 className={`font-serif text-lg font-bold ${isMinimal ? 'text-slate-900' : 'text-white'
                        }`}>
                        {exp.role}
                      </h4>
                      <p className={`text-xs sm:text-sm font-medium ${isMinimal ? 'text-blue-900' : 'text-blue-400'
                        }`}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 self-start sm:self-center">
                      {exp.isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                      <span className={`text-xs font-mono px-2.5 py-0.5 rounded border ${exp.isCurrent
                        ? isMinimal
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200 font-medium'
                          : 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40 font-medium'
                        : isMinimal
                          ? 'bg-slate-50 text-slate-600 border-slate-200'
                          : 'bg-neutral-800 text-slate-400 border-neutral-700'
                        }`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className={`text-xs sm:text-sm leading-relaxed mt-2 ${isMinimal ? 'text-slate-600' : 'text-slate-300'
                    }`}>
                    {exp.summary}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100 dark:border-neutral-800">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${isMinimal
                        ? 'bg-slate-50 text-slate-600 border-slate-200'
                        : 'bg-neutral-800 text-slate-400 border-neutral-700'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
