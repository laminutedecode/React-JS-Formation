

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Slice/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;


// Dans ce composant Counter, nous utilisons useSelector pour extraire la valeur du compteur à partir de l'état global Redux, et useDispatch pour obtenir la fonction de dispatch Redux. Ensuite, nous utilisons ces fonctions de dispatch pour déclencher les actions correspondantes définies dans counterSlice.js.