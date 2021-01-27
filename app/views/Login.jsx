import React from 'react';
import { KeyboardAvoidingView, Image, View, Text, Platform } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { css } from '../assets/css/Css';

export default function Login({ navigation }) {
  const [display, setDisplay] = React.useState('none');
  const [user, setUser] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [login, setLogin] = React.useState(null);

  //Send login form
  async function sendForm() {
    const response = await fetch('http://192.168.1.188:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user,
        password: password
      })
    });

    const json = await response.json();
    if (json === 'error') {
      setDisplay('flex');
      setTimeout(() => {
        setDisplay('none')
      }, 5000);
      await AsyncStorage.clear();
    } else {
      await AsyncStorage.setItem('userData', JSON.stringify(json));
      navigation.navigate('RestrictedArea');

    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[css.container, css.pointBg]}>
      <View>
        <Image style={css.login__logo} source={require('../assets/img/logo.png')} />
      </View>
      <View>
        <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>
      </View>
      <View style={css.login__form}>
        <TextInput style={css.login__input} placeholder='Usuário' onChangeText={text => setUser(text)} />
        <TextInput style={css.login__input} placeholder='Senha' onChangeText={text => setPassword(text)} secureTextEntry={true} />
        <TouchableOpacity style={css.login__button} onPress={() => sendForm()}>
          <Text style={css.login__buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}