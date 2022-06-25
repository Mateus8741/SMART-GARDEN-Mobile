import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Colors from '~/components/UI/variaveis';

export default function Select({ items }) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={pickerSelectStyles.container}>
      <Picker
        style={pickerSelectStyles.input}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        {items.map((item) => (
          <Picker.Item key={item.id} label={item.nome} value={item.nome} />
        ))}
      </Picker>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.colorWhite,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    height: 35,
  },

  input: {
    fontSize: 16,
    color: Colors.colorBlack,
  },
});
