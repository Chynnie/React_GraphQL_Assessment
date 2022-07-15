import React from 'react';
import { useTransactions } from '../hooks/useTransactions';
import Filter from './Filter';

function Transactions() {
	const { error, loading, data } = useTransactions();

	if (loading) return <div>Loading.....</div>;
	if (error) return <div>Something Went Wrong!!!</div>;

	return (
		<div className='transactions'>
			<Filter />
			{data.transactions.map((transaction, i) => {
				return (
					<div key={i}>
						{transaction.id} {'. '}
						{transaction.date.username} {', '}
						{transaction.date.month} {', '}
						{transaction.date.transactionType} {', '}
						{transaction.date.amount} {', '}
						{transaction.date.status} {', '}
						{transaction.date.userId}
					</div>
				);
			})}
		</div>
	);
}

export default Transactions;
