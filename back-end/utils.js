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

const isAuth=(req, res, next)=>{
    const token=req.headers.authorization;
    if(token){
        const onlyToken=token.slice(7, token.length);
        jwt.verify(onlyToken, process.env.JWT_SECRET_KEY, (error, decode)=>{
            if(error){
                res.status(401).send({ msg: 'Invalid token' })
            }
            req.user=decode
            next();
            return
        })
    }
    else{
        return res.status(401).send({ msg: 'Token is not supplied' });
    }
}

const isAdmin=(req, res, next)=>{
    if(req.user && req.user.isAdmin){
        return next();
    }
    return res.status(401).send({ msg: 'Admin token is not valid' });
}

export {
    getToken, 
    isAdmin,
    isAuth
}