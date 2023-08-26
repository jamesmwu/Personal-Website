import React from 'react';
import placeholder from '../img/PFP.png';
import '../styles/Card.css';

export default function Card({
	title,
	role,
	orgDescription,
	description,
	website,
	points,
	img
}) {
	return (
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
					<img src={placeholder} alt='Project' />
				</div>
			</div>
		</div>
	);
}
