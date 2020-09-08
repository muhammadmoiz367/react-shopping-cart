import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import data from './data';
import config from './config'

dotenv.config();

const mongodbUrl=config.MONGODB_URL;
mongoose.connect(
    mongodbUrl,
    {
        useNewUrlParser: true
    }
)
.catch(error=> console.log(error.reason));

const app= express();

app.get("/api/products", (req, res)=>{
    
    res.send(data.products);
});

app.get("/api/products/:id", (req, res)=>{
    const productId=req.params.id;
    const product=data.products.filter(x => x.id == productId)
    if(product){
        res.send(product);
    }else{
        res.status(404).send({ message: "Product not found" })
    }
    
});

app.listen(5000, ()=> console.log('Server running on http://localhost:5000'))