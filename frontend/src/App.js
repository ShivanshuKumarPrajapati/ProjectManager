import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Header from "./component/Header";
import Client from "./component/Client";
import AddCleint from "./component/AddClient";

//to handle cache data
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache
})


function App() {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
      <Header/>
      <div className="container">
        <AddCleint/>
          <Client />
      </div>
    
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
