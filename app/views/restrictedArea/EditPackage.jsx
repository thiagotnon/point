import React from 'react';
import { css } from '../../assets/css/Css';

import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuRestrictedArea from '../../components/MenuRestrictedArea';


export default function EditPackage({ navigation }) {

  return (
    <View style={[css.container, css.containerTop]}>
      <MenuRestrictedArea title="Editar" navigation={navigation} />
    </View>
  );
}