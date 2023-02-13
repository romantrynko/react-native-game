import { useCallback, useEffect, useState } from 'react';

export const useGameScreen = (userNumber) => {
  const [currentGuess, setCurrentGuess] = useState(null);

  let minBoundary = 1;
  let maxBoundary = 100;
  
  useEffect(() => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    setCurrentGuess(initialGuess);
  }, [userNumber]);
  
  const generateRandomBetween = useCallback((min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    
    if (randomNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randomNum;
    }
  }, [userNumber]);

  const nextGuessHandler = (direction) => {
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
