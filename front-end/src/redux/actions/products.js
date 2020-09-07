import axios from 'axios'
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_ERROR } from '../constants/productsConstant';

function getProductRequestAction(){
    return{
        type: GET_PRODUCTS_REQUEST
    }
}
function getProductSuccessAction(data){
    return{
        type: GET_PRODUCTS_SUCCESS,
        data
    }
}
function getProductErrorAction(data){
    return{
        type: GET_PRODUCTS_ERROR,
        data
    }
}
function getProductDetailsRequestAction(){
    return{
        type: GET_PRODUCT_DETAILS_REQUEST
    }
}
function getProductDetailsSuccessAction(data){
    return{
        type: GET_PRODUCT_DETAILS_SUCCESS,
        data
    }
}
function getProductDetailsErrorAction(data){
    return{
        type: GET_PRODUCT_DETAILS_ERROR,
        data
    }
}


export const getAllProducts = () => async (dispatch) => {
    try{
        dispatch(getProductRequestAction());
        const {data} = await axios.get('/api/products');
        dispatch(getProductSuccessAction(data))
    }
    catch(error){
        dispatch(getProductErrorAction(error.message))
    }
}

export const getProductsDetails = (productId) => async (dispatch) => {
    try{
        dispatch(getProductDetailsRequestAction());
        const {data} = await axios.get('/api/products/'+productId);
        dispatch(getProductDetailsSuccessAction(data))
    }
    catch(error){
        dispatch(getProductDetailsErrorAction(error.message))
    }
}