// . Avec React, il existe deux concepts distincts :  useMemo pour la memoization de valeurs calculées à l'intérieur d'un composant fonctionnel et React.memo pour la memoization de composants.

import { useState } from 'react';
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div>
      <p>Count: {count}</p>

      <Button onClick={handleIncrement} label="Increment Count" />
      <Button onClick={handleDecrement} label="Decrement Count" />
    </div>
  );
}
// Dans cet exemple, le composant Button est défini dans le fichier Button.js et exporté pour être utilisé dans d'autres fichiers. Le composant est enveloppé dans React.memo pour la memoization. 

export default App;
