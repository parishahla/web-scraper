import mongoose from "mongoose";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import startBrowser from "./browser.js";
import scraperController from "./page.controller.js";
import { typeDefs } from "../model/info.graphql.js";
import Info from "../model/info.schema.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO!)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

//Start the browser and create a browser instance
let browserInstance = startBrowser();
// Pass the browser instance to the scraper controller
scraperController(browserInstance);

//GraphQL
const resolvers = {
  Query: {
    info: async () => {
      try {
        const items = await Info.find();
        return items.map((item) => item.toObject());
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
};

// Start Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(url);