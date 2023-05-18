import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    return data;
  } catch (e) {
    return;
  }
};

export default getData;
