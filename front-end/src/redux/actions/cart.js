import axios from "axios"
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ADD_SHIPPING, CART_ADD_PAYMENT } from "../constants/cartConstants";

function cartAddItemAction(data){
    return{
        type: CART_ADD_ITEM,
        data
    }
}
function removeFromCartAction(id){
    return{
        type: CART_REMOVE_ITEM,
        id
    }
}
function cartAddShipping(data){
    return{
        type: CART_ADD_SHIPPING,
        data
    }
}
function cartAddPayment(data){
    return{
        type: CART_ADD_PAYMENT,
        data
    }
}

export const addToCart=(productId, qty) => async (dispatch, getState)=>{
    try {
        const {data} = await axios.get('/api/products/'+productId);
        const cartItem={
            productId: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            stockCount: data.stockCount,
            qty
        }
        dispatch(cartAddItemAction(cartItem))
        const { Cart: {cartItems} }=getState();
        Cookie.set("cartItems", JSON.stringify(cartItems))
    } catch (error) {
        console.log(error)
    }
}

export const removeFromCart=(productId)=> (dispatch, getState) =>{
    dispatch((removeFromCartAction(productId)))
    
    const { Cart: {cartItems} }=getState();
    Cookie.set("cartItems", JSON.stringify(cartItems))
}

export const addShippng=(data)=>(dispatch)=>{
    dispatch(cartAddShipping(data))
}

export const addPayment=(data)=>(dispatch)=>{
    dispatch(cartAddPayment(data))
}