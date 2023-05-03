import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';
import History from '../screens/History';

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

/**
 * ProfileStackNavigator component for the profile stack navigation
 * @returns JSX.Element
 */
const ProfileStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{...screenOptions}} />
      <Stack.Screen name="History" component={History} options={{...screenOptions}} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
