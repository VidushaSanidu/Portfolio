import { motion } from "framer-motion";
import { HERO_CONTENT, CONTACT } from "../../../constants/constants";
import { useTypingAnimation } from "../../../hooks/useTypingAnimation";
import { HiDownload, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';
import { GraduationCap, BookOpen, ShieldCheck } from 'lucide-react';

import { useCV } from '../../../hooks/useCV';
import Button from '../../ui/common/Button';
import profileImage from '../../../assets/pro4.png';
import { QUICK_STATS } from "../../../constants/skills";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export default function Hero() {
    const { cvUrl, isLoading } = useCV();
    const typedRole = useTypingAnimation(HERO_CONTENT.roles, 120, 80, 2200);

    return (
        <section className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle academic background ambiance - light parchment & cool slate tone */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] rounded-full blur-3xl bg-blue-100/40" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center"
                >
                    {/* Main Scholarly Content - Left Side (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Scholar Name & Academic Designation */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                                {HERO_CONTENT.name}
                            </h1>

                            <div className="space-y-2.5 pt-1">
                                <div>
                                    <span className="font-serif italic text-xl sm:text-2xl text-slate-700">
                                        Computer Science Researcher
                                    </span>
                                </div>
                                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-800 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200 w-fit">
                                    <span>{typedRole}</span>
                                    <span className="inline-block w-1.5 h-3.5 bg-blue-900 animate-pulse" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Research Focus Summary */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg leading-relaxed text-slate-600 font-sans"
                        >
                            {HERO_CONTENT.summary}
                        </motion.p>

                        {/* Academic Highlights List */}
                        <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 pt-1">
                            {HERO_CONTENT.highlights.slice(0, 4).map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <span className="text-blue-900 font-mono text-xs mt-0.5">▪</span>
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Primary Academic Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-3 pt-2"
                        >
                            <Button
                                as="a"
                                href="#research"
                                variant="primary"
                                size="md"
                                className="group !bg-slate-900 hover:!bg-slate-800 !text-white !border !border-slate-900 shadow-xs"
                            >
                                <BookOpen className="text-lg text-blue-300 transition-transform group-hover:scale-110" />
                                <span>Selected Research</span>
                            </Button>

                            <Button
                                as="a"
                                href={cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                size="md"
                                loading={isLoading}
                                className="group !bg-white !border-slate-300 !text-slate-800 hover:!bg-slate-50 shadow-2xs"
                            >
                                <HiDownload className="text-lg text-slate-700 transition-transform group-hover:scale-110" />
                                <span>Academic CV (PDF)</span>
                            </Button>

                            <Button
                                as="a"
                                href="#contact"
                                variant="secondary"
                                size="md"
                                className="group !bg-white !border-slate-300 !text-slate-800 hover:!bg-slate-50 shadow-2xs"
                            >
                                <HiMail className="text-lg text-slate-700 transition-transform group-hover:scale-110" />
                                <span>Inquiries</span>
                            </Button>
                        </motion.div>

                        {/* Scholar Index Badges (Scholar, ORCID, GitHub, LinkedIn) */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200"
                        >
                            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-2">
                                Academic Profiles:
                            </span>

                            <a
                                href={CONTACT.socials.scholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs transition-colors"
                            >
                                <SiGooglescholar className="text-blue-600" />
                                <span>Google Scholar</span>
                            </a>

                            <a
                                href={CONTACT.socials.orcid}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs transition-colors"
                            >
                                <SiOrcid className="text-emerald-600" />
                                <span>ORCID</span>
                            </a>

                            <a
                                href={CONTACT.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs transition-colors"
                            >
                                <FaGithub className="text-slate-900" />
                                <span>GitHub</span>
                            </a>

                            <a
                                href={CONTACT.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs transition-colors"
                            >
                                <FaLinkedin className="text-blue-700" />
                                <span>LinkedIn</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Academic Profile Directory Card - Right Side (5 cols) */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5"
                    >
                        <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-md">
                            {/* Academic Header Badge */}
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-blue-900" />
                                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                                        Faculty Directory Listing
                                    </span>
                                </div>
                                <span className="text-xs font-mono text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-medium">
                                    UOP • CS
                                </span>
                            </div>

                            {/* Portrait Frame - Understated & Scholarly */}
                            <div className="relative mx-auto mb-5 w-56 h-56 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs">
                                <img
                                    src={profileImage}
                                    alt="Vidusha Sanidu"
                                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="text-3xl font-serif font-bold text-slate-400 hidden items-center justify-center w-full h-full">
                                    VS
                                </div>
                            </div>

                            {/* Scholar Details */}
                            <div className="text-center space-y-1 mb-5">
                                <h3 className="font-serif text-2xl font-bold text-slate-900">
                                    {HERO_CONTENT.name}
                                </h3>
                                <p className="text-xs font-medium text-blue-900 font-mono">
                                    B.Sc. (Hons) in Computer Science Candidate
                                </p>
                                <p className="text-xs text-slate-500">
                                    Department of Statistics & Computer Science
                                </p>
                                <p className="text-xs text-slate-700 font-medium">
                                    University of Peradeniya (UOP)
                                </p>
                            </div>

                            {/* Location & Status Badge */}
                            <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                                <div className="flex items-center justify-center gap-2 text-slate-600">
                                    <HiLocationMarker className="text-slate-400" />
                                    <span>Peradeniya / Colombo, Sri Lanka</span>
                                </div>

                                <div className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[11px] font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Open to Preprints & Graduate Opportunities</span>
                                </div>
                            </div>

                            {/* Key Stats Counter */}
                            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
                                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                                    <div className="text-xl font-bold font-serif text-slate-900">
                                        {QUICK_STATS[0].value}
                                    </div>
                                    <div className="text-[11px] font-mono text-slate-500">
                                        {QUICK_STATS[0].label}
                                    </div>
                                </div>
                                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                                    <div className="text-xl font-bold font-serif text-blue-900">
                                        {QUICK_STATS[1].value}
                                    </div>
                                    <div className="text-[11px] font-mono text-slate-500">
                                        {QUICK_STATS[1].label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}