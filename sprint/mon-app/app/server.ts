// Import everything from express and assign it to the express variable
import express = require('express');
// this only worked for me with JS instead of TS ?
import * as bodyParser from 'body-parser';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;



// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
