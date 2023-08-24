import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar({ toggle, setToggle }) {
	const [open, setOpen] = useState(false);
	const toggleHamburger = () => {
		setOpen(!open);
	};

	return (
		<div className='navigation'>
			<div class='switches-container'>
				<input
					type='radio'
					id='switchMonthly'
					name='switchPlan'
					value='Monthly'
					checked={!toggle}
					onChange={() => setToggle(false)}
				/>
				<input
					type='radio'
					id='switchYearly'
					name='switchPlan'
					value='Yearly'
					checked={toggle}
					onChange={() => setToggle(true)}
				/>
				<label htmlFor='switchMonthly'>Work</label>
				<label htmlFor='switchYearly'>Fun</label>
				<div class='switch-wrapper'>
					<div class='switch'>
						<div>Work</div>
						<div>Fun</div>
					</div>
				</div>
			</div>

			<div>
				<div id='hamburger-container'>
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
		</div>
	);
}

export default NavBar;
