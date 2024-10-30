// Immer est une bibliothèque JavaScript qui facilite la manipulation des données immuables de manière plus intuitive et plus concise. Son objectif principal est de simplifier la gestion de l'immutabilité des données dans des contextes tels que la programmation fonctionnelle et la mise à jour des états dans les applications React ou Redux. Les données immuables sont des données qui, une fois créées, ne peuvent pas être modifiées. En JavaScript, les types primitifs tels que les nombres, les chaînes de caractères et les valeurs booléennes sont immuables. Cela signifie que lorsqu'une variable contenant une valeur primitive est modifiée, elle ne change pas réellement la valeur existante, mais plutôt crée une nouvelle valeur. npm i immer


// let a = 5;
// let b = a; // b contient maintenant la valeur 5
// a = 10; // a est modifié pour contenir la valeur 10, mais b reste à 5
// console.log(b); // Affiche 5


import React from 'react';
import { createStore } from 'redux'; // Import du createStore depuis Redux
import { Provider, useDispatch, useSelector } from 'react-redux'; // Import des hooks Redux
import { produce } from 'immer'; // Import de la fonction produce d'Immer

// Définit une action type ADD_TODO.

const ADD_TODO = 'ADD_TODO';

// Action creator
const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo
});

// Reducer
const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, draft => {
        draft.todos.push(action.payload);
      });
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

// Component
function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <h1>Ma liste de tâches</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => handleAddTodo('Nouvelle tâche')}>
        Ajouter une tâche
      </button>
    </div>
  );
}


function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
