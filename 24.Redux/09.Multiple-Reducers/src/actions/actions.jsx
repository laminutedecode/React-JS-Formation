export function increment() {
  return {
      type: 'INCREMENT'
  };
}

export function decrement() {
  return {
      type: 'DECREMENT'
  };
}
export const restock = () => ({
  type: 'RESTOCK'
});




export const addToCart = (item = 1) => {
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
};

export const removeFromCart = (item = 1) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item
  }
};

//ensuite créer reducerCard


