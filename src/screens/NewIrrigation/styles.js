import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import * as Colors from '~/components/UI/variaveis';

export const Container = styled.View`
  width: 90%;
  margin: 20px auto;
  background-color: ${Colors.colorBgPrimary};
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 30px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${Colors.colorWhite};
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  color: ${Colors.colorWhite};
`;
