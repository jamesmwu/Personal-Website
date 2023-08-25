import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar({ toggle, setToggle }) {
	const [open, setOpen] = useState(false);
	const toggleHamburger = () => {
		setOpen(!open);
	};

	return (
		<div className='navAnchor'>
			<div className='navigation'>
				<div className='switches-container'>
					<input
						type='radio'
						id='switchWork'
						checked={!toggle}
						onChange={() => setToggle(false)}
					/>
					<input
						type='radio'
						id='switchFun'
						checked={toggle}
						onChange={() => setToggle(true)}
					/>
					<label htmlFor='switchWork'>Work</label>
					<label htmlFor='switchFun'>Fun</label>
					<div className='switch-wrapper'>
						<div className='switch'>
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
		</div>
	);
}

export default NavBar;
