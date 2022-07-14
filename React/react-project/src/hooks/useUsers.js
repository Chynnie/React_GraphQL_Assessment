import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
	query {
		users {
			id
			name
		}
	}
`;

export const useUsers = () => {
	const { error, loading, data } = useQuery(GET_USERS);

	return {
		error,
		loading,
		data,
	};
};
