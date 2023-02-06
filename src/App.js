import React from 'react';
import './styles/App.css';
import './styles/components.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Organizations from './pages/Organizations';
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
          <Route path='' element={<Home />} />
          <Route path='experience' element={<Experience />} />
          <Route path='organizations' element={<Organizations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
