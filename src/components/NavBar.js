import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';
import PFP from '../img/PFP.png';

function NavBar() {
	const [open, setOpen] = useState(false);
	const toggleHamburger = () => {
		setOpen(!open);
	};

	return (
		<div className='navigation'>
			<img id='pfp' src={PFP} alt='MS-Paint drawn profile picture of James' />
			<h1>Radio dial</h1>
			<div>
				<div id='menu-container'>
					<div
						id='hamburger'
						className={open ? 'open' : ''}
						onClick={toggleHamburger}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
					<ul className='dropdown-item-container'>
						<Link
							className='navLinks'
							to='/'
							onClick={() => {
								setOpen(!open);
							}}
						>
							<li className='dropdown-item'>Home</li>
						</Link>
						<Link
							className='navLinks'
							to='/about'
							onClick={() => {
								setOpen(!open);
							}}
						>
							<li className='dropdown-item'>About</li>
						</Link>
					</ul>
				</div>
			</div>

			{/* <nav>
        <Link className='navLinks' to='/'>
          Home
        </Link>
        <Link className='navLinks' to='/about'>
          About
        </Link>
      </nav> */}
		</div>
	);
}

export default NavBar;
