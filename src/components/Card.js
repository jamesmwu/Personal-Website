import React, { useEffect, useState } from 'react';
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
import DevX from '../img/DevX.png';
import Arista from '../img/Arista.png';

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

	useEffect(() => {
		if (expImg === 'Hack') {
			setCurImage(() => Hack);
		} else if (expImg === 'Hussle') {
			setCurImage(() => Hussle);
		} else if (expImg === 'GrammaTech') {
			setCurImage(() => GrammaTech);
		} else if (expImg === 'Pathfinder') {
			setCurImage(Pathfinder);
		} else if (expImg === 'HackWeb') {
			setCurImage(() => HackWeb);
		} else if (expImg === 'BruinOdyssey') {
			setCurImage(() => BruinOdyssey);
		} else if (expImg === 'Jimmy') {
			setCurImage(() => Jimmy);
		} else if (expImg === 'Taigi') {
			setCurImage(() => Taigi);
		} else if (expImg === 'DevX') {
			setCurImage(() => DevX);
		} else if (expImg === 'Arista') {
			setCurImage(() => Arista);
		}
	}, [expImg]);

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
