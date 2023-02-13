import { useCallback, useState } from 'react';


export const useStartGameScreen = ({ onNumberConfirm }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = useCallback((enteredText) => {
    setEnteredNumber(enteredText);
  }, [setEnteredNumber]);

  const resetInputHandler = useCallback(() => {
    setEnteredNumber('');
  }, [setEnteredNumber]);

  const confirmInputHandler = useCallback(() => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Please choose a number between 1 and 99',
        [{
          text: 'OK',
          style: 'destructive',
          onPress: resetInputHandler
        }],
      );
      return;
    }

    onNumberConfirm(chosenNumber);
  }, [enteredNumber]);


  return {
    enteredNumber,
    confirmInputHandler,
    resetInputHandler,
    numberInputHandler,
  }
}
