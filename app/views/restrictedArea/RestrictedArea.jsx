import React from 'react';
import { BackHandler, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Profile, EditPackage, RegisterPackage } from "../";

import { css } from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function RestrictedArea({ navigation }) {
  const [user, setUser] = React.useState(null);

  const Tab = createMaterialBottomTabNavigator();

  React.useEffect(() => {
    async function getUser() {
      const response = await AsyncStorage.getItem('userData');
      const json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  }, []);

  React.useEffect(() => {
    const backAction = () => {
      Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "Sim", onPress: () => {
            navigation.navigate('Home');
            BackHandler.exitApp();
          }
        }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Tab.Navigator
      activeColor='#fff'
      barStyle={css.area__tab}
    >
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon name="users" size={20} color='#0d3b74' />
          )
        }}
      />
      <Tab.Screen
        name="Pacotes"
        component={RegisterPackage}
        options={{
          tabBarIcon: () => (
            <Icon name="archive" size={20} color='#0d3b74' />
          )
        }}
      />
      <Tab.Screen
        name="Editar"
        component={EditPackage}
        options={{
          tabBarIcon: () => (
            <Icon name="edit" size={20} color='#0d3b74' />
          )
        }}
      />
    </Tab.Navigator >
  );
}