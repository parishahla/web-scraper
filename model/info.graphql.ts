export const typeDefs = `#graphql 
    type Info {
        name: String,
        domain: String,
        province: String,
        city: String,
        stars: Int,
        certifiedDate: String,
        expirationDate: String,
    }
    input userInput {
        name: String,
        domain: String,
        stars: Int,
        expirationDate: String,
    }
    type Query {
        info: [Info],
        filter(filter: userInput): [Info],
        filterByCity(city: String!): [Info],
        filterByName(name: String!): [Info],
        filterByDomain(domain: String!): [Info],
        filterByExpiration(expirationDate: String!): [Info],
    }
`;
