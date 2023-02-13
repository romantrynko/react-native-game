import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NumberContainer from '../../components/game/NumberContainer';
import { Title, PrimaryButton } from '../../components/ui';

import { useGameScreen } from './useGameScreen';

function GameScreen({ userNumber }) {
  const { currentGuess, nextGuessHandler } = useGameScreen(userNumber);

  return (
    <View style={styles.root}>
      <Title>Opponent's Choise</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
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
