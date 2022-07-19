// import { buildSchema } from 'graphql';
const { buildSchema,GraphQLID } = require('graphql');
exports.schema = buildSchema(`
    type Client{
      id:ID
      name:String
      email:String
      phone:String
}

    type Query{
        hello:String
        client(id:ID):Client
    }

`);