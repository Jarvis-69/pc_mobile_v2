import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import GuidePage from './pages/GuidePage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} clearCart={clearCart} />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/payment" element={<PaymentPage cartItems={cartItems} clearCart={clearCart} setPaymentMethod={setPaymentMethod} />} />
          <Route path="/confirmation" element={<ConfirmationPage cartItems={cartItems} paymentMethod={paymentMethod} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;