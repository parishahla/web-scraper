import fastify from "fastify";
import { WEBSITES_PER_CITY_HANLDER, FILTER_STAR_RANKING_HANDLER, } from "./aggregated.queries.js";
const fastifyServer = fastify();
export default function startFastify() {
    fastifyServer.listen({ port: 8080 }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
}
//Routes
//Number of submitted websites per city
fastifyServer.get("/:city", WEBSITES_PER_CITY_HANLDER);
//Websites grouped by their star ranking
fastifyServer.get("/stars", FILTER_STAR_RANKING_HANDLER);
