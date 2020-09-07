import express from 'express';
import data from './data';

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