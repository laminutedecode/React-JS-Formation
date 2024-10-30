// Dans notre exemple de compteur, le store est la pierre angulaire qui centralise l'état de notre application et facilite la gestion des actions et des reducers. 

import { createStore } from 'redux';
import { counterReducer, initialState } from '../reducers/reducers';

const store = createStore(counterReducer, initialState);

// Tout d'abord, nous devons importer la fonction createStore de Redux et notre reducer counterReducer. Ensuite, nous utilisons la fonction createStore pour créer notre store en passant notre reducer comme argument.

const unsubscribe = store.subscribe(() => {
  console.log('Nouvelle valeur du compteur :', store.getState().stock);
});
// Nous pouvons nous abonner aux changements d'état du store en utilisant la méthode subscribe. Cela nous permet d'exécuter une fonction à chaque fois que l'état du store est mis à jour.

store.dispatch({ type: 'INCREMENT' }); // Incrémente le compteur
store.dispatch({ type: 'DECREMENT' }); // Décrémente le compteur

// Nous utilisons la méthode dispatch du store pour émettre des actions. Lorsque nous émettons une action, le store appelle notre reducer avec l'action correspondante, met à jour l'état en conséquence, et notifier tous les abonnés que l'état a changé.


unsubscribe(); 
// Enfin, si nous ne voulons plus écouter les changements d'état, nous pouvons nous désabonner en appelant simplement la fonction retournée par subscribe.


export default store;

// Le store dans Redux sert de conteneur centralisé pour l'état de l'application. Il agit comme une source unique de vérité pour les données de l'application, ce qui signifie que tous les composants de l'application peuvent accéder à l'état global via le store, et les modifications de l'état se font de manière prévisible et gérée de manière centralisée.

// le store Redux permet de stocker toutes les données importantes de l'application de manière organisée et de fournir des méthodes pour les lire et les mettre à jour de manière cohérente. Cela facilite la gestion de l'état de l'application dans des applications complexes, en particulier lorsque plusieurs composants doivent partager et modifier les mêmes données.