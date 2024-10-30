


import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Slice/counterSlice';
import usersReducer from '../Slice/usersSlice'; // Importez votre reducer usersSlice

import logger from 'redux-logger';



const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer, // Ajoutez votre reducer usersSlice
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  },

  
});

export default store;





