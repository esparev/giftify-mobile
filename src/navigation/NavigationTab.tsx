import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import icon from '../styles/icon';

const homeActive = '../assets/icons/home-fill.png';
const homeInactive = '../assets/icons/home.png';
const searchActive = '../assets/icons/search-fill.png';
const searchInactive = '../assets/icons/search.png';
const historyActive = '../assets/icons/shopping-bag-fill.png';
const historyInactive = '../assets/icons/shopping-bag.png';

const screenOptions = {
  headerShown: false,
  tabBarStyle: { height: 72, paddingBottom: 12, paddingTop: 12 },
  tabBarLabelStyle: {fontFamily: 'Poppins-Regular', fontSize: 10},
};

const Tab = createBottomTabNavigator();

/**
 * NavigationTab component for the app entry point.
 */
const NavigationTab = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={HomeStackNavigator}
        options={{
          ...screenOptions,
          tabBarIcon: ({ focused }) => (
            <Image style={icon.size} source={focused ? require(homeActive) : require(homeInactive)} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchStackNavigator}
        options={{
          ...screenOptions,
          tabBarIcon: ({ focused }) => (
            <Image style={icon.size} source={focused ? require(searchActive) : require(searchInactive)} />
          ),
        }}
      />
      <Tab.Screen
        name="Historial"
        component={ProfileStackNavigator}
        options={{
          ...screenOptions,
          tabBarIcon: ({ focused }) => (
            <Image style={icon.size} source={focused ? require(historyActive) : require(historyInactive)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
