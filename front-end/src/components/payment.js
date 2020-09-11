import React, {useEffect, useState, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import CheckoutSteps from './checkoutSteps';
import { addShippng, addPayment } from '../redux/actions/cart';


function Payment(props) {
    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch()
    
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        dispatch(addPayment({paymentMethod}));
        props.history.push('placeorder')
    }

    return (
        <Fragment>
            <CheckoutSteps step1 step2  step3/>
            <div className="form">
                <form onSubmit={handleSubmitForm}>
                    <ul className="form-container">
                        <li>
                            <h2 className="text-center" >Payment</h2>
                        </li>
                        <li>
                            <div>
                                <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e)=> setPaymentMethod(e.target.value)} />
                                <label htmlFor="paymentMethod">
                                    Paypal
                                </label>
                            </div>
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

export default withRouter(Payment)

