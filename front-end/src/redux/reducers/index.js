import {combineReducers} from 'redux'
import { Products, ProductDetails } from './products'
import Cart from './cart'
import User from './users'

const Reducer= combineReducers({
    Products,
    ProductDetails,
    Cart,
    User
})

export default Reducer