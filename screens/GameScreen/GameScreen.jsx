import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Title } from '../../components/ui';

import { useGameScreen } from './useGameScreen';

function GameScreen({ userNumber }) {
  const { generateRandomBetween, currentGuess, setCurrentGuess } = useGameScreen(userNumber);

  return (
    <View style={styles.root}>
      <Title>Opponent's Choise</Title>

      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
  },
});
