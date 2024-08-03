# Bank of Flatiron

Welcome to the Bank of Flatiron, where you can trust us with all your financial data!

## Instructions

For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

## Topics tested in this Code Challenge:

- Working with state using the `useState` hook
- Effects in React using the `useEffect` hook
- Rendering and re-rendering in React
- React Events
- Working with forms and inputs in React
- Consuming APIs/Communicating with a server in React.
- CRUD operations in React.

## Endpoints

**The data to be used is in the `db.json` file inside this repo. Copy this data and paste in into your own `db.json` file in the root of your project.**

If using `Create React App`, ensure you run the JSON Server first before running the `npm start`.
This is because both Create React App and JSON server run on port 3000 by default. However, React's local server can find another server to run on if at the time of starting it, it finds port 3000 already taken by JSON Server.

## Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new transaction to the table **as well as post the new transaction to the backend API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

NB: **Deploy both your frontend and the `db.json` once you are done and ensure to change the URL you're fetching from to the deployed backend. Undeployed work will not be graded.**

### Endpoints for Core Deliverables

#### GET /transactions

Example Response:

```json
[
	{
		"id": 1,
		"date": "2019-12-01",
		"description": "Paycheck from Bob's Burgers",
		"category": "Income",
		"amount": 1000
	},
	{
		"id": 2,
		"date": "2019-12-01",
		"description": "South by Southwest Quinoa Bowl at Fresh & Co",
		"category": "Food",
		"amount": -10.55
	}
]
```

#### POST `/transactions`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
```

Example Response:

```json
{
	"id": 1,
	"date": "2019-12-01",
	"description": "Paycheck from Bob's Burgers",
	"category": "Income",
	"amount": 1000
}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

- Sort transactions alphabetically by category or description.
- Delete a transaction which will remove it from the table and delete it from the backend.

### Endpoints for Advanced Deliverables

#### DELETE /transactions/:id

Example Response:

```json
{}
```
