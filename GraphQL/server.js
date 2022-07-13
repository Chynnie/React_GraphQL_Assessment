const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
} = require('graphql');
const app = express();

const users = [
	{ id: 1, name: 'Gabriel Okoye' },
	{ id: 2, name: 'Gbenga Oluwole' },
	{ id: 3, name: 'Hashim Yakubu' },
	{ id: 4, name: 'Kevwe Ovie' },
];
const transactions = [
	{
		id: 1,
		transactionType: 'Debit',
		amount: 50000,
		status: 'Successful',
		userId: 2,
	},
	{
		id: 2,
		transactionType: 'Debit',
		amount: 10000,
		status: 'Not Successful',
		userId: 4,
	},
	{
		id: 3,
		transactionType: 'Credit',
		amount: 200000,
		status: 'Pending',
		userId: 3,
	},
	{
		id: 4,
		transactionType: 'Credit',
		amount: 30000,
		status: 'Successful',
		userId: 1,
	},
	{
		id: 5,
		transactionType: 'Debit',
		amount: 100000,
		status: 'Pending',
		userId: 4,
	},
	{
		id: 6,
		transactionType: 'Credit',
		amount: 500000,
		status: 'Successful',
		userId: 2,
	},
	{
		id: 7,
		transactionType: 'Credit',
		amount: 3000000,
		status: 'Not Successful',
		userId: 1,
	},
	{
		id: 8,
		transactionType: 'Debit',
		amount: 40000,
		status: 'Pending',
		userId: 3,
	},
	{
		id: 9,
		transactionType: 'Credit',
		amount: 300000,
		status: 'Successful',
		userId: 3,
	},
	{
		id: 10,
		transactionType: 'Debit',
		amount: 150000,
		status: 'Pending',
		userId: 1,
	},
	{
		id: 11,
		transactionType: 'Credit',
		amount: 5000,
		status: 'Successful',
		userId: 2,
	},
	{
		id: 12,
		transactionType: 'Credit',
		amount: 15000,
		status: 'Successful',
		userId: 4,
	},
	{
		id: 12,
		transactionType: 'Credit',
		amount: 20000,
		status: 'Not SUccessful',
		userId: 1,
	},
	{
		id: 13,
		transactionType: 'Debit',
		amount: 10000,
		status: 'Successful',
		userId: 2,
	},
	{
		id: 14,
		transactionType: 'Debit',
		amount: 40000,
		status: 'Successful',
		userId: 3,
	},
	{
		id: 15,
		transactionType: 'Credit',
		amount: 80000,
		status: 'Successful',
		userId: 4,
	},
	{
		id: 16,
		transactionType: 'Credit',
		amount: 50000,
		status: 'Successful',
		userId: 2,
	},
	{
		id: 17,
		transactionType: 'Debit',
		amount: 5000,
		status: 'Pending',
		userId: 4,
	},
	{
		id: 18,
		transactionType: 'Credit',
		amount: 100000,
		status: 'Not Successful',
		userId: 3,
	},
	{
		id: 19,
		transactionType: 'Credit',
		amount: 60000,
		status: 'Pending',
		userId: 1,
	},
	{
		id: 20,
		transactionType: 'Credit',
		amount: 200000,
		status: 'Successful',
		userId: 3,
	},
];

const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'This API represents the user of a bank account',
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLInt) },
		name: { type: new GraphQLNonNull(GraphQLString) },
	}),
});

const TransactionType = new GraphQLObjectType({
	name: 'Transaction',
	description: "This API represents the summary of a user's transactions",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLInt) },
		transactionType: { type: new GraphQLNonNull(GraphQLString) },
		amount: { type: new GraphQLNonNull(GraphQLInt) },
		status: { type: new GraphQLNonNull(GraphQLString) },
		userId: { type: new GraphQLNonNull(GraphQLInt) },
		user: {
			type: UserType,
			resolve: (transaction) => {
				return users.find((user) => user.id === transaction.userId);
			},
		},
	}),
});

const RootTransactionType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: () => ({
		users: {
			type: new GraphQLList(UserType),
			description: 'List of All Users',
			resolve: () => users,
		},
		transactions: {
			type: new GraphQLList(TransactionType),
			description: 'List of All Trasactions',
			resolve: () => transactions,
		},
	}),
});

const schema = new GraphQLSchema({
	query: RootTransactionType,
});

app.use(
	'/graphql',
	expressGraphQL({
		schema: schema,
		graphiql: true,
	})
);
app.listen(5000, () => console.log('Server Running'));
