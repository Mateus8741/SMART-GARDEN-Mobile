import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '~screens/Welcome/';
import Register from '~screens/Register';
import Login from '~screens/Login';
import NewIrrigation from '~screens/NewIrrigation';
import CultivationArea from '~/screens/CultivationArea';
import TabNavigation from '~/components/TabNavigation';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="NewIrrigation" component={NewIrrigation} />
      <Stack.Screen name="CultivationArea" component={CultivationArea} />
    </Stack.Navigator>
  );
}
