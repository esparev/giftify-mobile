import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import StartStackNavigator from './src/navigation/StartStackNavigator';
import appTheme from './src/styles/appTheme';
import color from './src/styles/color';

const client = new ApolloClient({
  uri: 'https://giftify-api.up.railway.app/graphql',
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
          <StartStackNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
};

export default App;
