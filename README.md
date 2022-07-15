# Overview

In this engineering challenge, I mocked a fake GraphQL API data using express GraphQL.
I then used Apollo Client to query the data in my React App.

## React App

In my React app, I created a hooks directory where I used a custom hook to query my data to avoid redundancies and repetition of the exact same query in my application. Also, the custom hook can be reused anywhere I want in my application.

My app displays a transaction summary of four users, from January to May.
