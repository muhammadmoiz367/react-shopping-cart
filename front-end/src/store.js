import {createStore, compose} from 'redux';
import Reducer from './redux/reducers/index'
import middleware from './redux/middleware/index'

const initialState={};

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(Reducer, initialState, composeEnhancer(middleware));

export default store