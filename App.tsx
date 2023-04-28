import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';
import appTheme from './src/styles/appTheme';
import color from './src/styles/color';

/**
 * App component for the app entry point
 * @returns JSX.Element
 */
const App = (): JSX.Element => {
  return (
    <>
      <StatusBar backgroundColor={color.background} barStyle="light-content" />

      <NavigationContainer theme={appTheme}>
        <NavigationTab />
      </NavigationContainer>
    </>
  );
};

export default App;
