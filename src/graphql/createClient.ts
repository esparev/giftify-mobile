import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const createClient = (token: string | undefined) => {
  const httpLink = createHttpLink({
    uri: 'https://giftify-api.up.railway.app/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : ``,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
};

export default createClient;
