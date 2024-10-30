// npm i redux-thunk

// Les actions asynchrones sont utilisées lorsque vous avez besoin d'effectuer des opérations qui prennent du temps, telles que des appels réseau (API), des lectures de fichiers, etc. Ces actions sont généralement implémentées à l'aide de middlewares comme Redux Thunk ou Redux Saga.

// Avec Redux Thunk, par exemple, vous pouvez définir des actions asynchrones qui retournent des fonctions plutôt que des objets. Ces fonctions peuvent avoir accès à dispatch et getState, ce qui permet d'effectuer des appels asynchrones et de dispatcher des actions synchrones en réponse aux résultats de ces appels.

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USERS_REQUEST:
      return {...state, loading: true};
    case FETCH_USERS_SUCCESS:
      return {...state, loading: false, users: action.payload, error: ""};
    case FETCH_USERS_FAILED:
      return {loading: false, users: [], error: action.payload};
    default:
      return state;
  }
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch(fetchUsersSuccess(data)))
      .catch(error => dispatch(fetchUsersFailed(error.message)));
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export { fetchUsers, store };



// Les avantages de l'utilisation du code asynchrone et de redux-thunk dans une application Redux sont multiples :

// Gestion des opérations asynchrones : L'un des principaux avantages de l'utilisation de redux-thunk est sa capacité à gérer les opérations asynchrones dans les actions Redux. Cela permet d'effectuer des requêtes réseau, des appels API, des opérations de lecture/écriture de fichiers, etc., de manière asynchrone tout en maintenant la cohérence de l'état de l'application.


// de plus offre une grande flexibilité dans la façon dont vous structurez vos actions asynchrones. Vous pouvez encapsuler la logique asynchrone dans des fonctions d'action spécifiques, ce qui rend votre code plus modulaire et plus facile à maintenir.

// Traitement des erreurs : redux-thunk facilite la gestion des erreurs dans les actions asynchrones. Vous pouvez utiliser des blocs try-catch pour capturer les erreurs et les gérer de manière appropriée, par exemple en affichant des messages d'erreur à l'utilisateur ou en effectuant des actions de récupération.