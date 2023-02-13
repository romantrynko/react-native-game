import { useState } from 'react';

export const useGameScreen = (userNumber) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const generateRandomBetween = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randomNum;
    }
  };

  return {
    generateRandomBetween,
  };
};
