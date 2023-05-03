import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Gift from '../screens/Gift';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

/**
 * HomeStackNavigator component for the home stack navigation
 * @returns JSX.Element
 */
const HomeStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{...screenOptions}} />
      <Stack.Screen name="Gift" component={Gift} options={{...screenOptions}} />
      <Stack.Screen name="Cart" component={Cart} options={{...screenOptions}} />
      <Stack.Screen name="Profile" component={Profile} options={{...screenOptions}} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
