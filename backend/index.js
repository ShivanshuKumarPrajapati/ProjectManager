require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { mongoose } = require('mongoose');


const { schema } = require('./models/schema');
const { Query } = require('./resolvers/Query');

const port = process.env.PORT || 5000;
const app = express();
const root = Query
const url = process.env.DB_URI;

mongoose.connect(url)
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.log(err));

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue:root,
    graphiql:true
}))

app.listen(port, function (){
    console.log('Server is running at ', port);
})