import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div>
            <ul className="products">
                {data.products.map(product=>(
                    <li key={product.name}>
                        <div className="product">
                            <Link to={`/product/${product.id}`}>
                                <img className="product-image" src={product.image} alt="shirt-1" />
                            </Link>
                            <div className="product-name">
                                <Link to={`/product/${product.id}`}>
                                    {product.name}
                                </Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-ratings">{product.rating} Stars ({product.reviews})</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products
