import React from 'react'
import Navbar from '../components/navbar'
import Products from '../components/products'
import Footer from '../components/footer'

function HomePage() {
    return (
        <div className="grid-container">
            <Navbar />
            <main className="main">
                <div className="content">
                    <Products />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
