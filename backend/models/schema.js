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

  enum statusType {
    new
    progress
    completed
  }

  type Query {
    client(id: ID!): Client
    clients: [Client]
    project(id: ID!): Project
    projects: [Project]
  }

  type Mutation {
    addClient(input: ClientInput): Client
    deleteClient(id: ID!): String
    addProject(input: ProjectInput): Project
    deleteProject(id: ID!): String
    updateProject(id: ID!, input: updateProjectInput): Project
  }

  input ClientInput {
    name: String!
    email: String!
    phone: String!
  }

  input ProjectInput {
    name: String!
    description: String!
    status: statusType!
    clientId: ID!
  }

  input updateProjectInput {
    name: String!
    description: String!
    status: statusType!
    clientId: ID!
  }
`;