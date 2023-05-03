import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

/**
 * SearchStackNavigator component for the search stack navigation
 * @returns JSX.Element
 */
const SearchStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{...screenOptions}} />
      <Stack.Screen name="Cart" component={Cart} options={{...screenOptions}} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
