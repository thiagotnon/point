import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function RestrictedArea() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function getUser() {
      const response = await AsyncStorage.getItem('userData');
      const json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  }, []);
  return (
    <View>
      <Text>Restricted Area</Text>
      <Text>Seja bem-vindo(a) {user}</Text>
    </View>
  );
}