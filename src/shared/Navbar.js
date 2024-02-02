import React from 'react';

import { NavLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { Link } from 'react-router-dom';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

import './Navbar.css';

const Navbar = () => {
	const cld = new Cloudinary({ cloud: { cloudName: 'dweffaoxw' } });
	const logo = cld.image('bonafide');

	return (
		<>
			<nav className='nav-color navbar navbar-expand-lg fixed-top'>
				<div className='container-fluid px-5'>
					<NavLink className='navbar-brand' to='/'>
						<AdvancedImage cldImg={logo} className='logo' />
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offCanvas'
						aria-controls='offCanvas'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse justify-content-end'
						id='navbarNav'
					>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<NavLink className='nav-link' aria-current='page' to='/'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/about'>
									About us
								</NavLink>
							</li>
							{/* <li class='nav-item dropdown'>
								<a
									class='nav-link dropdown-toggle'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Courses
								</a>
								<ul class='dropdown-menu'>
									<li>
										<NavLink class='dropdown-item dd-item' to='ielts'>
											IELTS
										</NavLink>
									</li>
									<li>
										<NavLink class='dropdown-item dd-item' to='sat'>
											SAT
										</NavLink>
									</li>
									<li>
										<NavLink
											class='dropdown-item dd-item'
											to='/academic-writing'
										>
											Academic Writing
										</NavLink>
									</li>
								</ul>
							</li> */}
							<li className='nav-item'>
								<ScrollLink
									className='nav-link'
									to='contact-section'
									spy={true}
									smooth={true}
									duration={500}
									style={{ cursor: 'pointer' }}
								>
									<a>Contact</a>
								</ScrollLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Offcanvas component */}
			<div
				className='offcanvas offcanvas-start offcanvas-color'
				tabIndex='-1'
				id='offCanvas'
				aria-labelledby='offCanvasLabel'
			>
				<div className='offcanvas-header'>
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='offcanvas'
						aria-label='Close'
					></button>
				</div>
				<div className='offcanvas-body'>
					<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
						<li className='nav-item'>
							<NavLink className='skrt' to='/'>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='skrt' to='/about'>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
