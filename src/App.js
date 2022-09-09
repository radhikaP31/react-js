import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { Cartcontext } from './Cartcontext';
import { getCart, storeCart } from './helpers';

function App() {
  const [cart, setCart] = useState({});
  //fetch from local storage
  useEffect(() => {

    getCart().then(cart => {
      if (Object.keys(JSON.parse(cart)).length != 0) {//check object length then setCart
        setCart(JSON.parse(cart));
      }
    });
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart])

  return (
    <div>
      <Router>
        <Cartcontext.Provider value={{ cart, setCart }}>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/products' element={<ProductsPage />}></Route>
          <Route exact path="/products/:_id" element={<SingleProduct />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
        </Routes>
        </Cartcontext.Provider>
      </Router>
    </div>
  );
}

export default App;
