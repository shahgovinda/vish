import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import LandingPage from './components/LandingPage';
import ShopPage from './components/ShopPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navigation Links */}
          <nav className="navbar">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/cart">Cart</a>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
