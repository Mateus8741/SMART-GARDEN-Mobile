import styled from 'styled-components/native';

import { Platform } from 'react-native';

import * as Colors from '~/components/UI/variaveis';

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? 8 : (props) => props.padding || '0'}px;
  padding-left: 5px;
  background-color: ${Colors.colorWhite};
  border-radius: 8px;
  margin-top: 3px;
  margin-bottom: 10px;
`;
