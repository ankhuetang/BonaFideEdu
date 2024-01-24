import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<>
			<div class='container-fluid header-bg text-center globe'>
				<div class='row full-height p-5 align-items-center'>
					<div class='col-md-12'>
						<div class='header-title'>
							<h2 className='fs-1 fw-bold font-monospace'>Bona Fide</h2>
							<p className='fw-light'>Teachers without borders</p>
						</div>
					</div>

					{/* <div class='col-md-6'>
						<div>
							<h2>Column 2</h2>
							<p>This is the content of the second column.</p>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Header;
