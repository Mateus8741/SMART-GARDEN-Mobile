import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colorPrimary, colorWhite } from '~/components/UI/variaveis';
import Background from '~/components/global/Background';
import Content from '~/components/global/Content';
import Logo from '~/components/global/Logo';
import ContainerForm from '~/components/global/ContainerForm';
import InputForm from '~/components/global/InputForm/index';
import Input from '~/components/global/Input/index';
import Button from '~/components/global/Button';
import Link from '~/components/global/Link';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log(email, senha);
    navigation.navigate('Home');
  };

  return (
    <Background>
      <Content>
        <Logo />
        <ContainerForm>
          <InputForm padding={12}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={colorPrimary}
            />
            <Input campo="Email" setValue={setEmail} />
          </InputForm>
          <InputForm padding={12}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={colorPrimary}
            />
            <Input ocultarCampo campo="Senha" setValue={setSenha} />
          </InputForm>
        </ContainerForm>
        <Button onPress={handleLogin} style={{ marginTop: 25 }}>
          Logar
        </Button>
        <View
          style={{
            width: '90%',
            borderColor: colorWhite,
            borderWidth: 1,
            marginTop: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Link to="Register">Fazer cadastro</Link>
          <Link
            to="Recover"
            style={{ marginLeft: Platform.OS === 'ios' ? 45 : 115 }}
          >
            Esqueci minha senha
          </Link>
        </View>
      </Content>
    </Background>
  );
}
