import {useEffect} from 'react';

import useMedia from './useMedia';
import useLocalStorage from './useLocalStorage';

const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

const className = 'dark-theme';

function useDarkMode() {
  const userPreferedTheme = useMedia('(prefers-color-scheme: dark)', THEME.DARK, THEME.LIGHT);
  const [localTheme, setLocalTheme] = useLocalStorage('theme');
  const theme = typeof localTheme !== 'undefined' ? localTheme : userPreferedTheme;

  const toggleTheme = () => {
    if (theme === THEME.DARK) {
      setLocalTheme(THEME.LIGHT);
    } else {
      setLocalTheme(THEME.DARK);
    }
  };

  useEffect(() => {
    const element = window.document.body;

    if (theme === THEME.DARK) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [theme]);

  return [theme, toggleTheme];
}

export default useDarkMode;
