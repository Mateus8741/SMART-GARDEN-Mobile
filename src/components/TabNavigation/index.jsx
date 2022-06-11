import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Colors from '~/components/UI/variaveis';
import ButtonNew from './ButtonNew/index';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '~screens/Home';
import Plant from '~screens/Plant';
import Plantation from '~screens/Plantation';
import Irrigation from '~screens/Irrigation';
import ThisMonth from '~screens/ThisMonth';
import Layout from '../Layout/index';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
      sceneContainerStyle={{
        borderTopColor: 'transparent',
      }}
      tabBarOptions={{
        inactiveBackgroundColor: Colors.colorPrimary,
        activeTintColor: Colors.colorWhite,
        inactiveTintColor: Colors.colorGray,
        activeBackgroundColor: Colors.colorPrimary,
        showLabel: false,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Plantation"
        component={Plantation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="progress-check"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plant"
        component={Plant}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ButtonNew size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Irrigation"
        component={Irrigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="water" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sugestao"
        component={ThisMonth}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
