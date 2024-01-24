import React from 'react';

import './Navbar.css';

const Navbar = () => {
	return (
		<>
			<nav className='nav-color navbar navbar-expand-lg fixed-top'>
				<div className='container-fluid px-5'>
					<a className='navbar-brand' href=''>
						BonaFide
					</a>
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
								<a className='nav-link active' aria-current='page' href=''>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href=''>
									About us
								</a>
							</li>
							<li class='nav-item dropdown'>
								<a
									class='nav-link dropdown-toggle'
									href='#'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Courses
								</a>
								<ul class='dropdown-menu'>
									<li>
										<a class='dropdown-item' href=''>
											IELTS
										</a>
									</li>
									<li>
										<a class='dropdown-item' href=''>
											SAT
										</a>
									</li>
									<li>
										<a class='dropdown-item' href=''>
											Academic Writing
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href=''>
									Contact
								</a>
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
