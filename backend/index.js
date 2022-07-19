require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');


const { schema } = require('./models/schema');
const { Query } = require('./resolvers/Query');

const port = process.env.PORT || 5000;
const app = express();
const root = {
    Query
}

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue:Query,
    graphiql:true
}))

app.listen(port, function (){
    console.log('Server is running at ', port);
})