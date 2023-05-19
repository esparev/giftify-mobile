import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StartStackNavigator from './src/navigation/StartStackNavigator';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client'; // prettier-ignore
import createClient from './src/graphql/createClient';
import { AuthProvider } from './src/context/AuthContext';
import { getData } from './src/storage';
import appTheme from './src/styles/appTheme';
import color from './src/styles/color';

let client: ApolloClient<NormalizedCacheObject>;

(async () => {
  const data = await getData();
  const token = data.token;
  client = createClient(token);
})();

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
