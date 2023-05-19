import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StartStackNavigator from './src/navigation/StartStackNavigator';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'; // prettier-ignore
import { setContext } from '@apollo/client/link/context';
import { AuthProvider } from './src/context/AuthContext';
import { getData } from './src/storage';
import appTheme from './src/styles/appTheme';
import color from './src/styles/color';

let token: string | undefined;

(async () => {
  const data = await getData();
  token = data.token;
})();

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

/**
 * App component for the app entry point
 */
const App = (): JSX.Element => {
  return (
    <>
      <StatusBar backgroundColor={color.background} barStyle="light-content" />

      <ApolloProvider client={client}>
        <NavigationContainer theme={appTheme}>
          <AuthProvider>
            <StartStackNavigator />
          </AuthProvider>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
};

export default App;
