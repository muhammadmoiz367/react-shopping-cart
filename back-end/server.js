import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import data from './data';
import userRoutes from './routes/users'
import productRoutes from './routes/products'

dotenv.config();

mongoose.connect(
    `mongodb+srv://muhammadmoiz367:${process.env.MONGODB_PW}@testcluster.ki7wv.mongodb.net/shopping-cart?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    ()=> console.log('MongoDb connected !!')
)

const app= express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// app.get("/api/products", (req, res)=>{
    
//     res.send(data.products);
// });

// app.get("/api/products/:id", (req, res)=>{
//     const productId=req.params.id;
//     const product=data.products.filter(x => x.id == productId)
//     if(product){
//         res.send(product);
//     }else{
//         res.status(404).send({ message: "Product not found" })
//     }
    
// });

app.listen(5000, ()=> console.log('Server running on http://localhost:5000'))
