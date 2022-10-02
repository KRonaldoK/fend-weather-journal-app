"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Setup empty JS object to act as endpoint for all routes
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
var port = 3000;
var projectData;
projectData = {};
// Require Express to run server and routes
// Start up an instance of app
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Cors for cross origin allowance
// Initialize the main project folder
app.use(express_1.default.static('website'));
// Setup Server
app.listen(port, function () {
    console.log("Http server set at port ".concat(port));
});
exports.default = app;
