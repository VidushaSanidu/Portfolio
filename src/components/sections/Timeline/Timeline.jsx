import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { TIMELINE_CATEGORIES, TIMELINE_EVENTS } from '../../../constants/timeline';
import {
  Calendar,
  GraduationCap,
  BookOpen,
  Briefcase,
  ChevronRight,
  Compass,
  Rocket
} from 'lucide-react';

const categoryIcons = {
  research: BookOpen,
  academic: GraduationCap,
  career: Briefcase,
  projects: Rocket
};

export default function Timeline() {
  const { currentTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  const filteredEvents = useMemo(() => {
    const list = activeCategory === 'all'
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((event) => event.category === activeCategory);

    // Always display newest first (Sep 2026 -> Sep 2025)
    return [...list].reverse();
  }, [activeCategory]);

  // Dynamically measure the scroll overflow distance
  useEffect(() => {
    const measure = () => {
      if (!contentRef.current || !containerRef.current) return;
      const contentH = contentRef.current.scrollHeight;
      const containerH = containerRef.current.clientHeight;
      const diff = contentH - containerH;
      // Extra clearance ensures the final milestone is comfortably visible
      setScrollRange(Math.max(0, diff + 60));
    };

    const timer = setTimeout(measure, 60);
    const ro = new ResizeObserver(measure);
    if (contentRef.current) ro.observe(contentRef.current);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', measure);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [filteredEvents]);

  // Framer-motion scroll-linking:
  // Starts when component reaches the middle of the screen ('start center'), ends when outer wrapper finishes ('end end')
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end end']
  });

  // Give the first item a gentle resting buffer (0 to 0.05) so it is comfortably read before scrolling progresses
  const rawY = useTransform(scrollYProgress, [0, 0.05, 1], [0, 0, -scrollRange]);
  const smoothY = useSpring(rawY, { damping: 28, stiffness: 170, mass: 0.2 });
  const progressScaleY = useSpring(scrollYProgress, { damping: 28, stiffness: 170 });

  // Top fade only appears once user begins scrolling past the first item
  const topFadeOpacity = useTransform(scrollYProgress, [0.03, 0.1], [0, 1]);

  return (
    <div
      ref={targetRef}
      style={{
        // Give enough scroll travel distance for smooth navigation through milestones
        minHeight: scrollRange > 0 ? `calc(100vh + ${Math.round(scrollRange * 1.6)}px)` : 'auto'
      }}
      className="relative"
    >
      <div className="sticky top-16 md:top-20 h-[calc(100vh-4.5rem)] md:h-[calc(100vh-5.5rem)] max-h-[880px] flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3">
        {/* Header - sleek & compact to maximize timeline card visibility */}
        <div className="text-center mb-3 sm:mb-4 flex-shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase mb-1.5 bg-slate-100 border border-slate-200 text-slate-700 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-blue-900" />
            <span>My Journey & Milestones</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            The Journey So Far
          </h2>

          <p className="text-xs sm:text-sm max-w-2xl mx-auto mt-1 leading-relaxed font-sans text-slate-600">
            Key milestones and growth across my journey as a student, engineer, and researcher.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            {TIMELINE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 border cursor-pointer ${isActive
                    ? 'text-slate-900 bg-slate-100 border-slate-300 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border-slate-200'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Viewport Frame */}
        <div
          ref={containerRef}
          className="flex-1 min-h-0 relative border border-slate-200/90 rounded-3xl bg-slate-50/50 p-4 sm:p-6 md:p-8 shadow-xs overflow-hidden"
        >
          {/* Top subtle fade gradient - only active after user begins scrolling past item 1 */}
          <motion.div
            style={{ opacity: topFadeOpacity }}
            className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-slate-50/95 via-slate-50/70 to-transparent z-20"
          />

          {/* Subdued vertical guide line */}
          <div className="absolute left-4 md:left-1/2 top-6 bottom-6 w-px -translate-x-1/2 bg-slate-200 z-0" />

          {/* Dynamic active vertical progress line */}
          <motion.div
            style={{ scaleY: progressScaleY }}
            className="absolute left-4 md:left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-blue-900 origin-top z-0"
          />

          {/* Smoothly translated list of milestone cards driven by scroll */}
          <motion.div
            ref={contentRef}
            style={{ y: smoothY }}
            className="space-y-8 relative z-10 pt-6 sm:pt-8 pb-16"
          >
            {filteredEvents.map((event, index) => {
              const Icon = categoryIcons[event.category] || BookOpen;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Central Node Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-300 text-blue-900 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Event Card */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-8' : 'md:pl-8'
                      }`}
                  >
                    <div className="rounded-2xl p-5 sm:p-6 border transition-all duration-200 bg-white border-slate-200 shadow-xs hover:shadow-md">
                      {/* Top metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
                          {event.typeBadge}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {event.period}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                        {event.title}
                      </h4>

                      {/* Role & Institution */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500 mb-2.5">
                        <span className="text-blue-900 font-medium">{event.role}</span>
                        <span>•</span>
                        <span className="font-serif italic text-slate-700">{event.organization}</span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm leading-relaxed mb-3 font-sans text-slate-600">
                        {event.summary}
                      </p>

                      {/* Tags & Action Link */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-slate-100">
                        <div className="flex flex-wrap gap-1">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {event.link && (
                          <a
                            href={event.link}
                            className="inline-flex items-center gap-1 text-xs font-mono text-blue-900 hover:text-blue-800 transition-colors font-medium ml-auto"
                          >
                            <span>Explore</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Bottom subtle fade gradient */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-50/95 via-slate-50/70 to-transparent z-20 flex items-end justify-center pb-2">
            <span className="text-[10px] font-mono text-slate-400 bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
              Scroll to advance journey
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
