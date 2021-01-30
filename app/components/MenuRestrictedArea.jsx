import React from 'react';
import { css } from '../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MenuRestrictedArea(props) {
  async function logout() {
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
  }
  return (
    <View style={css.area__menu}>
      <TouchableOpacity style={css.button__home__page} onPress={() => props.navigation.navigate('Home')}>
        <Icon name="home" size={20} color="#FFF" />
      </TouchableOpacity>
      <Text style={css.area__title}>{props.title}</Text>
      <TouchableOpacity style={css.button__logout} onPress={() => logout()}>
        <Icon name="sign-out" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}