import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Transactions from './pages/Transactions';
import Users from './pages/Users';
import Filter from './pages/Filter';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Filter />} />
					<Route exact path='/transaction-details' element={<Transactions />} />
					<Route exact path='/users' element={<Users />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
