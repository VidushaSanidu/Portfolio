// Typography utilities for scholarly academic heading styles across themes

export const getHeadingClasses = (level = 'section') => {
  const baseClasses = "font-serif font-bold tracking-tight text-slate-900";

  // Size patterns by hierarchy level
  const sizes = {
    hero: 'text-5xl md:text-7xl',
    section: 'text-3xl md:text-4xl',
    subsection: 'text-2xl md:text-3xl',
    card: 'text-xl md:text-2xl'
  };

  const size = sizes[level] || sizes.section;

  return `${baseClasses} ${size}`;
};

// Predefined heading component classes for academic light aesthetic
export const headingStyles = {
  // Hero section - largest and most prominent
  hero: {
    neon: 'font-serif text-5xl md:text-7xl font-bold tracking-tight text-slate-900',
    minimal: 'font-serif text-5xl md:text-7xl font-bold tracking-tight text-slate-900'
  },
  
  // Main section headings - consistent across all sections
  section: {
    neon: 'font-serif text-3xl md:text-4xl font-bold tracking-tight text-slate-900',
    minimal: 'font-serif text-3xl md:text-4xl font-bold tracking-tight text-slate-900'
  },

  // Sub-section headings
  subsection: {
    neon: 'font-serif text-2xl md:text-3xl font-bold tracking-tight text-slate-800',
    minimal: 'font-serif text-2xl md:text-3xl font-bold tracking-tight text-slate-800'
  },

  // Card/component headings
  card: {
    neon: 'font-serif text-xl md:text-2xl font-bold tracking-tight text-slate-900',
    minimal: 'font-serif text-xl md:text-2xl font-bold tracking-tight text-slate-900'
  }
};

// Helper function to get spacing classes for consistent margins
export const getHeadingSpacing = (level = 'section') => {
  const spacing = {
    hero: 'mb-4 md:mb-6',
    section: 'mb-4 md:mb-6',
    subsection: 'mb-3 md:mb-4', 
    card: 'mb-2 md:mb-3'
  };
  
  return spacing[level] || spacing.section;
};

// Complete heading utility that combines classes and spacing
export const getCompleteHeadingClasses = (level = 'section', theme = 'minimal') => {
  const styleObj = headingStyles[level] || headingStyles.section;
  const headingClass = styleObj.minimal;
  const spacingClass = getHeadingSpacing(level);
  
  return `${headingClass} ${spacingClass}`;
};