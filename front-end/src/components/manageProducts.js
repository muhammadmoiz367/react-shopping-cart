import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addProduct, getAllProducts, deleteProduct } from '../redux/actions/products';

function ManageProducts(props) {
    const [formModal, setFormModal]=useState(false);
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [stockCount, setStockCount] = useState('');
    const [formError, setFormError]= useState('')
    const AddedProduct = useSelector(state => state.AddedProduct);
    const {loading: loadingAddProduct, success: successAddProduct, error: errorAddProduct }=AddedProduct;
    const DeletedProduct = useSelector(state => state.DeletedProduct);
    const {loading: loadingDeleteProduct, success: successDeleteProduct, error: errorDeleteProduct }=DeletedProduct;
    const Products = useSelector(state => state.Products);
    const {products, loading, error} = Products;
    const dispatch = useDispatch()
    
    const openFormModal=(product)=>{
        setFormModal(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setBrand(product.brand);
        setCategory(product.category);
        setImage(product.image);
        setDescription(product.description);
        setStockCount(product.stockCount);
    }

    const handleDeleteProduct=(product)=>{
        dispatch(deleteProduct(product._id));
    }

    const handleSubmitForm=(e)=>{
        e.preventDefault();
        if(name !== "" && price !== "" && brand !== "", category !== "", image !== "", description !== "", stockCount !==""){
            dispatch(addProduct({ id, name, price, brand, category, image, description, stockCount }));
        }
        setFormError('Provide values for each field');
    }

    useEffect(() => {
        if(successAddProduct){
            setFormModal(false);
        }
        dispatch(getAllProducts())
    }, [successAddProduct, successDeleteProduct])
    return (
        <div className="content content-margined">
            <div className="product-header">
                <h3>Products</h3>
                <button className="button primary" onClick={()=>openFormModal({})}>Add product</button>
            </div>
            {formModal && (
                <div className="form">
                    <form onSubmit={handleSubmitForm}>
                        <ul className="form-container ">
                            <li>
                                <h2 className="text-center" >Add Product</h2>
                            </li>
                            <li>
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input type="text" name="name" value={name} id="name" onChange={(e)=> setName(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="brand">
                                    Brand   
                                </label>
                                <input type="text" name="brand" id="brand" value={brand} onChange={(e)=> setBrand(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="category">
                                    Category
                                </label>
                                <input type="text" name="category" id="category" value={category} onChange={(e)=> setCategory(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="image">
                                    Product Image
                                </label>
                                <input type="text" name="image" id="image" value={image} onChange={(e)=> setImage(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="price">
                                    Price
                                </label>
                                <input type="price" name="price" id="price" value={price} onChange={(e)=> setPrice(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="stockCount">
                                    Count in Stock
                                </label>
                                <input type="text" name="stockCount" id="stockCount" value={stockCount} onChange={(e)=> setStockCount(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="description">
                                    Description
                                </label>
                                <textarea name="description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                            </li>
                            <li>
                                {loadingAddProduct && <div className="form-loading" >Loading....</div>}
                                {errorAddProduct && <div className="form-error" >{errorAddProduct}</div>}
                                {formError && <div className="form-error" >{formError}</div>}
                            </li>
                            <li>
                                <button type="submit" className="button primary">{id ? "Update" : "Add"}</button>
                            </li>
                            <li>
                                <button type="button" className="button secondary" onClick={()=>setFormModal(false)} >Cancel</button>
                            </li>
                        </ul>
                    </form>
                </div>
            )}
            <div className="product-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product=>(
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="button" onClick={()=> openFormModal(product)} >Edit</button>
                                        {' '}
                                        <button className="button" onClick={()=>handleDeleteProduct(product)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageProducts
