import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../../assets/css/Css';
import MenuRestrictedArea from '../../components/MenuRestrictedArea';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import config from '../../config/config';


export default function Profile({ navigation }) {
  const [userId, setUserId] = React.useState(null);
  const [oldPassword, setOldPassword] = React.useState(null);
  const [newPassword, setNewPassword] = React.useState(null);
  const [confirmPassword, setConfirmPassword] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [displaySuccess, setDisplaySuccess] = React.useState('none');
  const [displayError, setDisplayError] = React.useState('none');

  React.useEffect(() => {
    async function getUserId() {
      const userData = await AsyncStorage.getItem('userData');
      const json = JSON.parse(userData);
      setUserId(json.id);
    }
    getUserId();
  }, []);

  async function sendForm() {
    let response = await fetch(`${config.urlRoot}verifyPass`, {
      method: 'POST',
      body: JSON.stringify({
        id: userId,
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    if (json === 'Senha atualizada com sucesso!') {
      setMessage(json);
      setDisplayError('none');
      setDisplaySuccess('flex');
      setTimeout(() => {
        setDisplaySuccess('none');
        navigation.navigate('Home');
      }, 2000);

    } else {
      setDisplayError('flex');
      setMessage(json);
    }

  }

  return (
    <View style={[css.container, css.containerTop]}>
      <MenuRestrictedArea title="Perfil" navigation={navigation} />
      <View style={css.container__form__profile}>
        <Text style={css.profile__error__msg(displayError)}>{message}</Text>
        <Text style={css.profile__success__msg(displaySuccess)}>{message}</Text>
        <TextInput style={css.profile__input} placeholder="Senha atual" onChangeText={text => setOldPassword(text)} />
        <TextInput style={css.profile__input} placeholder="Nova senha" onChangeText={text => setNewPassword(text)} />
        <TextInput style={css.profile__input} placeholder="Confirmação a senha" onChangeText={text => setConfirmPassword(text)} />
        <TouchableOpacity style={css.profile__button} onPress={() => sendForm()}>
          <Text style={css.profile__buttonText}>Confirmar!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}