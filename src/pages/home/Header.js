import React from 'react';

import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
	return (
		<>
			<div class='container-fluid header-bg text-center globe'>
				<div class='row full-height p-5 align-items-center'>
					<div class='col-md-12'>
						<motion.div
							className='header-title'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1.0 }}
						>
							<h2 className='fs-1 fw-bold font-monospace'>Bona Fide</h2>
							<p className='fw-light'>Teachers without borders</p>
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
