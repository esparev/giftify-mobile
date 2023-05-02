import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';

const Stack = createStackNavigator();

/**
 * SearchStackNavigator component for the search stack navigation
 * @returns JSX.Element
 */
const SearchStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
