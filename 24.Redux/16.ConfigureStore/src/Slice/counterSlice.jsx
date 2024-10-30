// Supposons que vous ayez un composant React appelé Counter et que vous souhaitez gérer son état à l'aide de Redux Toolkit :

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;


// Dans ce fichier counterSlice.js, nous avons utilisé createSlice() pour définir une tranche (slice) appelée 'counter'. Cette tranche contient un état initial avec une seule propriété value initialisée à 0, ainsi que trois réducteurs (reducers) : increment, decrement et incrementByAmount. Ces réducteurs sont des fonctions qui prennent l'état actuel et, éventuellement, une action, et mettent à jour l'état en conséquence.

// Ensuite, vous pouvez utiliser cette tranche dans votre magasin Redux et l'incorporer dans votre composant Counter 