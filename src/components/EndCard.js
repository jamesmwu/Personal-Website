import React, { useState } from 'react';
import '../styles/EndCard.css';
import Tilt from 'react-parallax-tilt';
import IRL_PFP from '../img/IRL_PFP.png';
import Professional_PFP from '../img/Professional_PFP.png';
import Resume from '../data/JamesWu_Resume.pdf';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { toastWebsite } from '../data/info';

export default function EndCard({ work }) {
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
			tiltMaxAngleX={3.5}
			tiltMaxAngleY={3.5}
		>
			<div className='container glass'>
				{work ? <h1>Contact Me</h1> : <h1>Let's Chat!</h1>}
				<div className='pfpWrapper'>
					<img
						src={work ? Professional_PFP : IRL_PFP}
						alt='James Wu Profile'
						className='profile'
					/>
					{work ? (
						<p>Me, looking professional.</p>
					) : (
						<p>Me, enjoying a delicious meal.</p>
					)}
				</div>
				<div className='textWrapper'>
					<p>
						That's the website! Hope you enjoyed, I built it myself. The code is{' '}
						<a
							href='https://github.com/jamesmwu/jamesmwu.github.io'
							target='_blank'
							rel='noopener noreferrer'
						>
							open-source
						</a>{' '}
						if you'd like to take a look.
					</p>
					<p>I'm always open to chatting, so feel free to send me a message!</p>
				</div>
				<div className='buttonWrapper'>
					<a
						href='mailto:jamesw0462@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='card-website-wrapper'
					>
						<button className='card-website-end'>Email</button>
					</a>
					<a
						href='https://www.linkedin.com/in/james-wu/'
						target='_blank'
						rel='noopener noreferrer'
						className='card-website-wrapper'
					>
						<button className='card-website-end'>LinkedIn</button>
					</a>
					<div className='card-website-wrapper'>
						<button className='card-website-end' onClick={notify}>
							Website
						</button>
					</div>

					<a
						href={Resume}
						target='_blank'
						rel='noopener noreferrer'
						className='card-website-wrapper'
					>
						<button className='card-website-end'>Resume</button>
					</a>
				</div>
			</div>
		</Tilt>
	);
}
