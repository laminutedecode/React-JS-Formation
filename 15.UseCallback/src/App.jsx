import './App.css';
import { useState, useCallback } from 'react';
// useCallback est utilisé pour mémoriser une fonction en mémoire entre les rendus du composant. Cela est utile lorsque vous passez des fonctions en tant que props à des composants enfants. Sans useCallback, chaque rendu du composant créerait une nouvelle instance de la fonction, ce qui pourrait entraîner des rendus inutiles dans les composants enfants. En utilisant useCallback, la fonction est mémorisée et ne change que si les dépendances spécifiées dans le tableau de dépendances changent.
import Composant from './composants/composant'
function App() {

  const [count, setCount] = useState(0);

  // Utilisation de useCallback pour mémoriser la fonction handleClick
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // La dépendance count est spécifiée ici

  return (
    <div>
      <p>Compteur: {count}</p>
      
      {/* Utilisation du composant CounterButton avec la fonction handleClick mémorisée */}
      <Composant onClick={handleClick} label="Incrémenter le compteur" />
    </div>
  );
}
// Dans cet exemple, ont rend un bouton qui incrémente un compteur à chaque clic. Le bouton reçoit une fonction onClick en tant que prop. Si nous n'utilisions pas useCallback, une nouvelle instance de la fonction serait créée à chaque rendu de ParentComponent, même si elle n'a pas changé. Cela pourrait entraîner des rendus inutiles du composant CounterButton.

// Avec useCallback, la fonction handleClick est mémorisée et ne changera que si la dépendance spécifiée change. Cela optimise les performances en évitant la création de nouvelles instances de la fonction à chaque rendu, et en s'assurant que le bouton ne se rend que si la fonction a réellement changé
export default App;

