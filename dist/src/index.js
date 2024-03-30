import startBrowser from "./browser.js";
import scraperController from "./page.controller.js";
import graphqlServer from "./graphql.server.js";
import startDB from "./database.js";
import startFastify from "./server.js";
import fastify from "fastify";
const fastifyServer = fastify();
//* Connect to MongoDB
startDB();
//* Start the server
startFastify();
//* Start the browser and create a browser instance
let browserInstance = startBrowser();
scraperController(browserInstance);
//* GraphQL
try {
    const url = await graphqlServer(4000);
    console.log(`Apollo server listening on ${url}`);
}
catch (err) {
    console.error(err);
}
