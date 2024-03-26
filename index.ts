import startBrowser from "./browser";
import scraperController from "./page.controller";

//Start the browser and create a browser instance
let browserInstance = startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance);
