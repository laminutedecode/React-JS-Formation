import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Counter = () => {
  // Utiliser useContext pour accéder au contexte
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <p>Thème actuel: {theme}</p>
      <button onClick={toggleTheme}>Changer de thème</button>
    </div>
  );
};

export default Counter;
