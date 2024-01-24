import React from 'react';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import WavingHandIcon from '@mui/icons-material/WavingHand';

import 'react-tooltip/dist/react-tooltip.css';
import './Avatar.css';

const Avatar = ({ imgClassName, imageUrl, intro, name, schoolUrl }) => {
	return (
		<>
			<div>
				<img
					className={`${imgClassName} ava rounded-circle ava`}
					src='https://m.media-amazon.com/images/M/MV5BNzEwOTcxZmItZmZhZC00ZmU1LWExNDItNzBhZTdiMmRkNzIwXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg'
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
									{name} Hi, I'm Nhan!
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
									<div className='col-8 d-flex align-items-start'>
										{intro}Looking forward to see you in class!
									</div>
									<div className='col-4'>
										<img
											className='ava-size rounded-circle img-thumbnail'
											src='https://www.kindpng.com/picc/m/366-3667057_brown-university-logo-transparent-logo-brown-university-hd.png'
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
