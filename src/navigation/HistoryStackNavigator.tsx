import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import History from '../screens/History';

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

/**
 * HistoryStackNavigator component for the history stack navigation
 * @returns JSX.Element
 */
const HistoryStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={History} options={{...screenOptions}} />
    </Stack.Navigator>
  );
};

export default HistoryStackNavigator;
