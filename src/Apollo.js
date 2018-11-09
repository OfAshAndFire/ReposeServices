import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL
});

const authLink = setContext((_, context) => {
  const { headers } = context;
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN_SECRET);
  return {
    ...context,
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  };
});

export default new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  connectToDevTools: true,
  cache: new InMemoryCache()
});
