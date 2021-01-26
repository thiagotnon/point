import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { css } from '../assets/css/Css';

export default function Home(props) {
  return (
    <View style={css.containerFlexRow}>
      <TouchableOpacity
        style={css.button__home}
        onPress={() => props.navigation.navigate('Login', { id: 30 })}
      >
        <Image
          style={css.buttonIcon}
          source={require('../assets/img/iconLogin.png')}
        />
        <Text>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={css.button__home}
        onPress={() => props.navigation.navigate('Tracking', { id: 30 })}
      >
        <Image
          style={css.buttonIcon}
          source={require('../assets/img/iconFind.png')}
        />
        <Text>Rastrear</Text>
      </TouchableOpacity>
    </View>
  );
}