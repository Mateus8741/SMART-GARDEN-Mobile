import React from 'react';
import * as ST from './styles';

export default function InputForm({ children, padding }) {
  return <ST.InputView padding={padding}>{children}</ST.InputView>;
}
