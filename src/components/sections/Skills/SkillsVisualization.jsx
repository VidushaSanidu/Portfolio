import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA, QUICK_STATS } from '../../../constants/skills';
import SectionHeading from '../../ui/common/SectionHeading';
import { Award, CheckCircle2 } from 'lucide-react';

export default function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-3 bg-slate-100 border border-slate-200 text-slate-700 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-blue-900" />
          <span>Research Competencies & Tooling</span>
        </div>

        <SectionHeading level="section">
          Technical & Scientific Competencies
        </SectionHeading>

        <p className="text-sm sm:text-base max-w-2xl mx-auto mt-3 font-sans text-slate-600">
          Taxonomy of theoretical research foundations, machine learning libraries, edge distributed orchestration, and high-performance systems engineering.
        </p>
      </motion.div>

      {/* Competency Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(SKILLS_DATA).map(([category, data], index) => {
          const Icon = data.icon;
          const isSelected = activeCategory === category;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onClick={() => setActiveCategory(isSelected ? null : category)}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer ${
                isSelected ? 'border-blue-900 ring-1 ring-blue-900/30' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                    {category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    {data.skills.length} Core Competencies
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2.5">
                {data.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 transition-colors hover:bg-slate-100/70"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        {skill.name}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {skill.years}y exp
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Overview Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {QUICK_STATS.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-5 rounded-2xl bg-white border border-slate-200 shadow-xs"
          >
            <div className="mb-2 flex items-center justify-center">
              <stat.icon className="w-5 h-5 text-blue-900" />
            </div>
            <div className="text-2xl font-bold font-serif text-slate-900">
              {stat.value}
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}