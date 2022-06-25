import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import bg from '../../../assets/background01.jpg';

export default Background = ({ children }) => {
  return (
    <ImageBackground source={bg} resizeMode="cover" style={style.bg}>
      {children}
    </ImageBackground>
  );
};

export const style = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
