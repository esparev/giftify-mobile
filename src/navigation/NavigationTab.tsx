import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

const Tab = createBottomTabNavigator();

/**
 * NavigationTab component for the app entry point.
 */
const NavigationTab = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeStackNavigator} options={{headerShown: false}} />
      <Tab.Screen name="Buscar" component={SearchStackNavigator} options={{headerShown: false}} />
      <Tab.Screen name="Historial" component={ProfileStackNavigator} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
