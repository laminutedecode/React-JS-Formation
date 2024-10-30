
// npm install redux-logger
// 


import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../Slice/counterSlice';
import logger from 'redux-logger';

// Dans cet exemple, process.env.NODE_ENV !== 'production' garantit que Redux DevTools Extension est activée uniquement en mode développement, ce qui est généralement la pratique recommandée pour éviter toute surcharge en production. En mode de production, Redux DevTools Extension est désactivée pour des raisons de performance et de sécurité.

const store = configureStore({
  reducer: {
    counter: counterReducer,
    devTools: process.env.NODE_ENV !== 'production', // Active DevTools seulement en mode développement
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  },
  
});

export default store;






// Dans cet exemple, nous utilisons applyMiddleware de Redux Toolkit pour appliquer le middleware de journalisation logger directement lors de la configuration du magasin. Cela ajoute le middleware de journalisation à la chaîne de middleware utilisée par le magasin Redux Toolkit.





