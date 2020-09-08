import React from 'react'
import Navbar from '../components/navbar'
import Cart from '../components/cart'
import Footer from '../components/footer'

function CartPage() {
    return (
        <div className="grid-container">
            <Navbar />
            <main className="main">
                <div className="content">
                    <Cart />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default CartPage
