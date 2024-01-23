import React from 'react';

import './Card.css';

const Card = ({ title, info, link }) => {
	return (
		<>
			<div class='card height-100'>
				<img
					src='https://i.pinimg.com/736x/66/69/41/66694178d6b60e6c056ba3a36463bd86.jpg'
					class='card-img-top'
					style={{ width: '100%', height: '40%' }}
				/>
				<div class='card-body'>
					<h5 class='card-title'>{title} Card title</h5>
					<p class='card-text'>{info} Helo skrtsskrtt</p>
					<a href={{ link }} class='btn btn-primary'>
						Click me
					</a>
				</div>
			</div>
		</>
	);
};

export default Card;
