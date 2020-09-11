import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Shipping from '../components/shipping'

function ShippingPage() {
    return (
        <div className="grid-container">
            <Navbar />
            <main className="main">
                <div className="content">
                    <Shipping />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ShippingPage
