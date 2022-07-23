import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Header from "./component/Header";
import Client from "./component/Client";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache:new InMemoryCache(),
})


function App() {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
      <Header/>
      <div className="container">
        <Client/>
      </div>
    
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
