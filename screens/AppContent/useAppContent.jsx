import React, { useState } from 'react';

import GameScreen from '../GameScreen';
import StartGameScreen from '../StartGameScreen';

const useAppContent = () => {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let Screen = <StartGameScreen onNumberConfirm={pickedNumberHandler} />;

  if (userNumber) Screen = <GameScreen userNumber={userNumber} />;

  return {
    Screen,
  };
};

export default useAppContent;
