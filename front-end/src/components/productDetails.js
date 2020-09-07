import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'

function ProductDetails(props) {
    const productId=props.match.params.id
    const filterProduct=data.products.filter(product => product.id == productId);
    const product=filterProduct[0]
    return (
        <div>
            <div className="back-to-home-btn">
                <Link to="/">Back to home</Link>
            </div>
            <div className="product-details"> 
                <div className="details-image">
                    <img src={product.image} alt="product-details-image" />
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.reviews} Reviews)
                        </li>
                        <li>
                            Price: $<b>{product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: 
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li>
                            <button className="cart-btn">Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
