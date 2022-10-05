// Require Express to run server and routes
import express from "express"
import { Application} from "express"

import bodyParser from "body-parser"
import cors from 'cors'

import reader from "./utilities/reader"
import updater from "./utilities/updater"

// Setup empty JS object to act as endpoint for all routes

// Start up an instance of app
const app: Application = express()
const port = 3000

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
app.use(cors())

// Initialize the main project folder
app.use(express.static('dist/website'))

/* Middleware*/
app.get(
  "/wj/getWeatherJournal",
  reader.getWeatherJournalData
)

app.post(
  "/wj/updateWeatherJournal",
  updater.updateWeatherJournalData
)

// Setup Server
app.listen(port, () => {
  console.log(`Http server set at port ${port}`)
});

export default app
