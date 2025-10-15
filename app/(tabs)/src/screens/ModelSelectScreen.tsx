import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import cars from '../../../../assets/data/cars.json';
import { useCarStore } from '../store/useCarStore';

export default function ModelSelectScreen({ navigation }: any) {
  const setModel = useCarStore((state) => state.setModel);

  const [selection, setSelection] = useState({});

  return (
    <View style={{ flex:1, padding:16, backgroundColor:'#0b0b12' }}>
      <Text style={{ color:'#fff', fontSize:22, marginBottom:12 }}>Elige un modelo</Text>
      <FlatList
        data={cars}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => { setModel(item); setSelection(item) ;navigation.navigate('Configurator',{ selection }) }} style={{ width:240, height:320, marginRight:12, backgroundColor:'#0f1116', borderRadius:12, padding:12 }}>
            <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
              <Text style={{ color:'#fff', marginBottom:8 }}>{item.name}</Text>
              <View style={{ width:180, height:120, backgroundColor:'#222', borderRadius:8, alignItems:'center', justifyContent:'center' }}>
                <Text style={{ color:'#888' }}>3D Preview</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
