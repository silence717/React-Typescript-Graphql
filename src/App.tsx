import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import './App.css';

import { Books } from './components'


const client = new ApolloClient({
  uri: 'http://localhost:1234/graphql',
  cache: new InMemoryCache()
});


function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>first graphql react app</h2>
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;
