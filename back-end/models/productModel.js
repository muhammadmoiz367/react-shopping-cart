import mongose from 'mongoose';

const productSchema=new mongose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    stockCount:{
        type: Number,
        required: true,
        default: 0
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0
    },
    
});

const productModel=mongose.model("Product", productSchema);

export default productModel;