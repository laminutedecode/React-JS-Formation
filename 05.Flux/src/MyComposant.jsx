


import {useState} from 'react'

export default function MyComposant({onStateChange, ...props}){
  const [internalState, setInternalState] = useState('State du Child');
  
  const handleChange = () => {
    const newState = 'Nouvel état du ChildState';
    
    // Appel de la fonction de rappel pour remonter l'état au parent
    onStateChange(newState);
    
    // Mise à jour de l'état interne du composant enfant si nécessaire
    setInternalState(newState);
  };
      
    
  return (
    <>

       <p> {props.propsParent}</p>
       <p>État du composant enfant : {internalState}</p>
      <button onClick={handleChange}>Changer l'état</button>
       
    </>
  )
}