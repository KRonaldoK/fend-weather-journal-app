"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projectData_1 = require("../data/projectData");
var updateWeatherJournalData = function (req, res, next) {
    //console.log(req.body)
    projectData_1.projectData.date = req.body.date;
    projectData_1.projectData.temperature = req.body.temp;
    projectData_1.projectData.content = req.body.content;
    res.send(projectData_1.projectData);
};
exports.default = {
    updateWeatherJournalData: updateWeatherJournalData
};
