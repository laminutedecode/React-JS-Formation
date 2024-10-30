// Pour créer un store Redux avec Redux Toolkit, vous pouvez utiliser la fonction configureStore(). Voici comment vous pouvez créer un magasin en utilisant Redux Toolkit avec votre tranche de compteur :

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Slice/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Ajoutez d'autres tranche (slices) ici si nécessaire
  },
});

export default store;

// Dans ce fichier store.js, nous avons importé configureStore() de @reduxjs/toolkit et le réducteur (counterReducer) que nous avons défini dans counterSlice.js. Ensuite, nous avons utilisé configureStore() pour créer un magasin Redux en passant un objet de configuration. Dans cet objet, la clé reducer est un objet qui associe les noms des tranche (slices) aux réducteurs correspondants.Aller dans app.js
