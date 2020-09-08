import {combineReducers} from 'redux'
import { Products, ProductDetails } from './products'
import Cart from './cart'

const Reducer= combineReducers({
    Products,
    ProductDetails,
    Cart
})

export default Reducer