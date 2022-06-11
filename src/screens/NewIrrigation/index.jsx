import React from 'react';
import { View } from 'react-native';
import Button from '~/components/global/Button/index';
import Input from '~/components/global/Input/index';
import InputForm from '~/components/global/InputForm/index';
import Layout from '~/components/Layout/index';
import { Ionicons } from '@expo/vector-icons';
import * as ST from './styles';

export default function NewIrrigation() {
  return (
    <Layout>
      <ST.Container>
        <ST.Title>Programar irrigação</ST.Title>
        <View>
          <ST.Label>Plantação</ST.Label>
          <InputForm padding={3}>
            <Input campo="selecione uma plantacao" />
          </InputForm>
        </View>
        <View>
          <ST.Label>Tamanho em m²</ST.Label>
          <InputForm padding={3}>
            <Input campo="100" />
          </InputForm>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: `${Platform.OS === 'ios' ? 43 : 45}%` }}>
            <ST.Label>Horário</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" campo="08:00" />
            </InputForm>
          </View>
          <View style={{ width: `${Platform.OS === 'ios' ? 43 : 45}%` }}>
            <ST.Label>Duração em min</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" campo="60min" />
            </InputForm>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
            }}
          >
            <Ionicons name="timer-outline" size={24} color="white" />
            <ST.Label style={{ marginLeft: 5 }}>Lembrar-me</ST.Label>
          </View>
          <InputForm padding={3}>
            <Input campo="selecione um horario" />
          </InputForm>
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
