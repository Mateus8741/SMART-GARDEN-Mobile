import styled from 'styled-components/native';
import { css } from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colorPrimary, colorWhite } from '../../UI/variaveis';

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: ${RFValue(48)}px;
  background: ${colorPrimary};
  padding: 0 10px;
  border-radius: 8px;

  ${(props) =>
    props.outline &&
    css`
      background: transparent;
      border-color: ${colorPrimary};
      border-width: 1px;
    `}
`;

export const Label = styled.Text`
  color: ${colorWhite};
  font-weight: 700;
  font-size: ${RFValue(16)}px;
`;

export const IconButton = styled(Icon)`
  font-size: ${RFValue(20)}px;
  color: ${colorWhite};
  margin-right: 13px;
`;
export const ContentButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator``;
