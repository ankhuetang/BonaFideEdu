import React from 'react';

import { AdvancedImage } from '@cloudinary/react';

import './Avatar.css';

const Avatar = ({ imgClassName, image, intro, name, school, modalId }) => {
	return (
		<>
			<div>
				<AdvancedImage
					className={`${imgClassName} ava rounded-circle`}
					cldImg={image}
					data-bs-toggle='modal'
					data-bs-target={`#${modalId}`}
				/>
				<div
					className='modal fade'
					id={modalId}
					tabIndex='-1'
					aria-labelledby={`${modalId}Label`}
					aria-hidden='true'
				>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title' id={`${modalId}Label`}>
									{name}
								</h5>
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
								></button>
							</div>
							<div className='modal-body'>
								<div className='row'>
									<div className='col-8 d-flex align-items-start intro-text'>
										{intro}
									</div>
									<div className='col-4'>
										<AdvancedImage
											className='ava-size rounded-circle img-thumbnail'
											cldImg={school}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Avatar;
