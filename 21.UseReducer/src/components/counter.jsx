
import { useReducer } from 'react';
import counterReducer from '../reducer/countReducer';

const Counter = () => {
  // Nous affichons le compteur actuel à l'aide de state.count et utilisons dispatch pour déclencher les actions d'incrémentation et de décrémentation.
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Compteur: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrémenter</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Décrémenter</button>
    </div>
  );
};

export default Counter;
