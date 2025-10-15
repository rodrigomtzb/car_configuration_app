import React, { useRef } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useCarStore } from '../store/useCarStore';
// Importamos el HTML de la escena como string
import sceneHtml from '../web/sceneHtml';

export default function ConfigScreen({ navigation, route }) {

  const {setColor,setInterior, setOccupants} = useCarStore();
  const selectedModel = useCarStore((state) => state.selectedModel);
  const model = useCarStore((state) => state.model);
  const color = useCarStore((state) => state.color);
  const interior = useCarStore((state) => state.interior);
  const occupants = useCarStore((state) => state.occupants);

  // const { selection } = route.params || {};
  // const [model, setModel] = useState(selection.model);
  // const [color, setColor] = useState('#ff0000');
  // const [interior, setInterior] = useState('negro');
  // const [occupants, setOccupants] = useState('4');
  const webRef = useRef(null);

  function sendConfig() {
    const cfg = { model, color, interior, occupants };
    webRef.current?.postMessage(JSON.stringify({ type:'config', payload: cfg }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurar: {selectedModel.name}</Text>

      <View style={{ height: 340, width: '100%', backgroundColor: '#000' }}>
        <WebView
          ref={webRef}
          originWhitelist={['*']}
          source={{ html: sceneHtml }}
          style={{ flex: 1 }}
          onMessage={(e) => {
            try {
              const msg = JSON.parse(e.nativeEvent.data);
              if(msg.type === 'ready') {
                console.log('Escena lista');
              }
            } catch {}
          }}
        />
      </View>

      <Text style={styles.label}>Color (hex):</Text>
      <TextInput style={styles.input} value={color} onChangeText={setColor} />

      <Text style={styles.label}>Interior:</Text>
      <TextInput style={styles.input} value={interior} onChangeText={setInterior} />

      <Text style={styles.label}>Ocupantes:</Text>
      <TextInput style={styles.input} value={occupants} onChangeText={setOccupants} />

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => { sendConfig(); navigation.navigate('FinalView', { model, color, interior, occupants }); }}>
          <Text style={styles.buttonText}>Ver final</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#222' }]} onPress={sendConfig}>
          <Text style={styles.buttonText}>Enviar a vista 3D</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16, backgroundColor:'#071029' },
  title: { color:'#fff', fontSize:20, marginBottom:12, textAlign:'center' },
  label: { color:'#cde', marginTop:8 },
  input: { backgroundColor:'#fff', padding:8, borderRadius:8, marginTop:6 },
  row: { flexDirection:'row', justifyContent:'space-between', marginTop:12 },
  button: { backgroundColor:'#ff4d4f', padding:12, borderRadius:10, flex:1, alignItems:'center', marginHorizontal:6 },
  buttonText: { color:'#fff', fontWeight:'600' }
});


/*
import React, { useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useCarStore } from '../store/useCarStore';
import sceneHtml from '../web/sceneHtml';

export default function ConfiguratorScreen() {
  const webViewRef = useRef<WebView>(null);
  const { selectedModel, color, setColor } = useCarStore();

  // 🔹 Enviar el modelo al WebView cuando cambia
  useEffect(() => {
    if (selectedModel && webViewRef.current) {
      const message = JSON.stringify({
        type: 'init',
        model: selectedModel.model, // ruta del .glb
      });
      webViewRef.current.postMessage(message);
    }
  }, [selectedModel]);

  // 🔹 Enviar color cuando cambia
  useEffect(() => {
    if (color && webViewRef.current) {
      const message = JSON.stringify({
        type: 'color',
        value: color,
      });
      webViewRef.current.postMessage(message);
    }
  }, [color]);

  if (!selectedModel) {
    return (
      <View style={styles.center}>
        <Text>Selecciona un modelo primero.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html: sceneHtml }}
        style={{ flex: 1 }}
      />
      <View style={styles.controls}>
        <Text style={styles.title}>{selectedModel.name}</Text>
        <View style={styles.row}>
          {selectedModel.colors.map((c) => (
            <Button key={c} title=" " color={c} onPress={() => setColor(c)} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  controls: { padding: 10, backgroundColor: '#eee' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-around' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

*/