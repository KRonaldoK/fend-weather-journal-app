"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projectData_1 = require("../data/projectData");
var getWeatherJournalData = function (req, res, next) {
    res.send(projectData_1.projectData);
};
exports.default = {
    getWeatherJournalData: getWeatherJournalData
};
