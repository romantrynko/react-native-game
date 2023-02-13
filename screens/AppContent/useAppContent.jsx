import React, { useCallback, useState } from 'react';

import { GameOverScreen } from '..';
import GameScreen from '../GameScreen';
import StartGameScreen from '../StartGameScreen';

const useAppContent = () => {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const gameOverHandler = useCallback(() => {
    setGameOver(true);
  },[]);

  let Screen = <StartGameScreen onNumberConfirm={pickedNumberHandler} />;

  if (userNumber) Screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;

  if (gameOver && userNumber) Screen = <GameOverScreen />;

  return {
    Screen,
  };
};

export default useAppContent;
