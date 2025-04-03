import { useState, useEffect } from 'react';

type ThemeType = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Initialiser à partir du localStorage ou valeur par défaut
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    return savedTheme || 'dark';
  });

  useEffect(() => {
    // Appliquer la classe au body lors du changement de thème
    document.body.classList.toggle('light-theme', theme === 'light');
    // Sauvegarder la préférence
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return {
    theme,
    toggleTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark'
  };
};
