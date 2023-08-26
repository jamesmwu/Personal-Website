import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import { aboutMe } from '../data/info';
import '../styles/About.css';

function About() {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		const fadeInTimeout = setTimeout(() => {
			setFadeIn((fadeIn) => !fadeIn);
		}, 800);

		return () => clearTimeout(fadeInTimeout);
	}, []);

	return (
		<div id='aboutPage' className={fadeIn ? 'fade-in' : 'fade-out'}>
			<div className='aboutBio'>
				<h1 id='heroText'>Hello! I'm James.</h1>
				<p id='heroDesc'>
					👋 Hello! I'm James, a CS Dean's Honors list student at UCLA with a
					passion for web and mobile development. As an aspiring developer, I
					thrive on creating innovative solutions and exploring new
					technologies.
				</p>
				<div className='subSection'>
					{aboutMe.map((info, index) => (
						<Collapsible key={index} trigger={info.title}>
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
