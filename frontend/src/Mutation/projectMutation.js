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

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      } 
  }
`; 

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: statusType!
  ) {
    updateProject(
      id:$id,
      input: {
        name: $name
        description: $description
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


export { ADD_PROJECT,DELETE_PROJECT ,UPDATE_PROJECT };