import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getProductsDetails } from '../redux/actions/products'


function ProductDetails(props) {
    const [qty, setQty]= useState(1);
    const id=props.match.params.id
    const ProductDetails = useSelector(state => state.ProductDetails)
    const {product, loading, error} = ProductDetails;
    const dispatch = useDispatch();

    const handleAddToCart=()=>{
        props.history.push(`/cart/${id}?qty=${qty}`)
    }

    useEffect(() => {
        dispatch(getProductsDetails(id))
    }, [])
    return (
        <div>
            <div className="back-to-home-btn">
                <Link to="/">Back to home</Link>
            </div>
            {
                loading
                ? (<div>Loading product...</div>)
                : error
                    ? (<div>{error}</div>)
                    : Object.keys(ProductDetails.product).length !== 0 && (
                        <div className="product-details"> 
                            <div className="details-image">
                                <img src={product[0].image} alt="product-details-image" />
                            </div>
                            <div className="details-info">
                                <ul>
                                    <li>
                                        <h4>{product[0].name}</h4>
                                    </li>
                                    <li>
                                        {product[0].rating} Stars ({product[0].reviews} Reviews)
                                    </li>
                                    <li>
                                        Price: $<b>{product[0].price}</b>
                                    </li>
                                    <li>
                                        Description:
                                        <div>
                                            {product[0].description}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="details-action">
                                <ul>
                                    <li>
                                        Price: {product[0].price}
                                    </li>
                                    <li>
                                        Status: {product[0].stockCount>0 ? "In stock" : "Out of stock"}
                                    </li>
                                    <li>
                                        {product[0].stockCount>0 && (
                                            <>
                                            <p>Quantity:</p>
                                            <select value={qty} onChange={(e)=> setQty(e.target.value) }>
                                                {[...Array(product[0].stockCount).keys()].map(x=>
                                                    <option value={x+1} >{x+1}</option>   
                                                )}
                                            </select>
                                            </>
                                        )}
                                    </li>
                                    <li>
                                        {product[0].stockCount>0 && <button onClick={handleAddToCart} className="button primary">Add to cart</button> }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default withRouter(ProductDetails)
