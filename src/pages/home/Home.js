import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Courses from './Courses';
import Feedback from './Feedback';
import Footer from '../../shared/Footer';
const Home = () => {
	return (
		<>
			<Header />
			<Welcome />
			<Courses />
			<Feedback />
			<Footer />
		</>
	);
};

export default Home;
