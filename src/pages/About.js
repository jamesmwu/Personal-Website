import React, { useState, useEffect } from 'react';
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
		<div id='homePage' className={fadeIn ? 'fade-in' : 'fade-out'}>
			<div className='homeBio'>
				<h1 id='heroText'>Hello! I'm James.</h1>
				<p>Yo</p>
			</div>
		</div>
	);
}

export default About;
