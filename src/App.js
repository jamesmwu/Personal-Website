import React from 'react';
import './styles/App.css';
import './styles/Components.css';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Organizations from './pages/Organizations';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id='app'>
      {/* Navigation */}
      <NavBar />

      {/* Routes */}
      <div id='content'>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          {/* <Route path='experience' element={<Experience />} />
          <Route path='organizations' element={<Organizations />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
