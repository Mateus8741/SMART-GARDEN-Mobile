import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { colorWhite } from '../UI/variaveis';
import { RFValue } from 'react-native-responsive-fontsize';

export default Link = ({ children, style, to }) => {
  const navigation = useNavigation();

  return (
    <Text
      onPress={() => navigation.navigate(to)}
      style={[styles.textContent, style]}
    >
      {children}
    </Text>
  );
};

export const styles = StyleSheet.create({
  textContent: {
    marginTop: 20,
    fontSize: RFValue(14),
    color: colorWhite,
    textDecorationLine: 'none',
    fontWeight: 'bold',
  },
});
