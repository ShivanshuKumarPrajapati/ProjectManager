import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $clientId: ID!
    $status: statusType!
  ) {
    addProject(
      input: {
        name: $name
        description: $description
        clientId: $clientId
        status: $status
      }
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { ADD_PROJECT };