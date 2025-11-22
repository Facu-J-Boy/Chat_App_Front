import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { API_URL } from '.';
import { getAccessToken } from '../utils/tokenStorage';

const httpLink = new HttpLink({
  uri: `http://${API_URL}/graphql`,
});

// WebSocket (graphql-ws)
const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://${API_URL}/graphql`,
    connectionParams: async () => {
      const token = await getAccessToken();
      return {
        authorization: `Bearer ${token}`,
      };
    },
    retryAttempts: Infinity,
    retryWait: async () =>
      new Promise((res) => setTimeout(res, 1500)),
  })
);

// Split transport
const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return (
      def.kind === 'OperationDefinition' &&
      def.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
