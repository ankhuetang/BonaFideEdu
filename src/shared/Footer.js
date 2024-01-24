import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs'; //bs = boostrap icon
import { FaFacebookF } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
	return (
		<>
			<div id='contact-section'>
				<div className='container-fluid footer-bg height-20'>
					<div className='row height-50 align-items-center'>
						<h2 className='footer-title'>Our Contacts</h2>
					</div>
					<div className='row social height-50 align-items-center justify-content-center'>
						<div className='col-1 align-self-start'>
							<BsTwitter className='twitter' />
						</div>
						<div className='col-1 align-self-start'>
							<BsInstagram className='insta' />
						</div>
						<div className='col-1 align-self-start'>
							<FaFacebookF className='fbook' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
