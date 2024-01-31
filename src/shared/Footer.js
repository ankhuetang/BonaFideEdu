import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs'; //bs = boostrap icon
import { FaFacebookF, FaEnvelope } from 'react-icons/fa';

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
							<a href='mailto:bona.fide.edu.vn@gmail.com'>
								<FaEnvelope className='twitter' />
							</a>
						</div>
						<div className='col-1 align-self-start'>
							<a href='https://www.instagram.com/sheen.nguyen.30/'>
								<BsInstagram className='insta' />
							</a>
						</div>
						<div className='col-1 align-self-start'>
							<a href='https://www.facebook.com/profile.php?id=100090331195780'>
								<FaFacebookF className='fbook' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
