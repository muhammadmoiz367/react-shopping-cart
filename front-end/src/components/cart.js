import React, {useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart, removeFromCart } from '../redux/actions/cart';


function Cart(props) {
    const productId=props.match.params.id;
    const qty=props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const Cart = useSelector(state => state.Cart);
    const {cartItems}=Cart;
    const dispatch=useDispatch()

    const removeFromCartHandler = (productId) => {
        console.log(productId)
        dispatch(removeFromCart(productId));
    }
    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
      }

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [])
    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div>
                            Price
                        </div>
                    </li>
                    {
                        cartItems.length === 0 
                        ? <div> Cart is empty </div>
                        : cartItems.map(item =>
                            <li>
                                <div className="cart-image">
                                    <img src={item.image} alt="product" />
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/" + item.productId}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div>
                                        Quantity:
                                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.productId, e.target.value))}>
                                            {[...Array(item.stockCount).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                        <button type="button" className="button" onClick={() => removeFromCartHandler(item.productId)} >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    ${item.price}
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="cart-action">
                <h3>
                    Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    :
                    $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3>
                <button onClick={checkoutHandler} className="cart-btn full-width" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default withRouter(Cart)
