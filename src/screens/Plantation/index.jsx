import React from 'react';

import Layout from '~/components/Layout';

import { FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { TitleScreens } from '~/components/TitleScreens';

import { Platform } from 'react-native';

import { ProgressBar } from 'react-native-paper';

import { RFPercentage } from 'react-native-responsive-fontsize';

import {
  SearchBar,
  SearchInput,
  CardProduct,
  CircleImgProduct,
  ImgProduct,
  TextCard,
  ViewProgressBar,
  FlexContent,
  Icons,
} from './styles';

import * as Colors from '../../components/UI/variaveis';
import { products } from '~/mocks/productos';

export default function Plantation() {
  return (
    <Layout>
      <SearchBar>
        <Feather name="search" size={24} color="black" />
        <SearchInput placeholder="Buscar" placeholderTextColor="black" />
      </SearchBar>
      <TitleScreens style={{ padding: 15, marginLeft: 5 }}>
        Progressão dos itens
      </TitleScreens>
      <FlatList
        style={{
          marginTop: 4,
          marginBottom:
            Platform.OS === 'ios'
              ? `${RFPercentage(3)}%`
              : `${RFPercentage(4)}%`,
        }}
        data={products}
        renderItem={({ item, index }) => (
          <CardProduct key={index}>
            <FlexContent>
              <CircleImgProduct>
                <ImgProduct source={item.img} />
              </CircleImgProduct>
              <Icons name="more-vertical" />
            </FlexContent>
            <TextCard>{item.nome}</TextCard>
            <TextCard>Categoria: {item.categoria} </TextCard>
            <TextCard>Colheita: {item.colheita}</TextCard>
            <TextCard>Progresso: {item.progresso}%</TextCard>
            <ViewProgressBar>
              <ProgressBar
                progress={item.progresso / 100}
                color={Colors.colorPrimary}
              />
            </ViewProgressBar>
          </CardProduct>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </Layout>
  );
}
