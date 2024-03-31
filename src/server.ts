import fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";
import { request as graphqlRequest, gql } from "graphql-request";
import convertToCSV from "./convertToCSV.js";
import {
  WEBSITES_PER_CITY_HANLDER,
  FILTER_STAR_RANKING_HANDLER,
} from "./aggregated.queries.js";

const fastifyServer = fastify();

//Routes
//Number of submitted websites per city
fastifyServer.get("/:city", WEBSITES_PER_CITY_HANLDER);

//Websites grouped by their star ranking
fastifyServer.get("/stars", FILTER_STAR_RANKING_HANDLER);

interface QueryString {
  fields: string;
}

interface ObjectProperty {
  info: object;
}

fastifyServer.get(
  "/v1/export-csv",
  async (request: FastifyRequest, reply: FastifyReply) => {
    const queryParams = request.query as QueryString;
    const fieldsArray = queryParams.fields.split(",");

    const query = gql`
      query Search {
        info {
            ${[...fieldsArray]}
        }
      }
    `;

    const data: ObjectProperty = await graphqlRequest(
      "http://localhost:4000/graphql",
      query
    );

    const csv = convertToCSV(data.info);

    reply.header("Content-Type", "text/csv");
    reply.header("Content-Disposition", 'attachment; filename="data.csv"');
    reply.send(csv);
  }
);

export default function startFastify() {
  fastifyServer.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });
}
