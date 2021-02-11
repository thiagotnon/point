import React from 'react';
import { css } from '../../assets/css/Css';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import MenuRestrictedArea from '../../components/MenuRestrictedArea';

import config from '../../config/config';
import { response } from 'express';



export default function EditPackage({ navigation }) {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);
  const [displayQR, setDisplayQR] = React.useState('flex');
  const [displayForm, setDisplayForm] = React.useState('none');
  const [code, setCode] = React.useState(null);
  const [product, setProduct] = React.useState(null);
  const [localization, setLocalization] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  //Leitura do código QR
  async function handleBarCodeScanned({ type, data }) {
    setScanned(true);
    setDisplayQR('none')
    setDisplayForm('flex')
    setCode(data)
    await searchProduct(data)
  }

  async function searchProduct(cod) {
    let responde = await fetch(config.urlRoot + 'searchProduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: cod,
      })
    });
    let json = await response.json()
    setProduct(json.Products[0].name)
  }

  async function sendForm() {

  }

  return (
    <View style={[css.container, css.containerTop]}>
      <MenuRestrictedArea title="Editar" navigation={navigation} />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : value => handleBarCodeScanned(value)}
        style={css.qr__code(displayQR)}
      />
      <View style={css.qr__form(displayForm)}>

        <View style={css.container__form__profile}>
          <Text>Código do produto: {code}</Text>
          <TextInput
            style={css.profile__input}
            placeholder='Nome do Produto:'
            onChangeText={text => setProduct(text)}
            value={product}
          />

          <TextInput
            style={css.profile__input}
            placeholder='Localização do Produto:'
            onChangeText={text => setLocalization(text)}
            value={localization}
          />
        </View>


      </View>
      <TouchableOpacity style={css.profile__button} onPress={() => sendForm()}>
        <Text style={css.profile__buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}