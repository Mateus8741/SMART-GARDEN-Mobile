import React from 'react';

import { StyleSheet, View } from 'react-native';
import { colorWhite } from '../../UI/variaveis';

import * as ST from './styles';

export default function InputForm({ children, padding }) {
  return <ST.InputView padding={padding}>{children}</ST.InputView>;
}
