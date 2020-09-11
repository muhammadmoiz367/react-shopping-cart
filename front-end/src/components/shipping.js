import React, {useEffect, useState, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import CheckoutSteps from './checkoutSteps';
import { addShippng } from '../redux/actions/cart';


function Shipping(props) {
    const [address, setAddress]= useState('')
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const dispatch = useDispatch()
    
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        dispatch(addShippng({address, city, postalCode, country}));
        props.history.push('payment')
    }

    return (
        <Fragment>
            <CheckoutSteps step1 step2 />
            <div className="form">
                <form onSubmit={handleSubmitForm}>
                    <ul className="form-container">
                        <li>
                            <h2 className="text-center" >Shipping</h2>
                        </li>
                        <li>
                            <label htmlFor="address">
                                Address
                            </label>
                            <input type="text" name="address" id="address" onChange={(e)=> setAddress(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="city">
                                City
                            </label>
                            <input type="text" name="city" id="city" onChange={(e)=> setCity(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="postal-code">
                            Postal Code
                            </label>
                            <input type="text" name="postal-code" id="postal-code" onChange={(e)=> setPostalCode(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="country">
                            Country
                            </label>
                            <input type="text" name="country" id="country" onChange={(e)=> setCountry(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="button primary">Continue</button>
                        </li>
                    </ul>
                </form>
            </div>
        </Fragment>
    )
}

export default withRouter(Shipping)

