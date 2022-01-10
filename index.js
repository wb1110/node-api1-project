const server = require('./api/server');


const port = 9000;

// START YOUR SERVER HERE


server.listen(port, () => {
    console.log('listening on port 9000')
})
// Add the code necessary in `index.js` and `api/server.js` to create a Web API and implement the following _endpoints_:

// | Method | URL            | Description                                                                                            |
// | ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
// | POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |
// | GET    | /api/users     | Returns an array users.                                                                                |
// | GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |
// | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |
// | PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |

// #### User Schema

