import React from 'react';
import { FlatList, View } from 'react-native';
import Layout from '~/components/Layout';
import { Feather } from '@expo/vector-icons';
import Button from '~/components/global/Button/';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import {
  CardIrrigation,
  ImgProduct,
  TextCard,
  FlexContent,
  Separator,
} from './styles';
import { TitleScreens } from '~/components/TitleScreens';
import bananas from '../../../assets/irrigation/bananas.jpg';
import pumpkins from '../../../assets/irrigation/pumpkins.jpg';

export default function Irrigation() {
  const products = [
    {
      id: 1,
      nome: 'Bananas',
      horario: '7:30am',
      img: bananas,
      area: '6m²',
      estado: 'Irrigado',
    },
    {
      id: 2,
      nome: 'Abóboras',
      horario: '11:00am',
      img: pumpkins,
      area: '6m²',
      estado: 'Irrigado',
    },
    {
      id: 3,
      nome: 'Bananas',
      horario: '03:30pm',
      img: bananas,
      area: '6m²',
      estado: 'Não irrigado',
    },
    {
      id: 4,
      nome: 'Abóboras',
      horario: '05:00pm',
      img: pumpkins,
      area: '6m²',
      estado: 'Irrigado',
    },
  ];

  const navigation = useNavigation();

  return (
    <Layout>
      <FlexContent style={{ marginTop: 10 }}>
        <TitleScreens style={{ padding: 10 }}>Irrigações</TitleScreens>
        <Button
          style={{ width: '20%', height: 45 }}
          onPress={() => navigation.navigate('NewIrrigation')}
        >
          Novo
        </Button>
      </FlexContent>
      <FlatList
        style={{
          marginTop: 4,
          marginBottom:
            Platform.OS === 'ios'
              ? `${RFPercentage(3)}%`
              : `${RFPercentage(2)}%`,
        }}
        data={products}
        renderItem={({ item }) => (
          <CardIrrigation>
            <ImgProduct source={item.img} />
            <FlexContent>
              <View>
                <TextCard>{item.nome}</TextCard>
                <TextCard>Horario: {item.horario} </TextCard>
                <TextCard>Área: {item.area}</TextCard>
                <TextCard>Estado: {item.estado}</TextCard>
              </View>
              <Feather name="more-vertical" size={24} color="white" />
            </FlexContent>
          </CardIrrigation>
        )}
        keyExtractor={(item) => String(item.id)}
      />
      <Separator />
      <Button> Adicionar </Button>
    </Layout>
  );
}
