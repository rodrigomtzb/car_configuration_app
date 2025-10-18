import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ColorOption = {
  name: string;
  thumbnail: any;
  fullImage: any;
};

export default function InteriorScreen() {
  // 🖼️ Define las opciones de color con sus imágenes mini y grandes
  const colorOptions: ColorOption[] = [
    {
      name: 'Cafe',
      thumbnail: require('@/assets/images/int_cafe.jpg'),
      fullImage: require('@/assets/images/interiores/interior.png'),
    },{
      name: 'Blanco',
      thumbnail: require('@/assets/images/int_blanco.jpg'),
      fullImage: require('@/assets/images/interiores/int_blanco.png'),
    },
    // {
    //   name: 'Verde',
    //   thumbnail: require('@/assets/images/verde.jpg'),
    //   fullImage: require('@/assets/images/verde.jpg'),
    // },
    {
      name: 'Rojo',
      thumbnail: require('@/assets/images/int_rojo.jpg'),
      fullImage: require('@/assets/images/interiores/int_rojo.png'),
    },
  ];

  // 🎯 Estado del color seleccionado
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un color de interiores:</Text>

      {/* Miniaturas */}
      <View style={styles.colorRow}>
        {colorOptions.map((color) => (
          <TouchableOpacity
            key={color.name}
            onPress={() => setSelectedColor(color)}
            style={[
              styles.thumbWrapper,
              selectedColor?.name === color.name && styles.thumbSelected,
            ]}
          >
            <Image source={color.thumbnail} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Imagen seleccionada */}
      {selectedColor ? (
        <View style={styles.previewContainer}>
          <Image
            source={selectedColor.fullImage}
            style={styles.fullImage}
            resizeMode="contain"
          />
          <Text style={styles.caption}>{selectedColor.name}</Text>
        </View>
      ) : (
        <Text style={styles.placeholder}>Toca una imagen para verla</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  colorRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  thumbWrapper: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 10,
    padding: 4,
  },
  thumbSelected: {
    borderColor: '#000',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  previewContainer: {
    alignItems: 'center',
  },
  fullImage: {
    width: 250,
    height: 250,
    borderRadius: 16,
  },
  caption: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  placeholder: {
    marginTop: 40,
    fontSize: 16,
    color: '#777',
  },
});