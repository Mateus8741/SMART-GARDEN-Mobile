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
  BarPercentage,
  FlexContent,
  MoreOptions,
  Icons,
} from './styles';

import * as Colors from '../../components/UI/variaveis';

import banana from '../../../assets/plantation/banana.png';
import lettuce from '../../../assets/plantation/lettuce.png';

export default function Plantation() {
  const products = [
    {
      id: 1,
      nome: 'Banana',
      categoria: 'Frutas',
      img: banana,
      colheita: '330 a 450 dias',
      progresso: '30',
    },
    {
      id: 2,
      nome: 'Alface',
      categoria: 'Frutas',
      img: lettuce,
      colheita: '330 a 450 dias',
      progresso: '25',
    },
    {
      id: 3,
      nome: 'Banana',
      categoria: 'Frutas',
      img: banana,
      colheita: '330 a 450 dias',
      progresso: '10',
    },
    {
      id: 4,
      nome: 'Alface',
      categoria: 'Frutas',
      img: lettuce,
      colheita: '330 a 450 dias',
      progresso: '50',
    },
  ];

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
