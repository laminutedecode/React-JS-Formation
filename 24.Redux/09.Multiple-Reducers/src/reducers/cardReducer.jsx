
export const initialCard = {
  card: 0,
}


export function cardReducer(state = initialCard, action) {

switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, card: state.card + 1 };
      case 'REMOVE_FROM_CART':
        return { ...state, card: state.card - 1 };
    default:
        return state;
}
}


