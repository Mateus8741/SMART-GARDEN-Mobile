import React from 'react';
import { View } from 'react-native';
import Button from '~/components/global/Button';
import Input from '~/components/global/Input';
import Select from '~/components/global/Select';
import InputForm from '~/components/global/InputForm';
import Layout from '~/components/Layout';
import { Ionicons } from '@expo/vector-icons';
import * as ST from './styles';
import { products } from '~/mocks/productos';

export default function NewIrrigation() {
  return (
    <Layout>
      <ST.Container>
        <ST.Title>Programar irrigação</ST.Title>
        <View>
          <ST.Label>Plantação</ST.Label>
          <Select items={products} />
        </View>
        <View>
          <ST.Label>Tamanho em m²</ST.Label>
          <InputForm padding={3}>
            <Input placeholder="100" />
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
              <Input keyboardType="numeric" placeholder="08:00" />
            </InputForm>
          </View>
          <View style={{ width: `${Platform.OS === 'ios' ? 43 : 45}%` }}>
            <ST.Label>Duração em min</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" placeholder="60min" />
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
          <Select
            items={[
              { id: 1, nome: '5 min antes' },
              { id: 2, nome: '10 min antes' },
              { id: 2, nome: '30 min antes' },
            ]}
          />
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
