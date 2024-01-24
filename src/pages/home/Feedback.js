import React from 'react';

import FbCard from '../../shared/FbCard';

import './Feedback.css';

const Feedback = () => {
	return (
		<>
			<div class='container-fluid p-4 fb-bg text-center full-height'>
				<div className='row height-100'>
					<div className='col-md-4 d-flex flex-row align-items-center justify-content-center'>
						<h1 className='fb-title'>
							What our
							<br /> students say?
						</h1>
					</div>
					<div className='col-md-8 d-flex flex-column align-items-center justify-content-between'>
						{/* <div className='d-flex flex-column justify-content-between width-80'> */}
						<div className='row m-1 p-1 height-30 align-items-center'>
							<FbCard />
						</div>
						<div className='row m-1 p-1 height-30 align-items-center'>
							<FbCard />
						</div>
						<div className='row m-1 p-1 height-30 align-items-center'>
							<FbCard />
						</div>
						{/* </div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Feedback;
