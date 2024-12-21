import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Middle from './components/Middle/Middle';
import Destination from './components/Destination/Destination';
import Portifolio from './components/Portifolio/Portifolio';
import Reviews from './components/Reviews/Reviews';
import Quetions from './components/Quetions/Quetions';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

import Destinations from './pages/Destinations/destination';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Middle />
              <Destination />
              <Portifolio />
              <Reviews />
              <Quetions />
              <Subscribe />
              <Footer />
            </>
          }
        />

        {/* Destinations Page Route */}
        <Route path="/destinations" element={<Destinations />} />

        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
  )
}

export default App
