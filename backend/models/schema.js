const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Client {
    id: ID
    name: String
    email: String
    phone: String
  }

  type Project {
    id: ID
    name: String
    description: String
    status: String
    client(id: ID): Client
  }

  type Query {
    client(id: ID): Client
    clients: [Client]
    project(id: ID): Project
    projects: [Project]
  }

  type Mutation {
    addClient(input: ClientInput): Client
  }

  input ClientInput {
    name: String!
    email: String!
    phone: String!
  }
`;