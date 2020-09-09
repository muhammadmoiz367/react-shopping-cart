import mongose from 'mongoose';

const userSchema=new mongose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});
const userModel=mongose.model("User", userSchema);

export default userModel;