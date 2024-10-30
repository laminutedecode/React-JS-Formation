import { connect } from 'react-redux';
import Stock from './components/Stock';
import './App.css'


// Lorsque votre application devient plus complexe, vous pouvez rencontrer des situations où un seul reducer devient difficile à gérer. C'est là qu'interviennent les multiples reducers dans Redux. Les multiples reducers vous permettent de diviser la gestion de l'état de votre application en plusieurs fonctions de réduction spécialisées, chacune gérant une partie spécifique de l'état global de l'application. Voici comment cela fonctionne :


// Plutôt que d'avoir un seul reducer géant pour gérer tout l'état de votre application, vous pouvez diviser la logique en plusieurs reducers spécialisés, chacun gérant un morceau spécifique de l'état. Par exemple, si votre application gère à la fois un compteur et un panier d'achat, vous pouvez avoir un reducer pour le compteur et un autre reducer pour le panier.


// Redux fournit une fonction combineReducers pour combiner plusieurs reducers en un seul reducer racine. Vous lui passez simplement un objet où les clés correspondent aux clés de l'état global et les valeurs sont des reducers individuels. combineReducers crée alors un nouveau reducer qui appelle chaque reducer individuel avec la partie de l'état qui lui correspond, puis combine les résultats pour former l'état global.


// Lorsque vous utilisez plusieurs reducers, chaque reducer gère une partie spécifique de l'état global de l'application. Vous pouvez accéder à ces parties spécifiques de l'état en utilisant les sélecteurs appropriés dans vos composants. Par exemple, si vous avez un reducer pour le compteur et un autre pour le panier, vous pouvez utiliser des sélecteurs pour accéder à l'état du compteur et à l'état du panier dans différents composants.


// Chaque reducer ne traite que les actions qui lui sont pertinentes. Lorsqu'une action est émise, Redux appelle chaque reducer avec cette action, mais seuls les reducers qui correspondent au type de l'action effectuent des modifications. Cela permet d'isoler la logique de gestion de l'état et de rendre les reducers plus simples et plus faciles à comprendre. Créer les actions dans actions

function App() {


  return (
    <>
      <Stock />
   
    </>
  )
}

export default connect()(App);
