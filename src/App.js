import React, { useState } from 'react';
import './styles/App.css';
import './styles/Components.css';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Organizations from './pages/Organizations';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [toggle, setToggle] = useState(false);

	return (
		<div id='app'>
			{/* Navigation */}
			<NavBar toggle={toggle} setToggle={setToggle} />

			{/* Routes */}
			<Routes>
				<Route path='' element={<Home toggle={toggle} />} />
				<Route path='about' element={<About />} />
				{/* <Route path='experience' element={<Experience />} />
          <Route path='organizations' element={<Organizations />} /> */}
			</Routes>
		</div>
	);
}

export default App;
