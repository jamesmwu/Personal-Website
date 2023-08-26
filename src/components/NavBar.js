import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { funFacts } from '../data/info';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/navBar.css';

function NavBar({ toggle, setToggle }) {
	const location = useLocation();
	const customBackgroundClass = 'custom-toast-background';
	const customProgressBarClass = 'custom-progress-bar';
	const customSpacingClass = 'custom-toast-spacing';

	const [clickCooldown, setClickCooldown] = useState(false);
	const clickCooldownTimeout = useRef(null);

	const toggleAfterCooldown = (value) => {
		if (!clickCooldown) {
			setToggle(value);
			setClickCooldown(true);
			clickCooldownTimeout.current = setTimeout(() => {
				setClickCooldown(false);
			}, 1000);
		}
	};

	const notify = () => {
		toast.info(funFacts[funIdx], {
			position: 'bottom-right',
			autoClose: 6000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			className: `${customBackgroundClass} ${customProgressBarClass} ${customSpacingClass}`,
			theme: 'colored'
		});
		if (funIdx === funFacts.length - 1) {
			setFunIdx(0);
		} else {
			setFunIdx(funIdx + 1);
		}
	};
	const [open, setOpen] = useState(false);
	const [funIdx, setFunIdx] = useState(0);
	const toggleHamburger = () => {
		setOpen(!open);
	};

	return (
		<div className='navAnchor'>
			<div className='navigation'>
				<div className='interactive'>
					<div
						className={`switches-container ${
							location.pathname === '/about' ? 'switches-container-grayed' : ''
						}`}
					>
						<input
							type='radio'
							id='switchWork'
							checked={!toggle}
							onChange={() => toggleAfterCooldown(false)}
						/>
						<input
							type='radio'
							id='switchFun'
							checked={toggle}
							onChange={() => toggleAfterCooldown(true)}
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
									setToggle(false);
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
