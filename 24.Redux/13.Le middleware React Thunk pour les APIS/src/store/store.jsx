
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
//
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger)); 

//Regarder dans le log


export default store;


