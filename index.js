import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolver'

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',  // Import the schema by this.
  resolvers,
})

server.start(() => {
  // localhost:4000 goes to graphQL playground.
  console.log('GraphQL server started in http://localhost:4000')
})

// Schema: graphQL 에서 주고 받을 데이터를 describe 하는 것. mongoose model 같은건가?
// Query: The data I want. POST, always
// Mutation: How I process the data in specific way? POST, always