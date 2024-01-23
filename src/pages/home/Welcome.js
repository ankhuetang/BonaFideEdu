import React from 'react';
import './Welcome.css';
import Avatar from '../../shared/Avatar';

const Welcome = () => {
	return (
		<>
			<div class='container-fluid p-4 bg-info-subtle text-center full-height'>
				<div className='row text-center height-20 pt-3'>
					<h1>Welcome from our instructors</h1>
				</div>
				<div className='row height-80'>
					<div class='col d-flex justify-content-center align-items-center astronaut'></div>
					<div class='col'>
						<div class='row row-cols-3 height-100'>
							<div class='col'>
								<Avatar imageUrl={'../../images/ava1.jpg'} />
							</div>
							<div class='col-8'></div>
							<div class='col'></div>
							<div class='col'>
								<Avatar imageUrl={'../../images/ava1.jpg'} />
							</div>
							<div class='col'></div>
							<div class='col-8'></div>
							<div class='col'>
								<Avatar imageUrl={'../../images/ava1.jpg'} />
							</div>
							<div class='col'>
								<Avatar imageUrl={'../../images/ava1.jpg'} />
							</div>
							<div class='col-8'></div>
						</div>
					</div>
					<div />
				</div>
			</div>
		</>
	);
};

export default Welcome;
