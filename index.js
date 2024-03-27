"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var browser_ts_1 = require("./browser.ts");
var page_controller_ts_1 = require("./page.controller.ts");
dotenv_1.default.config();
mongoose_1.default
    .connect(process.env.MONGO)
    .then(function () {
    console.log("Connected to MongoDB");
})
    .catch(function (err) { return console.error(err); });
//Start the browser and create a browser instance
var browserInstance = (0, browser_ts_1.default)();
// Pass the browser instance to the scraper controller
(0, page_controller_ts_1.default)(browserInstance);
