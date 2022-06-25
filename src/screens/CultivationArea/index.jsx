import React from 'react';
import { View } from 'react-native';
import Button from '~/components/global/Button/index';
import Input from '~/components/global/Input/index';
import InputForm from '~/components/global/InputForm/index';
import Layout from '~/components/Layout/index';
import * as ST from './styles';

export default function CultivationArea() {
  return (
    <Layout>
      <ST.Container>
        <ST.Title>Nova área de cultivo</ST.Title>
        <View>
          <ST.Label>Nome</ST.Label>
          <InputForm padding={3}>
            <Input placeholder="nome da área" />
          </InputForm>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: `${Platform.OS === 'ios' ? 43 : 45}%` }}>
            <ST.Label>Tamanho em m²</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" placeholder="tamanho" />
            </InputForm>
          </View>
          <View style={{ width: `${Platform.OS === 'ios' ? 43 : 45}%` }}>
            <ST.Label>Qtd de Irigadores</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" placeholder="irrigadores" />
            </InputForm>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}
        >
          <View style={{ width: '40%' }}>
            <Button style={{ backgroundColor: '#EB4559' }}>Cancelar</Button>
          </View>
          <View style={{ width: '40%' }}>
            <Button style={{ backgroundColor: '#019267' }}>Salvar</Button>
          </View>
        </View>
      </ST.Container>
    </Layout>
  );
}
