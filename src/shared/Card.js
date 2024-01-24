import React from 'react';

import './Card.css';

const Card = ({ title, info, link, imageUrl }) => {
	return (
		<>
			<div class='card height-100'>
				<img
					src='https://i.pinimg.com/736x/66/69/41/66694178d6b60e6c056ba3a36463bd86.jpg'
					class='card-img-top'
					style={{ width: '100%', height: '40%' }}
				/>
				<div class='card-body'>
					<h5 class='card-title'>{title} IELTS Course</h5>
					<p class='card-text'>{info} Let's get 8.0 and beyond together</p>
					<a href={{ link }} class='btn'>
						View Course
					</a>
				</div>
			</div>
		</>
	);
};

export default Card;
