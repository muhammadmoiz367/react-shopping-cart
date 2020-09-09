import axios from 'axios'
import Cookie from 'js-cookie'
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_ERROR } from '../constants/userConstants'

function signInRequest(data){
    return{
        type: USER_SIGNIN_REQUEST,
        data
    }
}
function signInSuccess(data){
    return{
        type: USER_SIGNIN_SUCCESS,
        data
    }
}
function signInError(data){
    return{
        type: USER_SIGNIN_ERROR,
        data
    }
}
function signUpRequest(data){
    return{
        type: USER_SIGNUP_REQUEST,
        data
    }
}
function signUpSuccess(data){
    return{
        type: USER_SIGNUP_SUCCESS,
        data
    }
}
function signUpError(data){
    return{
        type: USER_SIGNUP_ERROR,
        data
    }
}

export const signIn=(email, password)=> async (dispatch)=>{
    dispatch(signInRequest({ email, password }));
    try {
        const {data}= await axios.post('/api/users/signin', { email, password });
        dispatch(signInSuccess(data));
        Cookie.set('userInfo', JSON.stringify(data)); 
    } catch (error) {
        dispatch(signInError(error.message))
    }
}

export const signUp=(name, email, password)=> async (dispatch)=>{
    dispatch(signUpRequest({ name, email, password }));
    try {
        const {data}= await axios.post('/api/users/signup', { name, email, password });
        dispatch(signUpSuccess(data));
        Cookie.set('userInfo', JSON.stringify(data)); 
    } catch (error) {
        dispatch(signUpError(error.message))
    }
}