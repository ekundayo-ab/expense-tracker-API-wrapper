# Expense Tracker Server API Wrapper

An API Wrapper for the Expense Tracker Server.

### Installation
For now just clone (copy) and include the folder in your expense tracker server project, then you can reference it from the location you copied it into.

### Requirements
Get your token by logging into or registering on the expense tracker application using these routes. After logging in or registering, you should see a respones payload, copy the token value.
- e.g
```json
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

- Visit these routes on the expense tracker server to get the token like as described above.
- *REGISTER /api/register* with your `username`, `email` and `password`
- *POST /api/login* with your `username`, `password`

### Usage
- Ensure the wrapper is initialized with your token and track away!

```js
const ApiWrapper = require('./api-wrapper');

// url can be gotten after starting your expense tracker server
const ets = ApiWrapper.init('YOUR-TOKEN-KEY', 'http://localhost:8000');

const callingFunction = async () => {
  // Get all expenses
  const allExpenses = await ets.getAllExpenses()

  // Get a single expense
  const singleExpense = await ets.getExpense(expenseId)

  // Update an expense
  const updatedExpense = await ets.updateExpense(expenseId)

  // Delete an expense
  const deletedExpense = await ets.removeExpense(expenseId)
}
```
