import React from 'react';
import { FlatList, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TitleScreens } from '~/components/TitleScreens';
import { CardSuggestions, ImgProduct, TextCard, FlexContent } from './styles';
import { Feather } from '@expo/vector-icons';
import Layout from '~/components/Layout';
import { suggestions } from '~/mocks/suggestions';
import moment from 'moment';
import 'moment/locale/pt-br';

export default function ThisMonth() {
  moment.locale('pt-br');
  const thisMonth = moment(new Date()).format('MMMM');

  return (
    <Layout>
      <TitleScreens style={{ padding: 10 }}>
        O que plantar em {thisMonth} ?
      </TitleScreens>
      <FlatList
        style={{
          marginTop: 4,
          marginBottom:
            Platform.OS === 'ios'
              ? `${RFPercentage(3)}%`
              : `${RFPercentage(5)}%`,
        }}
        data={suggestions}
        renderItem={({ item }) => (
          <CardSuggestions>
            <ImgProduct source={item.img} />
            <FlexContent>
              <View>
                <TextCard>{item.nome}</TextCard>
                <TextCard>Categoria: {item.categoria} </TextCard>
                <TextCard>Colheita: {item.colheita}</TextCard>
              </View>
              <Feather name="more-vertical" size={24} color="white" />
            </FlexContent>
          </CardSuggestions>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </Layout>
  );
}
