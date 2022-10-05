"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* Global Variables */
var OPEN_WEATHER_MAP_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
var OPEN_WEATHER_MAP_API_KEY = "4917d53e0c5752fc9a9bf1b098f3aa3a";
/* OpenWeatherMapApi */
var getWeatherFromOpenWeatherMapApi = function (zipCode) { return __awaiter(void 0, void 0, void 0, function () {
    var url, result, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                url = "".concat(OPEN_WEATHER_MAP_BASE_URL, "zip=").concat(zipCode, "&appid=").concat(OPEN_WEATHER_MAP_API_KEY);
                return [4 /*yield*/, fetch(url)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, result.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
            case 3:
                error_1 = _a.sent();
                console.log("error", error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateWeatherJournal = function (newData) { return __awaiter(void 0, void 0, void 0, function () {
    var response, updateResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('/wj/updateWeatherJournal', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newData)
                })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()
                    //console.log(updateResponse)
                ];
            case 2:
                updateResponse = _a.sent();
                //console.log(updateResponse)
                return [2 /*return*/, updateResponse];
        }
    });
}); };
var getWeatherJournal = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, newWeather;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('/wj/getWeatherJournal')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()
                    //console.log(newWeather);
                ];
            case 2:
                newWeather = _a.sent();
                //console.log(newWeather);
                return [2 /*return*/, newWeather];
        }
    });
}); };
var updateView = function (weatherJournal) {
    document.getElementById('date').innerHTML = weatherJournal.date;
    document.getElementById('temp').innerHTML = 'Celsius: ' + Math.round(Number(weatherJournal.temperature) - 273.15).toFixed(1) + 'ºC <br><br> ' + 'Fahrenheit: ' + (Math.round(Number(weatherJournal.temperature) - 273.15) * 9 / 5 + 32).toFixed(1) + 'ºF';
    document.getElementById('content').innerHTML = weatherJournal.content;
};
var buildNewWeatherInfo = function (data, feelings) {
    // Create a new date instance dynamically with JS
    var d = new Date();
    var today = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
    var weatherJournalData = { date: today, temp: data.main.temp, content: feelings };
    //console.log(JSON.stringify(weatherJournalData))
    return weatherJournalData;
};
var weatherAction = function () { return __awaiter(void 0, void 0, void 0, function () {
    var zipCode, feelings, weatherData, newWeatherInfo, weatherJournal, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                zipCode = document.getElementById('zip').value;
                feelings = document.getElementById('feelings').value;
                if (zipCode === '' || zipCode === null || zipCode === ' ') {
                    alert('Insert a valid zip code');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, getWeatherFromOpenWeatherMapApi(parseInt(zipCode))];
            case 2:
                weatherData = _a.sent();
                newWeatherInfo = buildNewWeatherInfo(weatherData, feelings);
                return [4 /*yield*/, updateWeatherJournal(newWeatherInfo)];
            case 3:
                _a.sent();
                return [4 /*yield*/, getWeatherJournal()];
            case 4:
                weatherJournal = _a.sent();
                updateView(weatherJournal);
                return [3 /*break*/, 6];
            case 5:
                error_2 = _a.sent();
                console.log('ERROR: ', error_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
// Event listener
document.getElementById('generate').addEventListener('click', weatherAction);
