import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ConfiguratorScreen from './src/screens/ConfiguratorScreen';
//import FinalViewScreen from './src/screens/FinalViewScreen';
import ModelSelectScreen from './src/screens/ModelSelectScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

//const Stack = createNativeStackNavigator();


export type RootStackParamList = {
  Welcome: undefined;
  ModelSelect: undefined;
  Configurator: undefined;
  FinalView: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ModelSelect" component={ModelSelectScreen} />
        <Stack.Screen name="Configurator" component={ConfiguratorScreen} />
        {/*<Stack.Screen name="FinalView" component={FinalViewScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}