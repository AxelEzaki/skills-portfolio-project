import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { styles, styleButtonNavigation } from './HomeStyle';
import { StatusBar } from 'expo-status-bar';
import { PhotoComponent } from '../../components/Photo/Photo';
import { ButtonLinkComponent } from '../../components/ButtonLink/ButtonLink';

export function HomeScreen( { navigation }: any) {
  function handleNavigateToPortfolio(){
    navigation.navigate('portfolio');
  }

  return (
    <ScrollView style={ { height: '100%', backgroundColor: '#FFFFFF' } }>
      <View style={styles.container}>
        <View style={ styles.textContainer }>
          <PhotoComponent />

          <Text style={ styles.labelBio }>I'm Axel Kenzo Matsui Ezaki, a Full-Stack developer focused on Angular and VB.NET, learning how to create Mobile Apps with React Native.</Text>
        </View>

        <View style={ styles.buttonLinksContainer }>
          <ButtonLinkComponent url='https://www.linkedin.com/in/axel-ezaki-b7a861187/' color='#0274b3' nickname='Axel Ezaki' socialMedia='linkedin' />
          <ButtonLinkComponent url='https://github.com/AxelEzaki' color='#4a4a4a' nickname='AxelEzaki' socialMedia='github' />
          <ButtonLinkComponent url='mailto:axelkeza@hotmail.com' color='#23a9eb' nickname='Axel Ezaki' socialMedia='email' />
        </View>

        <Pressable onPressOut={ handleNavigateToPortfolio } style={ styleButtonNavigation.buttonNavigationPortfolio }>
          <Text style={ styleButtonNavigation.textNavigate }>Skills</Text>
        </Pressable>

        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
}