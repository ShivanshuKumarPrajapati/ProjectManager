import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Header from "./component/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Project from "./Pages/Project";

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
        <Router>
          <Header/>
             <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
    
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
