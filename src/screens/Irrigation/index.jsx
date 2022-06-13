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
import { irrigations } from '~/mocks/irrigations';

export default function Irrigation() {
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
        data={irrigations}
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
