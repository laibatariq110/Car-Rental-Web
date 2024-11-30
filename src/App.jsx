
import './styles/style.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/Home/About/About.jsx';
import Contact from './pages/Home/About/Contact/Contact.jsx'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;