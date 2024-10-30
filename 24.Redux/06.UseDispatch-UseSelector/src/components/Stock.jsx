// Nous importons useDispatch et useSelector de React Redux pour pouvoir accéder à la fonction dispatch du store Redux et à l'état du stock.
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions/actions'; // Importer les action creators



export default function Stock() {

   // Nous utilisons useDispatch pour obtenir une référence à la fonction dispatch, que nous utilisons pour émettre des actions lorsque les boutons sont cliqués.
   const dispatch = useDispatch();
   // Nous utilisons useSelector pour sélectionner la valeur stateCount de l'état du store, qui représente notre stock.
   const stockCount = useSelector(state => state.stock); 
 

  return (
    <div>
            <h1>Stock: {stockCount}</h1>
            <button onClick={() => dispatch(increment())}>Incrémenter</button>
            <button onClick={() => dispatch(decrement())}>Décrémenter</button>
      </div>
  )
}
