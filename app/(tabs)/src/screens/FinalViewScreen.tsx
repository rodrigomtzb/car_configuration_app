/*import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCarStore } from '../store/useCarStore';

export default function FinalViewScreen() {
  const selectedModel = useCarStore(state => state.selectedModel);
  const color = useCarStore(state => state.color);
  const interior = useCarStore(state => state.interior);
  const occupants = useCarStore(state => state.occupants);

  return (
    <View style={{ flex:1, backgroundColor:'#06060a', padding:16 }}>
      <Text style={{ color:'#fff', fontSize:20, marginBottom:12 }}>Vista Final</Text>
      <View style={{ height:300, backgroundColor:'#111', borderRadius:12, alignItems:'center', justifyContent:'center' }}>
        <Text style={{ color:'#888' }}>Render final (mock)</Text>
      </View>

      <View style={{ marginTop:16 }}>
        <Text style={{ color:'#fff' }}>Modelo: {selectedModel?.name}</Text>
        <Text style={{ color:'#fff' }}>Color: {color}</Text>
        <Text style={{ color:'#fff' }}>Interior: {interior}</Text>
        <Text style={{ color:'#fff' }}>Ocupantes: {occupants}</Text>
      </View>

      <TouchableOpacity style={{ marginTop:20, padding:12, backgroundColor:'#2b6cff', borderRadius:8 }}>
        <Text style={{ color:'#fff' }}>Compartir diseño</Text>
      </TouchableOpacity>
    </View>
  );
}
*/