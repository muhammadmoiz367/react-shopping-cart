import express from 'express';
import User from '../models/userModel'
import getToken from '../utils';
const router=express.Router();


router.post('/signin', async(req, res)=>{

    const signInUser=await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if(signInUser){
        res.send({
            _id: signInUser._id,
            name: signInUser.name,
            email: signInUser.email,
            isAdmin: signInUser.isAdmin,
            token: getToken(signInUser)
        })
    }
    else{
        res.status(401).send({ msg: 'Invalid user or password'})
    }
})

router.post('/signup', async(req, res)=>{
    try {
        const signInUser=await User.findOne({
            email: req.body.email
        })
        if(signInUser){
            res.status(500).send({ msg: 'Email already in use'})
        }
        else{
            const user=new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            const newUser=await user.save()
            if(newUser){
                res.send({
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                    isAdmin: newUser.isAdmin,
                    token: getToken(newUser)
                })
            }
            
            else{
                res.status(401).send({ msg: 'Invalid user data'})
            }
        }
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
})


router.get('/createAdmin', async (req, res)=>{
    try {
        const user=new User({
            name: 'Moeez',
            email: 'user35@gmail.com',
            password: '12345',
            isAdmin: true
        })
        const newUser=await user.save();
        res.send(newUser)
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
})

export default router