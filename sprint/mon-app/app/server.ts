// Import everything from express and assign it to the express variable
import express = require('express');
// this only worked for me with JS instead of TS ?
import * as bodyParser from 'body-parser';

// Import the mongoose module
const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));





// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;



// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
