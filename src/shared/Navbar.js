import React from 'react';

import { NavLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import './Navbar.css';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
	return (
		<>
			<nav className='nav-color navbar navbar-expand-lg fixed-top'>
				<div className='container-fluid px-5'>
					<NavLink className='navbar-brand' to='/'>
						BonaFide
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
								<NavLink className='nav-link active' aria-current='page' to='/'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/about'>
									About us
								</NavLink>
							</li>
							<li class='nav-item dropdown'>
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
							</li>
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
				className='offcanvas offcanvas-start'
				tabIndex='-1'
				id='offCanvas'
				aria-labelledby='offCanvasLabel'
			>
				<div className='offcanvas-header'>
					<h5 className='offcanvas-title' id='offCanvasLabel'>
						Offcanvas
					</h5>
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='offcanvas'
						aria-label='Close'
					></button>
				</div>
				<div className='offcanvas-body'>
					<ul class='navbar-nav justify-content-end flex-grow-1 pe-3'>
						<li class='nav-item'>
							<a class='nav-link active' aria-current='page' href='#'>
								Home
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								Link
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
