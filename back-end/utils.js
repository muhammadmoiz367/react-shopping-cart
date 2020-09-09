import jwt from 'jsonwebtoken';

const getToken=(user)=>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }
    , process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    })
}

export default getToken