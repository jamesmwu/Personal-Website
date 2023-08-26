import '../styles/TestimonialCard.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PFP from '../img/PFP.png';

function TestimonialCard({ name, title, description }) {
	const [show, setShown] = useState(false);

	const props3 = useSpring({
		transform: show ? 'scale(1.03)' : 'scale(1)',
		boxShadow: show
			? '0 20px 25px rgb(0 0 0 / 25%)'
			: '0 2px 10px rgb(0 0 0 / 8%)'
	});
	return (
		<animated.div
			// className='testCard'
			style={props3}
			onMouseEnter={() => setShown(true)}
			onMouseLeave={() => setShown(false)}
		>
			<div className='container glass'>
				<img src={PFP} alt={name} className='testimonial-image' />
				<div className='review'>
					<h2 className='testimonial-name'>{name}</h2>
					<p className='testimonial-title'>{title}</p>
					<p className='testimonial-description'>{description}</p>
				</div>
			</div>
		</animated.div>
	);
}

export default TestimonialCard;
