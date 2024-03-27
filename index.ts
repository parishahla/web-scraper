import mongoose from "mongoose";
import dotenv from "dotenv";
import startBrowser from "./browser.ts";
import scraperController from "./page.controller.ts";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

//Start the browser and create a browser instance
let browserInstance = startBrowser();
// Pass the browser instance to the scraper controller
scraperController(browserInstance);
