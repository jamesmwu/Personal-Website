import React, { useState } from 'react';
import '../styles/EndCard.css';
import Tilt from 'react-parallax-tilt';
import IRL_PFP from '../img/IRL_PFP.png';
import Resume from '../data/JamesWu_Resume.pdf';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { toastWebsite } from '../data/info';

export default function EndCard({ name, title, description }) {
	const customBackgroundClass = 'custom-toast-background';
	const customProgressBarClass = 'custom-progress-bar';
	const customSpacingClass = 'custom-toast-spacing';

	const notify = () => {
		toast.info(toastWebsite[toastIdx], {
			position: 'bottom-right',
			autoClose: 6000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			className: `${customBackgroundClass} ${customProgressBarClass} ${customSpacingClass}`,
			theme: 'colored'
		});
		if (toastIdx === toastWebsite.length - 1) {
			setToastIdx(0);
		} else {
			setToastIdx(toastIdx + 1);
		}
	};
	const [toastIdx, setToastIdx] = useState(0);

	return (
		<Tilt
			tiltReverse={true}
			className='tiltContainer'
			tiltMaxAngleX={2}
			tiltMaxAngleY={2}
		>
			<div className='container glass'>
				<h1>Contacts and Stuff</h1>
				<div className='pfpWrapper'>
					<img src={IRL_PFP} alt='IRL PFP' className='profile' />
					<p>Me, enjoying a delicious meal.</p>
				</div>
				<div className='textWrapper'>
					<p>
						That's the website! Hope you played around a bit and enjoyed, I
						built it myself. The code is open-source if you'd like to take a
						look.
					</p>
					<p>I'm always open to chatting, so feel free to send me a message!</p>
				</div>
				<div className='buttonWrapper'>
					<a
						href='mailto:jamesw0462@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='card-website'>Email</button>
					</a>
					<a
						href='https://www.linkedin.com/in/james-wu/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='card-website'>LinkedIn</button>
					</a>
					<button className='card-website' onClick={notify}>
						Website
					</button>
					<a href={Resume} target='_blank' rel='noopener noreferrer'>
						<button className='card-website'>Resume</button>
					</a>
				</div>
			</div>
		</Tilt>
	);
}
