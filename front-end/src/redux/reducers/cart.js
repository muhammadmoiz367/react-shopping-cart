import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ADD_SHIPPING, CART_ADD_PAYMENT } from  "../constants/cartConstants";

const Cart=(state={ cartItems: [], shipping: {}, payment: {} }, action)=>{
 switch(action.type){
     case CART_ADD_ITEM:
        const item=action.data;
        const product=state.cartItems.find(x=> x.productId === item.productId)
        if(product){
            return{
                cartItems: state.cartItems.map(x => x.productId === product.productId ? item : x)
            };
        }
        return {
            cartItems: [...state.cartItems, item ]
        }
    case CART_REMOVE_ITEM:
        return{
            cartItems: state.cartItems.filter(x=> x.productId !== action.id)
        }
    case CART_ADD_SHIPPING: 
    return{
        ...state,
        shipping: action.data
    }
    case CART_ADD_PAYMENT: 
    return{
        ...state,
        payment: action.data
    }
    default: 
        return state
  }   
}

export default Cart