import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "../model/info.graphql.js";
import Info from "../model/info.schema.js";

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
    filter: async (_: any, { filter }) => {
      return await Info.find(filter).catch((err) => console.error(err));
    },
    filterByCity: async (_: any, { city }) => {
      return await Info.find({ city }).catch((err) => console.error(err));
    },
    filterByName: async (_: any, { name }) => {
      return await Info.find({ name }).catch((err) => console.error(err));
    },
    filterByDomain: async (_: any, { domain }) => {
      return await Info.find({ domain }).catch((err) => console.error(err));
    },
    filterByExpiration: async (_: any, { expirationDate }) => {
      return await Info.find({ expirationDate }).catch((err) =>
        console.error(err)
      );
    },
  },
};

// Start Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startGraphQL(port: number) {
  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });
  return url;
}

export default startGraphQL;
