import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = {
  minimal: {
    name: 'Academic Light',
    icon: '📖',
    primary: 'from-slate-900 to-blue-950',
    secondary: 'from-blue-900 to-slate-800',
    accent: 'blue-800',
    background: 'slate-50',
    surface: 'white',
    text: 'slate-800',
    textBright: 'slate-950',
    border: 'slate-200',
    glow: 'transparent',
    shadow: 'rgba(15, 23, 42, 0.06)',
  },
  neon: {
    name: 'Academic Light',
    icon: '📖',
    primary: 'from-slate-900 to-blue-950',
    secondary: 'from-blue-900 to-slate-800',
    accent: 'blue-800',
    background: 'slate-50',
    surface: 'white',
    text: 'slate-800',
    textBright: 'slate-950',
    border: 'slate-200',
    glow: 'transparent',
    shadow: 'rgba(15, 23, 42, 0.06)',
  },
};

export function ThemeProvider({ children }) {
  const currentTheme = 'minimal'; // Always use academic light theme

  // Apply theme to document root
  useEffect(() => {
    const theme = THEMES[currentTheme];
    const root = document.documentElement;
    
    // Apply CSS custom properties for the theme
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== 'name' && key !== 'icon') {
        root.style.setProperty(`--theme-${key}`, value);
      }
    });

    // Apply theme class to body
    document.body.className = `theme-${currentTheme}`;
  }, []);

  const getThemeClasses = (element = 'default') => {
    const theme = THEMES[currentTheme];
    
    const classMap = {
      background: `bg-${theme.background}`,
      surface: `bg-${theme.surface}`,
      text: `text-${theme.text}`,
      textBright: `text-${theme.textBright}`,
      border: `border-${theme.border}`,
      primary: `bg-gradient-to-r ${theme.primary}`,
      secondary: `bg-gradient-to-r ${theme.secondary}`,
      accent: `text-${theme.accent}`,
      glow: `shadow-${theme.glow}`,
    };

    return classMap[element] || '';
  };

  const value = {
    currentTheme,
    themes: THEMES,
    getThemeClasses,
    theme: THEMES[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}