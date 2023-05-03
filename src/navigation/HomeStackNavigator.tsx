import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Gift from '../screens/Gift';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile/Profile';
import Settings from '../screens/Profile/Settings';
import HistoryStackNavigator from './HistoryStackNavigator';

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
      <Stack.Screen name="Historial" component={HistoryStackNavigator} options={{...screenOptions}} />
      <Stack.Screen name="Settings" component={Settings} options={{...screenOptions}} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
