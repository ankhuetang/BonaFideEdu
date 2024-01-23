import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from './pages/home/Home';

import 'react-tooltip/dist/react-tooltip.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
