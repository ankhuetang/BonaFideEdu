import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Courses from './Courses';
import Feedback from './Feedback';

const Home = () => {
	return (
		<>
			<Header />
			<Welcome />
			<Courses />
			<Feedback />
		</>
	);
};

export default Home;
