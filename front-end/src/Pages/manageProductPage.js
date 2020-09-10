import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ManageProducts from '../components/manageProducts'

function ManageProductPage() {
    return (
        <div className="grid-container">
            <Navbar />
            <main className="main">
                <div className="content">
                    <ManageProducts />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ManageProductPage