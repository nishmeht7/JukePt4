import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/root-reducer.js';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

const instanceOfLogger = createLogger(); 

const resultofMware = applyMiddleware(instanceOfLogger, thunkMiddleware); 


const store = createStore(reducer, resultofMware);

export default store
