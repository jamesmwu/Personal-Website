import React, { useState, useEffect } from 'react';
import { experiences, projects } from '../data/info';
import Card from '../components/Card';
import EndCard from '../components/EndCard';
import '../styles/Home.css';

function Home({ toggle }) {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		const fadeInTimeout = setTimeout(() => {
			setFadeIn((fadeIn) => !fadeIn);
		}, 800);

		return () => clearTimeout(fadeInTimeout);
	}, [toggle]);

	return (
		<div className='parentHome'>
			{toggle ? <Fun fadeIn={fadeIn} /> : <Work fadeIn={fadeIn} />}
		</div>
	);
}

function Work({ fadeIn }) {
	return (
		<div
			id='homePage'
			className={fadeIn ? 'fade-in' : 'fade-out'}
		>
			<div className='homeBio'>
				<ul className='background'>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<h1 id='heroTextWork'>James Wu</h1>
				{/* prettier-ignore */}
				<p>
					Hi there! I&apos;m currently a senior studying computer
					science at UCLA. Welcome to my website, enjoy your stay :)
				</p>
			</div>
			<div className='experiences'>
				<h2>Experiences</h2>
				{experiences.map((exp, index) => {
					return (
						<Card
							key={index}
							title={exp.title}
							role={exp.role}
							orgDescription={exp.orgDescription}
							description={exp.description}
							website={exp.website}
							points={exp.points}
							expImg={exp.img}
						/>
					);
				})}
			</div>
			<div className='end'>
				<EndCard work={true} />
			</div>
		</div>
	);
}

function Fun({ fadeIn }) {
	return (
		<div
			id='homePage'
			className={!fadeIn ? 'fade-in' : 'fade-out'}
		>
			<div className='homeBio'>
				<ul className='background'>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<h1 id='heroText'>Hey I&apos;m James</h1>
				{/* prettier-ignore */}
				<p>
					Coding is something I find fun, and below are some of the
					projects I&apos;ve worked on in my spare time!
					<br />
					<br />
					Feel free to check them out :D
				</p>
			</div>
			<div className='experiences'>
				<h2>Projects</h2>
				{projects.map((exp, index) => {
					return (
						<Card
							key={index}
							title={exp.title}
							role={exp.role}
							orgDescription={exp.orgDescription}
							description={exp.description}
							website={exp.website}
							points={exp.points}
							expImg={exp.img}
						/>
					);
				})}
			</div>
			<div className='end'>
				<EndCard work={false} />
			</div>
		</div>
	);
}

export default Home;
