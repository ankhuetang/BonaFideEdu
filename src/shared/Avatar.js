import React from 'react';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

import './Avatar.css';

const Avatar = ({ imgClassName, image, intro, name, school }) => {
	return (
		<>
			<div>
				<AdvancedImage
					className={`${imgClassName} ava rounded-circle`}
					cldImg={image}
					data-bs-toggle='modal'
					data-bs-target='#avatarModal'
				/>
				<div
					className='modal fade'
					id='avatarModal'
					tabIndex='-1'
					aria-labelledby='avatarModalLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title' id='avatarModalLabel'>
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
									<div className='col-8 d-flex align-items-start'>{intro}</div>
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
