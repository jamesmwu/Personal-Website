import React from 'react';
import './App.css';
import './components.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Navigation */}
      <NavBar />

      {/* Routes */}
      <div id='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
