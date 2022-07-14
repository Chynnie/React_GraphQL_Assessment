const cors = require('cors');
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
		date: {
			username: 'Gbenga Oluwole',
			month: 'January',
			transactionType: 'Debit',
			amount: 50000,
			status: 'Successful',
			userId: 2,
		},
	},
	{
		id: 2,
		date: {
			username: 'Kevwe Ovie',
			month: 'January',
			transactionType: 'Debit',
			amount: 10000,
			status: 'Not Successful',
			userId: 4,
		},
	},
	{
		id: 3,
		date: {
			username: 'Hashim Yakubu',
			month: 'January',
			transactionType: 'Credit',
			amount: 200000,
			status: 'Pending',
			userId: 3,
		},
	},
	{
		id: 4,
		date: {
			username: 'Gabriel Okoye',
			month: 'January',
			transactionType: 'Credit',
			amount: 30000,
			status: 'Successful',
			userId: 1,
		},
	},
	{
		id: 5,
		date: {
			username: 'Kevwe Ovie',
			month: 'February',
			transactionType: 'Debit',
			amount: 100000,
			status: 'Pending',
			userId: 4,
		},
	},
	{
		id: 6,
		date: {
			username: 'Gbenga Oluwole',
			month: 'February',
			transactionType: 'Credit',
			amount: 500000,
			status: 'Successful',
			userId: 2,
		},
	},
	{
		id: 7,
		date: {
			username: 'Gabriel Okoye',
			month: 'February',
			transactionType: 'Credit',
			amount: 3000000,
			status: 'Not Successful',
			userId: 1,
		},
	},
	{
		id: 8,
		date: {
			username: 'Hashim Yakubu',
			month: 'February',
			transactionType: 'Debit',
			amount: 40000,
			status: 'Pending',
			userId: 3,
		},
	},
	{
		id: 9,
		date: {
			username: 'Hashim Yakubu',
			month: 'March',
			transactionType: 'Credit',
			amount: 300000,
			status: 'Successful',
			userId: 3,
		},
	},
	{
		id: 10,
		date: {
			username: 'Gabriel Okoye',
			month: 'March',
			transactionType: 'Debit',
			amount: 150000,
			status: 'Pending',
			userId: 1,
		},
	},
	{
		id: 11,
		date: {
			username: 'Gbenga Oluwole',
			month: 'March',
			transactionType: 'Credit',
			amount: 5000,
			status: 'Successful',
			userId: 2,
		},
	},
	{
		id: 12,
		date: {
			username: 'Kevwe Ovie',
			month: 'March',
			transactionType: 'Credit',
			amount: 15000,
			status: 'Successful',
			userId: 4,
		},
	},
	{
		id: 13,
		date: {
			username: 'Gbenga Oluwole',
			month: 'April',
			transactionType: 'Debit',
			amount: 10000,
			status: 'Successful',
			userId: 2,
		},
	},
	{
		id: 14,
		date: {
			username: 'Hashim Yakubu',
			month: 'April',
			transactionType: 'Debit',
			amount: 40000,
			status: 'Successful',
			userId: 3,
		},
	},
	{
		id: 15,
		date: {
			username: 'Kevwe Ovie',
			month: 'April',
			transactionType: 'Credit',
			amount: 80000,
			status: 'Successful',
			userId: 4,
		},
	},
	{
		id: 16,
		date: {
			username: 'Gbenga Oluwole',
			month: 'April',
			transactionType: 'Credit',
			amount: 50000,
			status: 'Successful',
			userId: 2,
		},
	},
	{
		id: 17,
		date: {
			username: 'Kevwe Ovie',
			month: 'May',
			transactionType: 'Debit',
			amount: 5000,
			status: 'Pending',
			userId: 4,
		},
	},
	{
		id: 18,
		date: {
			username: 'Hashim Yakubu',
			month: 'May',
			transactionType: 'Credit',
			amount: 100000,
			status: 'Not Successful',
			userId: 3,
		},
	},
	{
		id: 19,
		date: {
			username: 'Gabriel Okoye',
			month: 'May',
			transactionType: 'Credit',
			amount: 60000,
			status: 'Pending',
			userId: 1,
		},
	},
	{
		id: 20,
		date: {
			username: 'Gabriel Okoye',
			month: 'May',
			transactionType: 'Credit',
			amount: 200000,
			status: 'Successful',
			userId: 1,
		},
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
		date: {
			type: new GraphQLObjectType({
				name: 'TransactionDate',
				description: 'This API represents the duration of transactions made',
				fields: () => ({
					username: { type: new GraphQLNonNull(GraphQLString) },
					month: { type: new GraphQLNonNull(GraphQLString) },
					transactionType: { type: new GraphQLNonNull(GraphQLString) },
					amount: { type: new GraphQLNonNull(GraphQLInt) },
					status: { type: new GraphQLNonNull(GraphQLString) },
					userId: { type: new GraphQLNonNull(GraphQLInt) },
				}),
			}),
		},
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

app.all('/*', function (req, res, next) {
	// CORS headers
	res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, PATCH, PUT, DELETE, OPTIONS'
	);
	// Set custom headers for CORS
	res.header(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers, save-path, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, X-Access-Token, X-Key'
	);
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.use(cors());

app.use(
	'/graphql',
	expressGraphQL({
		schema: schema,
		graphiql: true,
	})
);
app.listen(5000, () => console.log('Server Running'));
