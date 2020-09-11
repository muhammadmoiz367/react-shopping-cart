import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PlaceOrder from '../components/placeOrder'

function PlaceOrderPage() {
    return (
        <div className="grid-container">
            <Navbar />
            <main className="main">
                <div className="content">
                    <PlaceOrder />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default PlaceOrderPage
