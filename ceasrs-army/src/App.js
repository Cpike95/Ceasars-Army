import React from 'react'
import NavBar from './components/NavBar/navBar'
import About from './components/About/about'
import Products from './components/Products/products';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
