import {createStore, compose} from 'redux';
import Cookie from 'js-cookie'
import Reducer from './redux/reducers/index'
import middleware from './redux/middleware/index'

const cartItems=Cookie.getJSON("cartItems") || []
const userInfo=Cookie.getJSON("userInfo") || null

const initialState={ Cart: { cartItems }, User: { userInfo }, shipping: {}, payment: {}};

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(Reducer, initialState, composeEnhancer(middleware));

export default store