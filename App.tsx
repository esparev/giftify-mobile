import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StartStackNavigator from './src/navigation/StartStackNavigator';
import appTheme from './src/styles/appTheme';
import color from './src/styles/color';

/**
 * App component for the app entry point
 */
const App = (): JSX.Element => {
  return (
    <>
      <StatusBar backgroundColor={color.background} barStyle="light-content" />

      <NavigationContainer theme={appTheme}>
        <StartStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
