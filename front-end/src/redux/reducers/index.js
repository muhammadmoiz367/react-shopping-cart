import {combineReducers} from 'redux'
import { Products, ProductDetails, AddedProduct, DeletedProduct } from './products'
import Cart from './cart'
import User from './users'

const Reducer= combineReducers({
    Products,
    ProductDetails,
    AddedProduct,
    DeletedProduct,
    Cart,
    User
})

export default Reducer