# page login

the root page contains the login form
to log into test env use this credentials

username: 'jon'
password:'masterPassword'

## pages

- create user: creates a new user
- dailyupdate; form to create/update standup
- summary: weekly summary of all user standups
- teamview: list of the last standup by each user
- historyview: list of every standup, can be filtered by date and user

## Testing

We use Cypress for end to end testing

### Seeding data

The first step executed in any test is clear the test database and put seed data in
once this is done we can start executing our tests

The seed endpoint is disabled in production
see cypress/support/commands.js to see

### Running cypress

When you run the command npm run cypress:open for the first time in a new installation cypress will create all the configuration files necessary to run the tests
To run the test you must have the local server running on port 3000
cypress is not integrated to pipeline yet

## API Authorization

This application uses next auth for pages and JSON web tokens for the api

To get token send a POST request to this endpoint

```
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: {"username":"yourusername", "password:'"yourpassword"},
  redirect: 'follow'
};

fetch("http://localhost:3000/api/getToken", requestOptions)
```

To seed testdatabase with test data run call the following endpoint

```
fetch("http://localhost:3000/api/seed")
```

## Future work on technical debt

Due to the limited time we had to implement this project we did not define types as we prioritized features
we will define the types properly in a future release

the seed endpoint
