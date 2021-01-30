import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

import config from '../../config/config';

import MenuRestrictedArea from '../../components/MenuRestrictedArea';

import { css } from '../../assets/css/Css';

export default function RegisterPackage({ navigation }) {

  const address = config.urlRoot;
  const [code, setCode] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [product, setProduct] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    getUser();
  }, []);

  React.useEffect(() => {
    randomCode();
    setProduct(null);
  }, [response]);

  async function getUser() {
    const userData = await AsyncStorage.getItem('userData');
    const json = JSON.parse(userData);
    setUser(json.id);
  }

  //Generate random code
  async function randomCode() {
    let result = '';
    let length = 20;
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    setCode(result);
  }

  //Send form
  async function sendForm() {
    const response = await fetch(`${config.urlRoot}create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: user,
        code: code,
        product: product,
        local: address,
      })
    });
    let json = await response.json()
    setResponse(json);
  }

  //Share QRCode
  async function shareQR() {
    const image = config.urlRoot + 'img/code.png';
    FileSystem.downloadAsync(
      image,
      FileSystem.documentDirectory + '.png'
    ).then(({ uri }) => {
      Sharing.shareAsync(uri);
    });
    await Sharing.shareAsync();
  }


  return (
    <View style={[css.container, css.containerTop]}>
      <MenuRestrictedArea title='Cadastro' navigation={navigation} />
      {response && (
        <View>
          <Image source={{ uri: response, height: 190, width: 180 }} />
          <Button style={css.share__button} title="compartilhar" onPress={() => shareQR()} />
        </View>
      )}
      <View style={css.container__form__profile}>
        <TextInput
          style={css.profile__input}
          placeholder='Nome do Produto:'
          onChangeText={text => setProduct(text)}
          value={product}
        />
      </View>
      <TouchableOpacity style={css.profile__button} onPress={() => sendForm()}>
        <Text style={css.profile__buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}