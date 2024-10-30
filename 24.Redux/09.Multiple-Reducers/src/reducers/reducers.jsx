



export const initialState = {
  stock: 50,
  card: 0,
}


export function counterReducer(state = initialState, action) {

switch (action.type) {
    case 'INCREMENT':
      return { ...state, stock: state.stock + 1 };
    case 'DECREMENT':
      return { ...state, stock: state.stock - 1 };
      case 'RESTOCK':
        return { ...state, stock: initialState.stock }; 
      case 'ADD_TO_CART':
        return { ...state, card: state.card + 1 };
      case 'REMOVE_FROM_CART':
        return { ...state, card: state.card - 1 };
    default:
        return state;
}
}
//aller dans app

