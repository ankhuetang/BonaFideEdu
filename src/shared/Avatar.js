import React, { useEffect } from 'react';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import WavingHandIcon from '@mui/icons-material/WavingHand';

import 'react-tooltip/dist/react-tooltip.css';
import './Avatar.css';

const Avatar = ({ imageUrl, intro, name, schoolUrl }) => {
	return (
		<>
			<div>
				<img
					className='ava-size rounded-circle img-thumbnail'
					src='https://m.media-amazon.com/images/M/MV5BNzEwOTcxZmItZmZhZC00ZmU1LWExNDItNzBhZTdiMmRkNzIwXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg'
					data-bs-toggle='modal'
					data-bs-target='#avatarModal'
				/>
				<WavingHandIcon data-tooltip-id='abc' />
				<ReactTooltip
					id='abc'
					effect='solid'
					arrowColor='#fff'
					className='skills-tooltip'
				>
					heluuuu
				</ReactTooltip>

				{/* Modal */}
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
									<div className='col-8'>{intro}</div>
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