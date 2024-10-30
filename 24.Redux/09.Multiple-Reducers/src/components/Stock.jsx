
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';



export default function Stock() {


  const dispatch = useDispatch();

  const boundActionCreators = bindActionCreators(actions, dispatch);

  const stockCount = useSelector(state => state.stock);
  const cardCount = useSelector(state => state.card);


  return (
    <div>
            <h1>Stock: {stockCount}</h1>
            <button onClick={boundActionCreators.increment}>Incrémenter</button>
            <button onClick={boundActionCreators.decrement}>Décrémenter</button>
            <button onClick={boundActionCreators.restock}>Recharger</button>

            <h1>Panier: {cardCount}</h1>
            <button onClick={boundActionCreators.addToCart}>Ajouter au panier</button>
            <button onClick={boundActionCreators.removeFromCart}>Supprimer du pannier</button>
            {/* retourner dans reducer et separe les initialValue */}


      </div>
  )
}
