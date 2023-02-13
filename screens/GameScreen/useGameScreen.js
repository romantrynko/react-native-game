import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

export const useGameScreen = (userNumber, onGameOver) => {
  const [currentGuess, setCurrentGuess] = useState(null);

  let minBoundary = 1;
  let maxBoundary = 100;
  
  useEffect(() => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);

    setCurrentGuess(initialGuess);
  }, [userNumber]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  
  const generateRandomBetween = useCallback((min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    
    if (randomNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randomNum;
    }
  }, [userNumber]);

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Don\'t lie', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
      return;
    }

    direction === 'lower' ?
      maxBoundary = currentGuess - 1
      :
      minBoundary = currentGuess + 1;
    
    const newRandomNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

    setCurrentGuess(newRandomNum);
  };

  return {
    currentGuess,
    nextGuessHandler,
  };
};
