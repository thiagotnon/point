import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert, Button, Text, View } from 'react-native';

import { css } from './assets/css/Css'
import { Home, Login, Tracking } from "./views";
import RestrictedArea from './views/restrictedArea/RestrictedArea';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'point',
              headerStyle: { backgroundColor: '#2680eb' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }
            }}
          />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Tracking" component={Tracking} />
          <Stack.Screen name="RestrictedArea" component={RestrictedArea} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>


  );
}


