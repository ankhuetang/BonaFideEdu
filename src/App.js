import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Ielts from './pages/courses/Ielts';
import Sat from './pages/courses/Sat';
import AWriting from './pages/courses/AWriting';

import 'react-tooltip/dist/react-tooltip.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/ielts' element={<Ielts />} />
					<Route path='/sat' element={<Sat />} />
					<Route path='/academic-writing' element={<AWriting />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
