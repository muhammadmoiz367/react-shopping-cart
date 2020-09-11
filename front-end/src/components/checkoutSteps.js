import React from 'react'

function CheckoutSteps(props) {
    return (
        <div className="checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Sign In</div>
            <div className={props.step2 ? 'active' : ''}>Shipping</div>
            <div className={props.step3 ? 'active' : ''}>Placement</div>
            <div className={props.step4 ? 'active' : ''}>Place order</div>
        </div>
    )
}

export default CheckoutSteps
