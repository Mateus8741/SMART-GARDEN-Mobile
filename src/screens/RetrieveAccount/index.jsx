import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Colors from '~/components/UI/variaveis';
import Background from '~/components/global/Background';
import Content from '~/components/global/Content';
import Logo from '~/components/global/Logo';
import ContainerForm from '~/components/global/ContainerForm';
import InputForm from '~/components/global/InputForm';
import Input from '~/components/global/Input/index';
import Button from '~/components/global/Button';
import { RFValue } from 'react-native-responsive-fontsize';

export default function RetrieveAccount() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  return (
    <Background>
      <Content>
        <Logo />
        <ContainerForm>
          <InputForm padding={12}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={Colors.colorPrimary}
            />
            <Input campo="Email" setValue={setEmail} />
          </InputForm>
        </ContainerForm>
        <Button style={{ marginTop: 25 }}>Enviar</Button>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
          }}
        >
          <Link to="RetrieveAccount">
            Informe um e-mail para recuperar sua conta
          </Link>
        </View>
      </Content>
    </Background>
  );
}
