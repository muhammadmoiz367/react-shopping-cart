import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signIn } from '../redux/actions/users';

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const User = useSelector(state => state.User)
    const dispatch = useDispatch()
    const {signInError, signInLoading, signInUserInfo}=User
    
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        dispatch(signIn(email, password))
    }

    useEffect(() => {
        if(signInUserInfo){
            props.history.push('/')
        }
    }, [signInUserInfo])
    return (
        <div className="form">
            <form onSubmit={handleSubmitForm}>
                <ul className="form-container">
                    <li>
                        <h2 className="text-center" >Sign In</h2>
                    </li>
                    <li>
                        {signInLoading && <div className="form-loading" >Loading....</div>}
                        {signInError && <div className="form-error" >{signInError}</div>}
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
                        <button type="submit" className="button primary">SignIn</button>
                    </li>
                    <li>
                        New to amazona?
                    </li>
                    <li>
                        <Link to="/signup" className="button secondary text-center" >Create your amazona account</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignIn
