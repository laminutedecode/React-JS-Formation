



export const initialState = {
  stock: 50,
}


export function counterReducer(state = initialState, action) {

switch (action.type) {
    case 'INCREMENT':
      return { ...state, stock: state.stock + 1 };
    case 'DECREMENT':
      return { ...state, stock: state.stock - 1 };
      case 'RESTOCK':
        return { ...state, stock: initialState.stock }; 
    default:
        return state;
}
}


