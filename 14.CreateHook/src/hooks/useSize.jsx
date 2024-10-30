import {useState, useEffect} from 'react'

//On créer une fonction dans un export default cela peut ce definir comme un composant sauf que au lieu de return du JSX il va nous retourner une fonction ou une valeur
export default function useSize(){

const [size, setSize] = useState();


useEffect(()=> {
  window.addEventListener('resize', resizeFunc);
  function resizeFunc(){
    setSize(window.innerWidth)
  }
  resizeFunc();
//on clean la fonction
  return()=> {
    window.addEventListener('resize', resizeFunc);
  }
}, []);
return size;
}

