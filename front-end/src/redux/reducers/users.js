const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_ERROR } = require("../constants/userConstants");

const User=(state={}, action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return{
                signInLoading: true
            }
        case USER_SIGNIN_SUCCESS:
            return{
                signInLoading: false,
                signInUserInfo: action.data
            }
        case USER_SIGNIN_ERROR:
            return{
                signInLoading: false,
                signInError: action.data
            }
        case USER_SIGNUP_REQUEST:
            return{
                signUpLoading: true
            }
        case USER_SIGNUP_SUCCESS:
            return{
                signUpLoading: false,
                signUpUserInfo: action.data
            }
        case USER_SIGNUP_ERROR:
            return{
                signUpLoading: false,
                signInError: action.data
            }
        default:
            return state
    }
}

export default User