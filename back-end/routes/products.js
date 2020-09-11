import express from 'express';
import Product from '../models/productModel'
import { isAuth, isAdmin } from '../utils';

const router=express.Router();

router.get('/', async (req, res)=>{
    const products=await Product.find();
    res.send(products);
})

router.get('/:id', async (req, res)=>{
    const product=await Product.findOne({ _id: req.params.id });
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({ msg: 'Product not found' })
    }
    
})


router.post('/', isAuth, isAdmin, async (req, res)=>{
    const product=new Product({
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        stockCount: req.body.stockCount,
        numReviews: req.body.numReviews,
        rating: req.body.rating
    });
    const newProduct=await product.save();
    if(newProduct){
        return res.status(200).send({ msg: 'PNew product added', data: newProduct })
    }
    return res.status(500).send({ msg: 'Error in adding new product' });
})

router.put('/:id', isAuth, isAdmin, async (req, res)=>{
    const id=req.params.id;
    const product=await Product.findOne({ _id: id });
    if(product){
        product.name= req.body.name;
        product.brand= req.body.brand;
        product.category= req.body.category;
        product.description= req.body.description;
        product.image= req.body.image;
        product.price= req.body.price;
        product.stockCount= req.body.stockCount;
        const updatedProduct=await product.save();

        if(updatedProduct){
            return res.status(200).send({ msg: 'Product updated', data: updatedProduct })
        }
        return res.status(500).send({ msg: 'Error in updating new product' });
    }
    return res.status(404).send({ msg: 'Product to be updated not found' });
})

router.delete('/:id', isAuth, isAdmin, async (req, res)=>{
    try{
        const id=req.params.id;
        const deletedProduct=await Product.findById(id);
        if(deletedProduct){
            await deletedProduct.deleteOne();
            res.send({ msg: 'Product deleted' })
        }else{
            res.status(500).send({ msg: 'Error in deleting product' })
        }
    }
    catch(error){
        res.send({ error: error.message })
    }
})

export default router