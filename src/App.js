import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>{/* <Route exact path='/' element={<Home />} /> */}</Routes>
			</Router>
		</div>
	);
}

export default App;
