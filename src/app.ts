import startBrowser from "./browser.ts";
import scraperController from "./page.controller.ts";

//Start the browser and create a browser instance
let browserInstance = startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance);
