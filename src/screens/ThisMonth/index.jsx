import React from "react";
import { TitleScreens } from '~/components/TitleScreens';
import Layout from '~/components/Layout';

export default function Plant() {
  return (
    <Layout>
        <TitleScreens style={{ padding: 10 }}>O que plantar esse mês</TitleScreens>
    </Layout>
  );
}
