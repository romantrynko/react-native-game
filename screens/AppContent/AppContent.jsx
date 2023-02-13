import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import Colors from '../../constants/colors';

import useAppContent from './useAppContent';

function AppContent() {
  const { Screen } = useAppContent();

  return (
    <LinearGradient
      colors={[
        Colors.primary700,
        Colors.yellow,
      ]}
      style={styles.root}
    >
      <ImageBackground
        source={require('../../assets/images/background.png')}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.root}>
          {Screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default AppContent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
