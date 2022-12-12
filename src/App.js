import React from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Navigation */}
      <div id='navigation'>
        <h1>James Wu</h1>
        <nav>
          <Link className='navLinks' to='/'>
            Home
          </Link>
          <Link className='navLinks' to='/experience'>
            Experience
          </Link>
          <Link className='navLinks' to='/contact'>
            Contact
          </Link>
        </nav>
      </div>

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
