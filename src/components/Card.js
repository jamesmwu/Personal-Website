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
					{/* <p className='card-description'>{description}</p> */}
					<a
						className='card-website'
						href={website}
						target='_blank'
						rel='noopener noreferrer'
					>
						Visit Website
					</a>
				</div>
				<div className='card-image'>
					<img src={placeholder} alt='Project' />
				</div>
			</div>
		</div>
	);
}
