
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';



export default function Stock() {


  const dispatch = useDispatch();
  // Ensuite, dans votre composant où vous souhaitez utiliser les action creators, vous pouvez utiliser bindActionCreators pour lier les action creators à dispatch. Vous pouvez ensuite passer les action creators liés à votre composant comme des props 
  const boundActionCreators = bindActionCreators(actions, dispatch);
  
  const stockCount = useSelector(state => state.stock);


  return (
    <div>
            <h1>Stock: {stockCount}</h1>
            <button onClick={boundActionCreators.increment}>Incrémenter</button>
            <button onClick={boundActionCreators.decrement}>Décrémenter</button>
            <button onClick={boundActionCreators.restock}>Recharger</button>

      </div>
  )
}
// Maintenant, dans votre composant, vous pouvez utiliser les action creators liés directement en tant que props. Lorsque vous cliquez sur les boutons, les actions correspondantes sont automatiquement émises grâce à bindActionCreators.
// Cette méthode simplifie la gestion des actions dans vos composants en vous évitant d'avoir à appeler manuellement dispatch à chaque fois que vous voulez émettre une action. Au lieu de cela, vous pouvez simplement appeler les action creators liés comme des fonctions normales, ce qui rend le code plus lisible et plus concis.