import React from 'react';
import './Welcome.css';
import Avatar from '../../shared/Avatar';

const Welcome = () => {
	return (
		<>
			<div class='container-fluid p-4 welcome-bg text-center full-height'>
				<div className='title row text-center align-items-start height-10 pt-3 mt-2'>
					<h1>Welcome from our instructors</h1>
				</div>
				<div className='row height-90 pt-5 mt-1'>
					<div class='col-md-4 d-none d-md-block d-flex justify-content-center align-items-center astronaut'></div>
					<div class='col'>
						<div class='row row-cols-4 height-100'>
							<div class='col-3'>
								<Avatar
									imageUrl={'../../images/ava1.jpg'}
									imgClassName={'ava-large'}
								/>
							</div>
							<div class='col-9'></div>
							<div class='col-6'></div>
							<div class='col-3'>
								<Avatar
									imageUrl={'../../images/ava1.jpg'}
									imgClassName={'ava-small'}
								/>
							</div>
							<div class='col-3'></div>
							<div class='col-3'></div>
							<div class='col-3'>
								<Avatar
									imageUrl={'../../images/ava1.jpg'}
									imgClassName='ava-large'
								/>
							</div>
							<div class='col-6'></div>
							<div class='col-9'></div>
							<div class='col-3'>
								<Avatar
									imageUrl={'../../images/ava1.jpg'}
									imgClassName='ava-large'
								/>
							</div>
							<div class='col-3'>
								<Avatar
									imageUrl={'../../images/ava1.jpg'}
									imgClassName='ava-large'
								/>
							</div>
							<div class='col-3'></div>
							<div class='col-3'>
								<Avatar
									imageUrl={'../../images/ava1.jpg'}
									imgClassName='ava-small'
								/>
							</div>
							<div class='col-3'></div>
						</div>
					</div>
					<div />
				</div>
			</div>
		</>
	);
};

export default Welcome;
