import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homePage';
import ProductPage from './Pages/productPage';
import CartPage from './Pages/cartPage';
import SignIn from './Pages/signIn';
import SignUp from './Pages/signUp';

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/product/:id" component={ProductPage} />    
      <Route path="/cart/:id?" component={CartPage} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
    </Fragment>
  );
}

export default App;
