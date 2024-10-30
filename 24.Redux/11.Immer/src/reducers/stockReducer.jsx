export const initialStock = {
  stock: 50,
}


export function stockReducer(state = initialStock, action) {

switch (action.type) {
    case 'INCREMENT':
      return { ...state, stock: state.stock + 1 };
    case 'DECREMENT':
      return { ...state, stock: state.stock - 1 };
      case 'RESTOCK':
        return { ...state, stock: initialStock.stock }; 
    default:
        return state;
}
}


