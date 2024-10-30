// rootReducer.js

import { combineReducers } from 'redux';
import { stockReducer } from './stockReducer';
import { cardReducer } from './cardReducer';

const rootReducer = combineReducers({
    stock: stockReducer,
    card: cardReducer
});

export default rootReducer;


//aller dans components
