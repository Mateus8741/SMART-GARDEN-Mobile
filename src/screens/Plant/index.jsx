import React from 'react';
import { View } from 'react-native';
import Button from '~/components/global/Button/index';
import Input from '~/components/global/Input/index';
import InputForm from '~/components/global/InputForm/index';
import Select from '~/components/global/Select';
import Layout from '~/components/Layout/index';
import * as ST from './styles';

export default function Plant() {
  return (
    <Layout>
      <ST.Container>
        <ST.Title>Novo cultivo</ST.Title>
        <View>
          <ST.Label>Descrição</ST.Label>
          <InputForm padding={3}>
            <Input placeholder="nome do alimento" />
          </InputForm>
          <ST.Label>Categoria</ST.Label>
          <Select
            items={[
              { id: 1, nome: 'Verduras' },
              { id: 2, nome: 'Legumes' },
              { id: 2, nome: 'Frutas' },
              { id: 2, nome: 'Grãos' },
            ]}
          />
          <ST.Label>Área de cultivo m²</ST.Label>
          <Select
            items={[
              { id: 1, nome: 'Area001' },
              { id: 2, nome: 'Area002' },
              { id: 2, nome: 'Area003' },
            ]}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: `${Platform.OS === 'ios' ? 43 : 34}%` }}>
            <ST.Label>Dias para colher</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" placeholder="29 dias" />
            </InputForm>
          </View>

          <View style={{ width: `${Platform.OS === 'ios' ? 35 : 28}%` }}>
            <ST.Label>Qnt plantada</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" placeholder="200" />
            </InputForm>
          </View>
        </View>
        <View>
          <ST.Label>Estação do ano</ST.Label>
          <Select
            items={[
              { id: 1, nome: 'Inverno' },
              { id: 2, nome: 'Verão' },
              { id: 2, nome: 'Outono' },
              { id: 2, nome: 'Primavera' },
            ]}
          />

          <ST.Label>Data do plantio</ST.Label>
          <InputForm padding={3}>
            <Input keyboardType="numeric" placeholder="dd/mm/aaaa" />
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
