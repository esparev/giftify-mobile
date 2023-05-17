import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import NavigationTab from './NavigationTab';

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

/**
 * StartStackNavigator component for the get auth stack navigation
 */
const StartStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Get Started" component={GetStarted} options={{...screenOptions}} />
      <Stack.Screen name="Login" component={Login} options={{...screenOptions}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{...screenOptions}} />
      <Stack.Screen name="Home" component={NavigationTab} options={{...screenOptions}} />
    </Stack.Navigator>
  );
};

export default StartStackNavigator;
