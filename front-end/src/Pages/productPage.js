import React from 'react'
import Navbar from '../components/navbar'
import ProductDetails from '../components/productDetails'
import Footer from '../components/footer'

function ProductPage() {
    return (
        <div className="grid-container">
            <Navbar />
            <main className="main">
                <div className="content">
                    <ProductDetails />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ProductPage
