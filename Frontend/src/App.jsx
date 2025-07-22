import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Rooms from './Component/Rooms';
import Contact from './Component/Contact';
import Reservation from './Component/Reservation';
import Booking from './Component/Booking';
import Events from './Component/Events';
import Blogs from './Component/Blogs';
import Footer from './Component/Footer';
import BookNow from './Component/BookNow';
import Acitivies from './Component/Acitivies';
import Facilities from './Component/Facilities';
import Gallery from './Component/Gallery';
import Admin from './Pages/Admin/Admin';
import React from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/activities" element={<Acitivies />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;