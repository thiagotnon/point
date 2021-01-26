import React from 'react';
import { KeyboardAvoidingView, Image, View, Text, Platform } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { css } from '../assets/css/Css';

export default function Login() {
  const [display, setDisplay] = React.useState('none');

  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[css.container, css.pointBg]}>
      <View>
        <Image style={css.login__logo} source={require('../assets/img/logo.png')} />
      </View>
      <View>
        <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>
      </View>
      <View style={css.login__form}>
        <TextInput style={css.login__input} placeholder='Usuário' />
        <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true} />
        <TouchableOpacity style={css.login__button} onPress={() => setDisplay('flex')}>
          <Text style={css.login__buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}