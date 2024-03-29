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
            }
            catch (error) {
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
async function startGraphQL(port) {
    const { url } = await startStandaloneServer(server, {
        listen: { port: port },
    });
    return url;
}
export default startGraphQL;
