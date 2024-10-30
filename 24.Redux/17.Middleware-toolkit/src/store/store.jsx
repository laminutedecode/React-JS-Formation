
// npm install redux-logger
// 


import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../Slice/counterSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Ajoutez d'autres tranche (slices) ici si nécessaire
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  }
});

export default store;






// Dans cet exemple, nous utilisons applyMiddleware de Redux Toolkit pour appliquer le middleware de journalisation logger directement lors de la configuration du magasin. Cela ajoute le middleware de journalisation à la chaîne de middleware utilisée par le magasin Redux Toolkit.





