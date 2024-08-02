import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CheckoutPage from './pages/CheckoutPage.js';
import { CartProvider } from './context/CartContext.js';
import Cart from './components/Cart.js';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header/>
      <CartProvider>
        <Routes>
          <Route  exact path="/" element={<HomePage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
