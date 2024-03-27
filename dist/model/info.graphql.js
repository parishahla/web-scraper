export const typeDefs = `#graphql 
    type Info {
        name: String,
        domain: String,
        city: String,
        stars: Int,
        expirationDate: String,
    }
    type Query {
        info: [Info]
    }
`;
