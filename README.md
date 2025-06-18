# api usage

## Testing

We use Cypress for end to end testing

### testing steps

The first step executed in any test is clear the test database and put seed data in
once this is done we can start executing our tests

### Running cypress

When you run the command npm run cypress:open for the first time in a new installation cypress will create all the configuration files necessary to run the tests
To run the test you must have the local server running on port 3000
cypress is not integrated to pipeline yet

## Authorization

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
