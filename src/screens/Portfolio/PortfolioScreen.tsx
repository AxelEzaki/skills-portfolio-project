import React from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './PortfolioStyle';
import { StatusBar } from 'expo-status-bar';
import { PhotoComponent } from '../../components/Photo/Photo';
import { SkillsLevelComponent } from '../../components/SkillsLevel/SkillLevel';

export function PortfolioScreen() {
  return (
    <ScrollView style={ { height: '100%', backgroundColor: '#FFFFFF' } }>
      <View style={styles.container}>
        <PhotoComponent />

        <View style={ { minWidth: '100%' } }>
          <SkillsLevelComponent level={4} technology='angular' titleText='Angular' />
          <SkillsLevelComponent level={2} technology='css' titleText='CSS3' />
          <SkillsLevelComponent level={3} technology='html' titleText='HTML5' />
          <SkillsLevelComponent level={4} technology='javascript' titleText='JavaScript' />
          <SkillsLevelComponent level={3} technology='nodejs' titleText='nodeJS' />
          <SkillsLevelComponent level={4} technology='typescript' titleText='TypeScript' />
          <SkillsLevelComponent level={2} technology='reactnative' titleText='React Native' />
          <SkillsLevelComponent level={3} technology='vbnet' titleText='VB.NET' />
        </View>

        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
}