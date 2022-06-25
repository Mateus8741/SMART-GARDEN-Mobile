import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { colorWhite } from '../UI/variaveis';
import logo from '../../../assets/LogoBranca.png';

export default Logo = () => {
  return (
    <View style={style.circleLogo}>
      <Image style={style.logo} source={logo} />
    </View>
  );
};

export const style = StyleSheet.create({
  circleLogo: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 80,
    borderRadius: 100,
    borderColor: colorWhite,
    borderWidth: 3,
    borderStyle: 'solid',
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 15,
  },
});
