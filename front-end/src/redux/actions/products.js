import axios from 'axios'
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_ERROR, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR } from '../constants/productsConstant';

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
function getProductErrorAction(error){
    return{
        type: GET_PRODUCTS_ERROR,
        error
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
function getProductDetailsErrorAction(error){
    return{
        type: GET_PRODUCT_DETAILS_ERROR,
        error
    }
}
function addProductRequest(){
    return{
        type: ADD_PRODUCT_REQUEST
    }
}
function addProductSuccess(data){
    return{
        type: ADD_PRODUCT_SUCCESS,
        data
    }
}
function addProductError(error){
    return{
        type: ADD_PRODUCT_ERROR,
        error
    }
}
function deleteProductRequest(){
    return{
        type: DELETE_PRODUCT_REQUEST
    }
}
function deleteProductSuccess(data){
    return{
        type: DELETE_PRODUCT_SUCCESS,
        data
    }
}
function deleteProductError(error){
    return{
        type: DELETE_PRODUCT_ERROR,
        error
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

export const addProduct=(product)=> async (dispatch, getState)=>{
    try {
        dispatch(addProductRequest());
        const { User: { userInfo } }=getState()
        if(!product.id){
            const {data}= await axios.post(
                '/api/products', 
                product,
                {
                    headers: {
                        'Authorization' : `Bearer ${userInfo.token}`
                    }
                }
            );
            dispatch(addProductSuccess(data))
        }
        else{
            const {data}= await axios.put(
                `/api/products/${product.id}`, 
                product,
                {
                    headers: {
                        'Authorization' : `Bearer ${userInfo.token}`
                    }
                }
            );
            dispatch(addProductSuccess(data))
        }
        
    } catch (error) {
        dispatch(addProductError(error.message))
    }
}

export const deleteProduct = (productId) => async (dispatch, getState) => {
    try{
        const { User: { userInfo } }=getState()
        dispatch(deleteProductRequest());
        const {data} = await axios.delete(
            `/api/products/${productId}`, 
            {
                headers: {
                    'Authorization' : `Bearer ${userInfo.token}`
                }
            }
        );
        dispatch(deleteProductSuccess(data))
    }
    catch(error){
        dispatch(deleteProductError(error.message))
    }
}