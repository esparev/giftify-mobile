import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextProps } from '../@types';

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    return data;
  } catch (e) {
    return;
  }
};

export const storeData = async (value: AuthContextProps) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@user_data', jsonValue);
  } catch (e) {}
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@user_data');
  } catch (e) {
    return;
  }
};
