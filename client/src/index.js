import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Query } from 'react-apollo';


const httpLink = new HttpLink({
  uri: 'http://localhost/graph-api',
  headers: {
    Authorization: `bearer dxzytbwPIkHj5iYVXOknCKou9dc-XN65D6mfhgg7iUrnhfUpF_b1iwO1FizVYSJj`,
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root'));
registerServiceWorker();
