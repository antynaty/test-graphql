const { ApolloServer, gql, PubSub } = require('apollo-server');

const typeDefs = gql`
  type Query{
    
  }
  type Mutation{

  }
`;

const resolvers = {
  Query: {

  },
  Mutation: {

  }
}


const pubsub = new PubSub();
const apolloserver = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res, pubsub }) });

apolloserver.listen().then(
  ({ url }) => console.log(`Server running at ${url}`)
);