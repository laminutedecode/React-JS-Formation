



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
        return { ...state, stock: initialState.stock }; // Réinitialiser le stock à la valeur initiale
    default:
        return state;
}
}


// Ensuite, vous devez traiter cette action dans votre reducer pour mettre à jour le stock avec une valeur de recharge spécifique. Modifiez votre reducer pour inclure la logique de traitement de l'action de recharge .Ensuite dans stock