import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signUp } from '../redux/actions/users';


function SignUp(props) {
    const [name, setName]= useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const User = useSelector(state => state.User)
    const dispatch = useDispatch()
    const {signUpError, signUpLoading, signUpUserInfo}=User;
    const redirect=props.location.search ? props.location.search.split("=")[1] : "/"
    
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        dispatch(signUp(name, email, password))
    }

    useEffect(() => {
        if(signUpUserInfo){
            props.history.push('/')
        }
    }, [signUpUserInfo])
    return (
        <div className="form">
            <form onSubmit={handleSubmitForm}>
                <ul className="form-container">
                    <li>
                        <h2 className="text-center" >Create Account</h2>
                    </li>
                    <li>
                        {signUpLoading && <div className="form-loading" >Loading....</div>}
                        {signUpError && <div className="form-error" >{signUpError}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="name" name="name" id="name" onChange={(e)=> setName(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="rePassword">
                            Renter Password
                        </label>
                        <input type="password" name="rePassword" id="rePassword" onChange={(e)=> setRePassword(e.target.value)} />
                    </li>
                    <li>
                        <button type="submit" className="button primary">Sign Up</button>
                    </li>
                    <li>
                        Already have an account
                        <Link to={redirect==='/' ? 'signin' : `signin?redirect=${redirect}`} className="button secondary text-center" >Sign In instead</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignUp

