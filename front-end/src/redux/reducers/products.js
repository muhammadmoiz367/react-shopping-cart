import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_ERROR, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR } from "../constants/productsConstant"

const Products=(state = {products: []}, action)=>{
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return{
                loading: true,
                products: []
            }
        case GET_PRODUCTS_SUCCESS:
            return{
                loading: false,
                products: action.data
            }
        case GET_PRODUCTS_ERROR:
            return{
                loading: false,
                error: action.error
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
                error: action.error
            }
        default:
            return state
    }
}

const AddedProduct=(state={ product: {}}, action)=>{
    switch(action.type){
        case ADD_PRODUCT_REQUEST:
            return{
                loading: true
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                loading: false,
                success: true,
                product: action.data
            }
        case ADD_PRODUCT_ERROR:
            return{
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

const DeletedProduct=(state={ product: {}}, action)=>{
    switch(action.type){
        case DELETE_PRODUCT_REQUEST:
            return{
                loading: true
            }
        case DELETE_PRODUCT_SUCCESS:
            return{
                loading: false,
                success: true,
                product: action.data
            }
        case DELETE_PRODUCT_ERROR:
            return{
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export { Products, ProductDetails, AddedProduct, DeletedProduct }