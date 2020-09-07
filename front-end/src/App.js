import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homePage';
import ProductPage from './Pages/productPage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Products from './components/products';
import ProductDetails from './components/productDetails';


function App() {
  return (
    <div className="grid-container">
        <Navbar />
        <main className="main">
            <div className="content">
                <Route exact path="/" component={Products} />
                <Route path="/product/:id" component={ProductDetails} />    
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
