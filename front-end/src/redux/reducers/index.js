import {combineReducers} from 'redux'
import { Products, ProductDetails } from './products'

const Reducer= combineReducers({
    Products,
    ProductDetails
})

export default Reducer