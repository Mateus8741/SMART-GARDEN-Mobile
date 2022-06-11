import styled from 'styled-components/native';
import {
  colorWhite,
  colorPrimary,
  colorBgPrimary,
} from '~components/UI/variaveis';

export const CardIrrigation = styled.View`
  width: 90%;
  height: 250px;
  margin: 2px auto;
  background-color: ${colorBgPrimary};
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
  color: ${colorWhite};
  font-size: 18px;
  padding: 5px;
  font-weight: 900;
  font-weight: bold;
`;

export const Separator = styled.View`
  width: 90%;
  height: 1px;
  margin: 5px auto;
  margin-bottom: 10px;
  background-color: ${colorWhite};
`;
