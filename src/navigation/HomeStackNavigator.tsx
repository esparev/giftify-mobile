import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Gift from '../screens/Gift';

const Stack = createStackNavigator();

/**
 * HomeStackNavigator component for the home stack navigation
 * @returns JSX.Element
 */
const HomeStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gift"
        component={Gift}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
