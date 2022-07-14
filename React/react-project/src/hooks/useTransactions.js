import { useQuery, gql } from '@apollo/client';

const GET_TRANSACTIONS = gql`
	query {
		transactions {
			id
			date {
				username
				month
				transactionType
				amount
				status
				userId
			}
		}
	}
`;

export const useTransactions = () => {
	const { error, loading, data } = useQuery(GET_TRANSACTIONS);

	return {
		error,
		loading,
		data,
	};
};
