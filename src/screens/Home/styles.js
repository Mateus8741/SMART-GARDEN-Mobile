import styled from 'styled-components/native';
import {
  colorWhite,
  colorPrimary,
  colorBgPrimary,
} from '~components/UI/variaveis';

export const CardWelcome = styled.View`
  width: 95%;
  height: 15%;
  margin: 15px auto;
  background-color: ${colorBgPrimary};
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const TextWelcome = styled.Text`
  color: ${colorWhite};
  font-size: 18px;
  margin-top: 5px;
  font-weight: 900;
`;

export const CardTasks = styled.View`
  width: 95%;
  height: 65%;
  margin: 2px auto;
  background-color: ${colorBgPrimary};
  border-radius: 20px;
  padding: 5px;
`;

export const Title = styled.Text`
  color: ${colorWhite};
  font-size: 20px;
  text-align: center;
  padding: 5px;
`;

export const NextTask = styled.View`
  width: 95%;
  height: 25%;
  margin: 10px auto;
  background-color: ${colorPrimary};
  border-radius: 10px;
`;

export const TextTask = styled.Text`
  color: ${colorWhite};
  font-size: 16px;
  margin-top: 5px;
  font-weight: 900;
  padding: 10px;
`;

export const ContainerBtn = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px;
  margin-top: 10px;
`;

export const Link = styled.Text`
  color: ${colorWhite};
  font-size: 18px;
  margin-top: 10px;
  font-weight: 900;
`;
