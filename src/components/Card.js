import React, { useEffect, useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import placeholder from '../img/PFP.png';
import '../styles/Card.css';
import Hack from '../img/Hack.png';
import Hussle from '../img/Hussle.png';
import GrammaTech from '../img/GrammaTech.ico';
import Pathfinder from '../img/Pathfinder.png';
import HackWeb from '../img/HackWeb.png';
import BruinOdyssey from '../img/BruinOdyssey.png';
import Jimmy from '../img/Jimmy.png';
import Taigi from '../img/Taigi.png';

export default function Card({
	title,
	role,
	orgDescription,
	description,
	website,
	points,
	expImg
}) {
	const [curImage, setCurImage] = useState(placeholder);
	const [flipped, set] = useState(false);
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 }
	});

	useEffect(() => {
		if (expImg === 'Hack') {
			setCurImage(Hack);
		} else if (expImg === 'Hussle') {
			setCurImage(Hussle);
		} else if (expImg === 'GrammaTech') {
			setCurImage(GrammaTech);
		} else if (expImg === 'Pathfinder') {
			setCurImage(Pathfinder);
		} else if (expImg === 'HackWeb') {
			setCurImage(HackWeb);
		} else if (expImg === 'BruinOdyssey') {
			setCurImage(BruinOdyssey);
		} else if (expImg === 'Jimmy') {
			setCurImage(Jimmy);
		} else if (expImg === 'Taigi') {
			setCurImage(Taigi);
		}
	}, []);

	return (
		<a href={website} target='_blank' rel='noopener noreferrer' id='parentLink'>
			<div className='card'>
				<div className='card-content'>
					<div className='card-text'>
						<h2 className='card-title'>{title}</h2>
						<p className='card-role'>{role}</p>
						<p className='card-org-description'>{orgDescription}</p>
						<a href={website} target='_blank' rel='noopener noreferrer'>
							<button className='card-website'>Link</button>
						</a>
					</div>
					<div className='card-image'>
						<img src={curImage} alt='Project' />
					</div>
				</div>
			</div>
		</a>
	);
}
