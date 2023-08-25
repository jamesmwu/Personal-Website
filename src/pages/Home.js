import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home({ toggle }) {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setTimeout(function () {}, 10000);
		const fadeInTimeout = setTimeout(() => {
			setFadeIn((fadeIn) => !fadeIn);
		}, 300);
		setTimeout(function () {}, 10000);

		return () => clearTimeout(fadeInTimeout);
	}, [toggle]);

	return (
		<div>{toggle ? <Fun fadeIn={fadeIn} /> : <Work fadeIn={fadeIn} />}</div>
	);
}

function Work({ fadeIn }) {
	return (
		<div id='homePage' className={fadeIn ? 'fade-in' : 'fade-out'}>
			<h1 id='heroTextWork'>James Wu</h1>
			<p>
				Hi there! I'm currently a junior studying computer science at UCLA.
				Welcome to my website, enjoy your stay :)
			</p>
		</div>
	);
}

function Fun({ fadeIn }) {
	return (
		<div id='homePage' className={!fadeIn ? 'fade-in' : 'fade-out'}>
			<h1 id='heroText'>Yo I'm James</h1>
			<p>
				I am many things. A Smash bros enthusiast, a violinist, an academic
				weapon, and a mediocre artist.
				<br />
				<br />
				But most of all, I'm super employable.
				<br />
				<br />
				If you want an awesome employee, you've come to the right place.
			</p>
		</div>
	);
}

export default Home;
