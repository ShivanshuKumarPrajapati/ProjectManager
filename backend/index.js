require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const { mongoose } = require('mongoose');


//mongoose model
const Client_model = require('./models/Client');
const Project_model = require('./models/Project');


const { typeDefs } = require("./models/schema");
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');
const { Project } = require('./resolvers/Project');



const port = process.env.PORT || 8000;
const app = express();
const url = process.env.DB_URI;

mongoose.connect(url)
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.log(err));

app.use(cors());


let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
      resolvers: {
          Query,
          Mutation,
          Project
      },
      context: {
          Client_model,
          Project_model
      }
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/" });
}
startServer();


app.listen(port, function (){
    console.log('Server is running at ', port);
})