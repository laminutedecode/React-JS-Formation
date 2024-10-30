import  { useState } from 'react';
import ThemeContext from './ThemeContext';


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeContext est créé à l'aide de createContext, et ThemeProvider est un composant qui enveloppe ses enfants avec le contexte. Il fournit également une fonction toggleTheme pour changer le thème.
export default ThemeProvider;
