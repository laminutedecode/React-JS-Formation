

import { createStore } from 'redux';
import { counterReducer, initialState } from '../reducers/reducers';

const store = createStore(counterReducer, initialState);




export default store;
