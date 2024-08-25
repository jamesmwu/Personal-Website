import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import { aboutMe } from '../data/info';
import '../styles/About.css';
import Cactus from '../img/aboutPage/Cactus.png';
import Deer from '../img/aboutPage/Deer.png';
import Sunset from '../img/aboutPage/Sunset.png';

function About() {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		const fadeInTimeout = setTimeout(() => {
			setFadeIn((fadeIn) => !fadeIn);
		}, 800);

		return () => clearTimeout(fadeInTimeout);
	}, []);

	return (
		<div
			id='aboutPage'
			className={fadeIn ? 'fade-in' : 'fade-out'}
		>
			<div className='imageContainer'>
				<div className='imageWrapper left'>
					<img
						id='sunset'
						src={Sunset}
						alt='Me during a sunset'
					/>
				</div>
				<div className='imageWrapper larger'>
					<img
						id='cactus'
						src={Cactus}
						alt='Me posing next to a cactus'
					/>
				</div>
				<div className='imageWrapper right'>
					<img
						id='deer'
						src={Deer}
						alt='Me holding a deer head over my face'
					/>
				</div>
			</div>

			<div className='aboutBio'>
				<div className='aboutText'>
					<h1 id='heroText'>Hello! I&apos;m James.</h1>
					{/* prettier-ignore */}
					<p id='heroDesc'>
						👋 Hello! I&apos;m James, a CS student at UCLA with a
						passion for software development. As a developer, I
						thrive on creating innovative solutions and exploring
						new technologies.
					</p>
				</div>

				<div className='subSection'>
					{aboutMe.map((info, index) => (
						<Collapsible
							key={index}
							trigger={info.title}
						>
							{info.description.map((desc, idx) => (
								<p key={idx}>{desc}</p>
							))}
						</Collapsible>
					))}
				</div>
			</div>
		</div>
	);
}

export default About;
