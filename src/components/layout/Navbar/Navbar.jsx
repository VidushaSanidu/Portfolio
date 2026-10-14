import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { getThemeFocusRing } from '../../../utils/accessibility';

const SECTION_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'Background', href: '#education' },
    { label: 'Research', href: '#research' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const { currentTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
            const isOutsideButton = buttonRef.current && !buttonRef.current.contains(event.target);

            if (isOpen && isOutsideMenu && isOutsideButton) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = SECTION_LINKS.map(link => link.href.slice(1));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial active section
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 w-full backdrop-blur-md shadow-sm z-50 border-b transition-all duration-300 bg-white/90 border-slate-200/90"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Academic Logo & Identity */}
                    <div className="flex-shrink-0">
                        <a href="#hero" className="flex items-center gap-3 group">
                            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm group-hover:bg-blue-950 transition-colors">
                                VS
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                                    Vidusha Sanidu
                                </span>
                                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 -mt-1 hidden sm:block">
                                    CS Researcher • AI Engineer
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-end flex-1">
                        <div className="flex items-center space-x-1 sm:space-x-1.5">
                            {SECTION_LINKS.map((item) => {
                                const isActive = activeSection === item.href.slice(1);
                                return (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        className={`relative px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'text-slate-900 bg-slate-100 font-semibold border border-slate-200 shadow-xs'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        {item.label}
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            ref={buttonRef}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                            className="p-2.5 rounded-lg transition-all duration-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: isOpen ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    animate={{
                                        d: isOpen
                                            ? "M6 6l12 12M6 18L18 6"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={menuRef}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.18 }
                            }}
                            exit={{
                                opacity: 0,
                                y: -8,
                                transition: { duration: 0.15 }
                            }}
                            className="md:hidden py-3 space-y-1 border-t transition-colors bg-white/95 border-slate-200 shadow-lg rounded-b-xl"
                        >
                            {SECTION_LINKS.map((item, index) => {
                                const isActive = activeSection === item.href.slice(1);
                                return (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.04 }}
                                        className={`flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${isActive
                                            ? 'text-slate-900 bg-slate-100 font-semibold'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="mr-2 text-xs text-slate-400">
                                            {isActive ? '▪' : '▫'}
                                        </span>
                                        {item.label}
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}