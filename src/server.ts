// Setup empty JS object to act as endpoint for all routes
import express from "express"
import { Application, Request, Response } from "express"
import bodyParser from "body-parser"

const app: Application = express();
const port = 3000;

let projectData;
projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, () => {
  console.log(`Http server set at port ${port}`);
});

export default app;
