import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UIProvider } from "./contexts/UIContext";
import { ScrollProgressBar } from "./components/ui/animations/ScrollAnimations/ScrollEffects";
import ErrorBoundary from "./components/ui/common/ErrorBoundary";
import useKeyboardShortcuts from "./hooks/useKeyboardShortcuts";
import { createSkipLink } from "./utils/accessibility";
import { ToastProvider } from "./components/ui/common/Toast";

const Navbar = lazy(() => import("./components/layout/Navbar"));
const Hero = lazy(() => import("./components/sections/Hero/Hero"));
const Education = lazy(() => import("./components/sections/Education"));
const Research = lazy(() => import("./components/sections/Research"));
const Timeline = lazy(() => import("./components/sections/Timeline"));
const Projects = lazy(() => import("./components/sections/Projects"));
const SkillsVisualization = lazy(() => import("./components/sections/Skills"));
const Contact = lazy(() => import("./components/sections/Contact"));

function AppContent() {

  // Enable keyboard shortcuts
  useKeyboardShortcuts();

  // Add skip link for accessibility
  useEffect(() => {
    const skipLink = createSkipLink();
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return (
    <div className="overflow-x-clip antialiased transition-colors duration-500 text-slate-800 bg-[#f8fafc]">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Academic Research Light Theme Background */}
      <div className="fixed top-0 -z-20 h-full w-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-0 h-screen w-screen transition-all duration-500 bg-[#f8fafc] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(224,231,255,0.35),rgba(248,250,252,0.98))]"
        >
          {/* Subtle architectural dot lattice */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
        </motion.div>
      </div>

      <Navbar />

      <main id="main-content" className="container mx-auto px-4 md:px-8 pb-20 md:pb-28" tabIndex="-1">
        <ErrorBoundary sectionName="hero section">
          <section id="hero" className="scroll-mt-20">
            <Hero />
          </section>
        </ErrorBoundary>

        <ErrorBoundary sectionName="education section">
          <section id="education" className="scroll-mt-20">
            <Education />
          </section>
        </ErrorBoundary>

        <ErrorBoundary sectionName="research section">
          <section id="research" className="scroll-mt-20">
            <Research />
          </section>
        </ErrorBoundary>

        <ErrorBoundary sectionName="timeline section">
          <section id="timeline" className="scroll-mt-20 py-8 md:py-12">
            <Timeline />
          </section>
        </ErrorBoundary>

        <ErrorBoundary sectionName="skills section">
          <section id="skills" className="scroll-mt-20">
            <SkillsVisualization />
          </section>
        </ErrorBoundary>

        <ErrorBoundary sectionName="projects section">
          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
        </ErrorBoundary>

        <ErrorBoundary sectionName="contact section">
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </ErrorBoundary>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UIProvider>
        <ToastProvider>
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center bg-neutral-950">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="h-12 w-12 rounded-full border-4 border-t-purple-500 border-transparent"
                />
              </div>
            }
          >
            <AppContent />
          </Suspense>
        </ToastProvider>
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;