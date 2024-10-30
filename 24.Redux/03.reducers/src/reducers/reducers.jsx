// Un reducer dans Redux est une fonction pure qui spécifie comment l'état de l'application change en réponse à une action. Les reducers prennent en entrée l'état actuel de l'application et une action, puis retournent un nouveau state en fonction de cette action. Voici une explication détaillée des reducers dans Redux :

// Un reducer doit être une fonction pure, ce qui signifie qu'elle ne doit pas produire d'effets secondaires et que sa sortie ne dépend que de ses entrées. Cela garantit que les reducers sont prévisibles et faciles à tester. Ils ne modifient jamais l'état existant, mais retournent plutôt un nouvel état.


export const initialState = {
  stock: 50,
}


export function counterReducer(state = initialState, action) {

switch (action.type) {
    case 'INCREMENT':
      return { ...state, stock: state.stock + 1 };
    case 'DECREMENT':
      return { ...state, stock: state.stock - 1 };
    default:
        return state;
}
}