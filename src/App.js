import React, { useState } from 'react';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [toggle, setToggle] = useState(false);

	return (
		<div id='app'>
			{/* Navigation */}
			<NavBar toggle={toggle} setToggle={setToggle} />
			<Home toggle={toggle} />

			{/* Routes */}
			{/* <Routes>
				<Route path='' element={<Home toggle={toggle} />} />
				<Route path='about' element={<About />} />
			</Routes> */}
		</div>
	);
}

export default App;
