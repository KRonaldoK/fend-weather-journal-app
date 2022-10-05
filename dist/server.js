"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require Express to run server and routes
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var reader_1 = __importDefault(require("./utilities/reader"));
var updater_1 = __importDefault(require("./utilities/updater"));
// Setup empty JS object to act as endpoint for all routes
// Start up an instance of app
var app = (0, express_1.default)();
var port = 3000;
//Here we are configuring express to use body-parser as middle-ware.
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Cors for cross origin allowance
app.use((0, cors_1.default)());
// Initialize the main project folder
app.use(express_1.default.static('dist/website'));
/* Middleware*/
app.get("/wj/getWeatherJournal", reader_1.default.getWeatherJournalData);
app.post("/wj/updateWeatherJournal", updater_1.default.updateWeatherJournalData);
// Setup Server
app.listen(port, function () {
    console.log("Http server set at port ".concat(port));
});
exports.default = app;
