import React from 'react';

import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import * as Colors from '../../UI/variaveis';

export default function Input({
  placeholder,
  setValue,
  hidevalues,
  icon,
  handleAction,
  keyboardType,
}) {
  return (
    <>
      <TextInput
        style={style.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={Colors.colorGray}
        secureTextEntry={hidevalues}
        value={setValue}
      />
      {hidevalues === true ? (
        <TouchableOpacity onPress={handleAction}>
          <Ionicons
            style={{
              color: Colors.colorPrimary,
              paddingLeft: 10,
              fontSize: 25,
            }}
            name={icon ? 'eye-off' : 'eye'}
          />
        </TouchableOpacity>
      ) : null}
    </>
  );
}

export const style = StyleSheet.create({
  input: {
    width: '75%',
    marginLeft: 10,
    fontSize: 18,
  },
});
