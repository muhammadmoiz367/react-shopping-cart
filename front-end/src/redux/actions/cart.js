import axios from "axios"
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

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

export const addToCart=(productId, qty) => async (dispatch, getState)=>{
    try {
        const {data} = await axios.get('/api/products/'+productId);
        const cartItem={
            productId: data[0].id,
            name: data[0].name,
            image: data[0].image,
            price: data[0].price,
            stockCount: data[0].stockCount,
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