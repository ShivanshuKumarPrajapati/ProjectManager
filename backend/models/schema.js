// import { buildSchema } from 'graphql';
const { buildSchema,GraphQLID } = require('graphql');
exports.schema = buildSchema(`
    type Client{
      id:ID
      name:String
      email:String
      phone:String
}

    type Project{
        id:ID
        name:String
        description:String
        status: String
        client:Client
    }

    type Query{
        hello:String
        client(id:ID):Client
        clients:[Client]
        project(id:ID):Project
        projects:[Project]
    }

`);