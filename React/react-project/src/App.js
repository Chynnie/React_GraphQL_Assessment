import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Transactions from './pages/Transactions';
import Users from './pages/Users';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Transactions />} />
					<Route exact path='/id' element={<Users />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
