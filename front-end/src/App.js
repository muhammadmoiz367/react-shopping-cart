import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homePage';
import ProductPage from './Pages/productPage';
import CartPage from './Pages/cartPage';

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/product/:id" component={ProductPage} />    
      <Route path="/cart/:id?" component={CartPage} />
    </Fragment>
  );
}

export default App;
