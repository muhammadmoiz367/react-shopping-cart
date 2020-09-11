import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Payment from '../components/payment'

function PaymentPage() {
    return (
        <div className="grid-container">
            <Navbar />
            <main className="main">
                <div className="content">
                    <Payment />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default PaymentPage
