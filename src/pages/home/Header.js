import React from 'react';

import { Cloudinary } from '@cloudinary/url-gen';
import { motion } from 'framer-motion';

import './Header.css';

const Header = () => {
	const cld = new Cloudinary({ cloud: { cloudName: 'dweffaoxw' } });
	const brown = cld.image('brown-bg').toURL();

	return (
		<>
			<div
				class='container-fluid header-bg text-center'
				style={{ backgroundImage: `url(${brown})` }}
			>
				<div class='row full-height p-5 align-items-center'>
					<div class='col-md-12'>
						<motion.div
							className='header-title'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1.0 }}
						>
							<h1 className='fs-1 fw-bold font-monospace header-text'>
								Bona Fide Education
							</h1>
							<p className='fw-light header-text'>Teachers without borders</p>
							<a
								href='https://forms.office.com/r/K9kxsJB88m?origin=lprLink'
								className='register'
								target='_blank'
								rel='noopener noreferrer'
							>
								Register here!
							</a>
						</motion.div>
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
