import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/NavBar.css';

function NavBar({ toggle, setToggle }) {
	const customBackgroundClass = 'custom-toast-background';
	const customProgressBarClass = 'custom-progress-bar';

	const notify = () =>
		toast.info('🦄 Wow so easy!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			className: `${customBackgroundClass} ${customProgressBarClass}`,
			theme: 'colored'
		});
	const [open, setOpen] = useState(false);
	const toggleHamburger = () => {
		setOpen(!open);
	};

	return (
		<div className='navAnchor'>
			<div className='navigation'>
				<div className='interactive'>
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
					<button className='funFact' onClick={notify}>
						!
					</button>
					<ToastContainer
						position='bottom-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						draggable
						pauseOnHover
						theme='colored'
					/>
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
