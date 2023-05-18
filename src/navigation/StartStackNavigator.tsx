import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
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
    try {
      const jsonValue = await AsyncStorage.getItem('@user_data');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (data.token) {
        navigation.navigate('Home');
      }
      return;
    } catch (e) {
      return;
    }
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
