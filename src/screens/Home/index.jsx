import React from 'react';
import { Image, View } from 'react-native';
import Layout from '~components/Layout';
import { useNavigation } from '@react-navigation/native';
import Button from '~/components/global/Button/';

import {
  CardWelcome,
  TextWelcome,
  CardTasks,
  Title,
  NextTask,
  TextTask,
  ContainerBtn,
  Link,
} from './styles';
import icon from '../../../assets/IconWelcomeHome.png';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Layout>
      <CardWelcome>
        <View>
          <TextWelcome>Bem Vindo(a) José</TextWelcome>
          <TextWelcome>O que vamos plantar esse mês?</TextWelcome>
        </View>
        <Image source={icon} />
      </CardWelcome>
      <CardTasks>
        <Title>Suas tarefas</Title>
        <NextTask>
          <TextTask>Nada por enquanto...</TextTask>
          <TextTask>
            Quando houverem tarefas pendentes elas aparecerão aqui
          </TextTask>
        </NextTask>
        <ContainerBtn>
          <Link>Começar a plantar</Link>
          <Button
            style={{ width: '50%', height: 45 }}
            onPress={() => navigation.navigate('CultivationArea')}
          >
            Àrea de cultivo
          </Button>
        </ContainerBtn>
      </CardTasks>
    </Layout>
  );
}
