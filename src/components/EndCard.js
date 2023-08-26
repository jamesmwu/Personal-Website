import React from 'react';
import '../styles/EndCard.css';
import PFP from '../img/PFP.png';

export default function EndCard({ name, title, description }) {
	return (
		<div className='container glass'>
			<img src={PFP} className='testimonial-image' />
			<h1>Reach out pls</h1>
		</div>
	);
}
