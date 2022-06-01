import React from "react";
import { Text, View } from "react-native";
import Button from "~/components/global/Button/index";
import Input from "~/components/global/Input/index";
import InputForm from "~/components/global/InputForm/index";
import Layout from "~/components/Layout/index";

import * as Colors from "../../components/UI/variaveis";

import * as ST from "./styles";

export default function Plant() {
  return (
    <Layout>
      <ST.Container>
        <ST.Title>Novo cultivo</ST.Title>
        <View>
          <ST.Label>Descrição</ST.Label>
          <InputForm padding={3}>
            <Input campo="nome do alimento" />
          </InputForm>
          <ST.Label>Categoria</ST.Label>
          <InputForm padding={3}>
            <Input campo="tipo de alimento" />
          </InputForm>
          <ST.Label>Área de cultivo m²</ST.Label>
          <InputForm padding={3}>
            <Input keyboardType="numeric" campo="100 m²" />
          </InputForm>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: `${Platform.OS === "ios" ? 43 : 34}%` }}>
            <ST.Label>Dias para colher</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" campo="29 dias" />
            </InputForm>
          </View>

          <View style={{ width: `${Platform.OS === "ios" ? 35 : 28}%` }}>
            <ST.Label>Qnt plantada</ST.Label>
            <InputForm padding={3}>
              <Input keyboardType="numeric" campo="200" />
            </InputForm>
          </View>
        </View>
        <View>
          <ST.Label>Estação do ano</ST.Label>
          <InputForm padding={3}>
            <Input campo="verão" />
          </InputForm>

          <ST.Label>Data do plantio</ST.Label>
          <InputForm padding={3}>
            <Input keyboardType="numeric" campo="dd/mm/aaaa" />
          </InputForm>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 6,
          }}
        >
          <View style={{ width: "40%" }}>
            <Button style={{ backgroundColor: "#EB4559" }}>Cancelar</Button>
          </View>
          <View style={{ width: "40%" }}>
            <Button style={{ backgroundColor: "#019267" }}>Salvar</Button>
          </View>
        </View>
      </ST.Container>
    </Layout>
  );
}
