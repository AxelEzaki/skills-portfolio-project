import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './PhotoStyles';
import photo from "../../../assets/Photo.png";

export function PhotoComponent() {
  return (
    <View style={ styles.container }>
      <Image source={ photo } alt="A photo of Axel Ezaki, the developer" style={ styles.imagem } />
      <Text style={ styles.labelName }>Axel Ezaki</Text>
    </View>
  );
}