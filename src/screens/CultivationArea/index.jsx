import React from 'react';
import { View } from 'react-native';
import Button from '~/components/global/Button';
import Input from '~/components/global/Input';
import InputForm from '~/components/global/InputForm';
import Layout from '~/components/Layout/index';
import { TitleScreens } from '~/components/TitleScreens';
import * as Colors from '../../components/UI/variaveis';
import * as Style from './styles';

export default function CultivationArea() {
  return (
    <Layout>
      <TitleScreens style={{ padding: 10 }}>Área de cultivo</TitleScreens>
    </Layout>
  );
}
