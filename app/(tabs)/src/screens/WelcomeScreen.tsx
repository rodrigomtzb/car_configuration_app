/*import { LinearGradient } from 'expo-linear-gradient';
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
}*/


import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const WelcomeScreen = ({ navigation }: any) => {
  const scale = useSharedValue(3); // zoom inicial
  const opacity = useSharedValue(0); // texto y botón ocultos

  useEffect(() => {
    // Animar imagen (zoom-out)
    scale.value = withTiming(0.5, { duration: 3000 });

    // Mostrar texto y botón después
    opacity.value = withDelay(2000, withTiming(1, { duration: 1000 }));
  }, []);

  const imageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const fadeInStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../../assets/images/AZTECA1-01.png')}
        style={[styles.image, imageStyle]}
        resizeMode="cover"
      />

      <Animated.View style={[styles.overlay, fadeInStyle]}>
        <Text style={styles.title}>Confort al Siguiente Nivel</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ModelSelect')}
        >
          <Text style={styles.buttonText}>Comienza Aquí</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 120,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2A9D8F',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
