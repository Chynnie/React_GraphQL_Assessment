import React from 'react';
import { useUsers } from '../hooks/useUsers';
import Filter from './Filter';

function Users() {
	const { error, loading, data } = useUsers();

	if (loading) return <div>Loading.....</div>;
	if (error) return <div>Something Went Wrong!!!</div>;

	return (
		<div className='users'>
			<Filter />
			{data.users.map((user, i) => {
				return (
					<div key={i}>
						{user.id} {'. '}
						{user.name}
					</div>
				);
			})}
		</div>
	);
}

export default Users;
