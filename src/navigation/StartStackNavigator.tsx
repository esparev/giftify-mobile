import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { getData } from '../storage';
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
  const navigation = useNavigation<StackNavigationProp<any>>();

  (async () => {
    const data = await getData();
    if (data.token) navigation.navigate('Home');
  })();

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
