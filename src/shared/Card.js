import React from 'react';
import { Link } from 'react-router-dom';

import { AdvancedImage } from '@cloudinary/react';

import './Card.css';

const Card = ({ imgClassName, image, title, info }) => {
	return (
		<>
			<div class='card height-100'>
				<AdvancedImage
					className={`${imgClassName} course-img`}
					cldImg={image}
				/>
				<div class='card-body'>
					<h5 class='card-title'>{title}</h5>
					<p class='card-text'>{info}</p>
				</div>
			</div>
		</>
	);
};

export default Card;
