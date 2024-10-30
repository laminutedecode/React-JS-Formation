// useEffect est un hook qui sert à gerer les effets de bords. En gros il sert à exécutés certains morceaux de code à un certains moments spécifiques de la vie de votre composant. Par exemple, lorsque le composant est affiché à l'écran pour la première fois, ou lorsqu'il est mis à jour avec de nouvelles données.

import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    // Cette fonction sera exécutée après chaque rendu du composant
    const intervalID = setInterval(() => {
      // Mettre à jour l'heure toutes les secondes
      setHeure(new Date());
    }, 1000);

    // La fonction de nettoyage sera appelée lorsque le composant est retiré
    return () => {
      clearInterval(intervalID);
      // Code de nettoyage ici (si nécessaire)
    };
  }, []); // Les crochets vides signifient que cet effet s'exécute uniquement au montage et au démontage du composant. 
  // Le tableau des dépendances est un argument optionnel que vous pouvez fournir à la fonction useEffect dans un composant React. Ce tableau indique à React quelles variables ou valeurs le useEffect doit surveiller. Si l'une de ces valeurs change entre les rendus, le useEffect sera exécuté à nouveau.

  return (
    <>
      <div>
      <h2>Heure actuelle :</h2>
      <p>{heure.toLocaleTimeString()}</p>
    </div>
    </>
  )
}

export default App
