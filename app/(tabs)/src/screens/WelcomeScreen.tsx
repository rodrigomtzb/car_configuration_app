import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <LinearGradient colors={["#0f0c29", "#302b63", "#24243e"]} style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{ fontSize:34, color:'#fff', marginBottom:20 }}>Smart Innovation</Text>
      <Text style={{ color:'#9aa0ff', marginBottom:40 }}>3D Car Configurator — Demo</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ModelSelect')} style={{ padding:16, backgroundColor:'#2b6cff', borderRadius:12 }}>
        <Text style={{ color:'#fff' }}>Comenzar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
