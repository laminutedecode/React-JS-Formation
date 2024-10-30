
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, restock } from '../actions/actions'; // Importer les action creators



export default function Stock() {


   const dispatch = useDispatch();

   const stockCount = useSelector(state => state.stock); 

   //  utiliser l'action de recharge dans nos composant pour permettre aux utilisateurs de recharger le stock. Ajoutez simplement un nouveau bouton dans votre composant et dispatchez l'action de recharge lorsque ce bouton est cliqué 
 

  return (
    <div>
            <h1>Stock: {stockCount}</h1>
            <button onClick={() => dispatch(increment())}>Incrémenter</button>
            <button onClick={() => dispatch(decrement())}>Décrémenter</button>
            <button onClick={() => dispatch(restock())}>Recharger</button>

      </div>
  )
}
