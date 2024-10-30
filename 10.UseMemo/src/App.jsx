// useMemo est un autre hook de React qui est utilisé pour optimiser les performances en mémorisant la valeur calculée d'une expression, afin de l'éviter d'être recalculée à chaque rendu du composant. Cela peut être particulièrement utile lorsque le calcul d'une valeur est coûteux en termes de ressources, et que cette valeur ne change que lorsque certaines dépendances changent.

import { useState, useMemo } from 'react';
import './App.css'

function App() {

  const [a, setA] = useState(5);
  const [b, setB] = useState(10);

  // Utilisation de useMemo pour mémoriser le résultat du calcul
  const resultatCalcul = useMemo(() => {
    console.log('Calcul du résultat...');
    return a + b;
  }, [a, b]); // Le tableau `[a, b]` spécifie les dépendances du calcul

  // Dans cet exemple, le useMemo mémorise le résultat du calcul de a + b. Le calcul n'est effectué que lorsque l'une des dépendances (a ou b) change. Si ni a ni b ne changent entre les rendus, React récupère la valeur mémorisée au lieu de recalculer, ce qui peut améliorer les performances, surtout si le calcul est gourmand en ressources.


  return (
    <>
      <div>
      <p>Résultat du calcul : {resultatCalcul}</p>
      <button onClick={() => setA(a + 1)}>Incrémenter A</button>
      <button onClick={() => setB(b + 1)}>Incrémenter B</button>
    </div>
    </>
  )
}

export default App
