import React from 'react';
import { View } from 'react-native';
import Button from '~/components/global/Button';
import Input from '~/components/global/Input';
import InputForm from '~/components/global/InputForm';
import Layout from '~/components/Layout';
import { TitleScreens } from '~/components/TitleScreens/index';

import * as Colors from '../../components/UI/variaveis';

export default function NewIrrigation() {
  return (
    <Layout>
      <TitleScreen style={{ padding: 10 }}>Nova Irrigação</TitleScreen>
    </Layout>
  );
}
