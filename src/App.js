import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import './contact.css';
import './carousel.css';  
import Home from './App/home';
import Header from './App/Header';
import About from './App/About';
import Contact from './App/Contact';
import Footer from './App/Footer';
import Service from './App/Service';
import Servicedescription from './App/Servicedescription';

function App () {

  return (
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/serviceDescription" element={<Servicedescription />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
