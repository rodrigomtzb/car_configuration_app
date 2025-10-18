import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import ExteriorScreen from '../screens/configurator/ExteriorScreen';
import InteriorScreen from '../screens/configurator/InteriorScreen';
import RinesScreen from '../screens/configurator/RinesScreen';

const Tab = createMaterialTopTabNavigator();

export default function ConfiguratorTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Exterior"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
        tabBarIndicatorStyle: { backgroundColor: '#222' },
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen name="Exterior" component={ExteriorScreen} />
      <Tab.Screen name="Interior" component={InteriorScreen} />
      <Tab.Screen name="Rines" component={RinesScreen} />
    </Tab.Navigator>
  );
}