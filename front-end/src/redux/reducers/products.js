import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_ERROR } from "../constants/productsConstant"

const Products=(state = {products: []}, action)=>{
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return{
                loading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return{
                loading: false,
                products: action.data
            }
        case GET_PRODUCTS_ERROR:
            return{
                loading: false,
                error: action.data
            }
        default:
            return state
    }
}

const ProductDetails=(state={ product: {}}, action)=>{
    switch(action.type){
        case GET_PRODUCT_DETAILS_REQUEST:
            return{
                loading: true
            }
        case GET_PRODUCT_DETAILS_SUCCESS:
            return{
                loading: false,
                product: action.data
            }
        case GET_PRODUCT_DETAILS_ERROR:
            return{
                loading: false,
                error: action.data
            }
        default:
            return state
    }
}


export { Products, ProductDetails }