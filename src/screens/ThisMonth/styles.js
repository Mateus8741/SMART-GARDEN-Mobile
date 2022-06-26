import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import * as Colors from '~/components/UI/variaveis';

export const Container = styled.View`
  width: 90%;
  height: ${Platform.OS === 'ios' ? RFValue(510) : RFValue(550)}px;
  margin: 20px auto;
  background-color: ${Colors.colorBgPrimary};
  border-radius: 20px;
  padding: 20px;
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

export const CardSuggestions = styled.View`
  width: 90%;
  height: 250px;
  margin: 2px auto;
  background-color: ${Colors.colorBgPrimary};
  border-radius: 20px;
  margin-top: 20px;
`;
export const FlexContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const ImgProduct = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 20px;
`;

export const TextCard = styled.Text`
  color: ${Colors.colorWhite};
  font-size: 18px;
  padding: 5px;
  font-weight: 900;
  font-weight: bold;
`;
