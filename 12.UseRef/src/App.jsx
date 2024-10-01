// useRef est principalement utilisé pour accéder à des références d'éléments DOM dans un composant React. Contrairement à la gestion de l'état avec useState, l'utilisation de useRef ne déclenchera pas le rendu du composant lorsqu'elle est mise à jour. Cela en fait un excellent choix pour stocker des valeurs qui ne nécessitent pas de déclenchement de rendu lorsqu'elles changent. Par exemple nous allons utiliser une video estla selectionner avec useRef pour appliquer play pause stop etc...


import './App.css';
import { useState, useEffect, useRef } from 'react';
import Video from './Video-01.mp4';

function App() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // Utilisez ref.current pour accéder à l'élément vidéo
    console.log(ref.current);

    if (toggle) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [toggle]);

  const toggleFunc = () => {
    // Inversez l'état toggle
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <video ref={ref} width="100%" autoPlay muted controls>
        <source src={Video} type='video/mp4' />
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
