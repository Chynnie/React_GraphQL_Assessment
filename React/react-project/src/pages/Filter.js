import React from 'react';
import { Link } from 'react-router-dom';

function Filter() {
	return (
		<div>
			<Link to='/transaction-details'>
				<button className='users-btn'>Transaction Details</button>
			</Link>
			<Link to='/users'>
				<button className='users-btn'>All Users</button>
			</Link>
		</div>
	);
}

export default Filter;
