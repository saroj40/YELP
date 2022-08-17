// It is the entry point for Backend Application.
// It is responsible for creating and initializing Express App.
// Actually it is starting up and listening up to the port that defined

// dotnev is import at top as it has to start before other thing start
require("dotenv").config();
// middleware morgan 
const morgan = require("morgan");
//importing express
const express = require("express");

// creating the instance of express app
const app = express();
const db =  require('./db');

// express middleware
app.use(morgan("dev"))
app.use(express.json());

// Routes Setup
app.use('/api/v1/restaurants',require('./routes/restaurants'));

const port = process.env.PORT || 4001;

//Application should listen to the following port
// app.listen(port,callback)
app.listen(port, () => {
  console.log(`Application is up and listening to the port ${port}`);
});
