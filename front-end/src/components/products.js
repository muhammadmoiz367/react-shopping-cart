import React,{ useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../redux/actions/products';


function Products() {
    const Products = useSelector(state => state.Products);
    const dispatch = useDispatch()
    const {products, loading, error} = Products
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    return (
        <div>

            <ul className="products">
                {
                    loading 
                    ? (<div>Loading...</div>) 
                    : error 
                    ? (<div>{error}</div>) 
                    :   products.map(product=>(
                        <li key={product.id}>
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
                    ))
                }
            </ul>
        </div>
    )
}

export default Products
