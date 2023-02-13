import { StyleSheet, TextInput, View } from 'react-native';

import { PrimaryButton } from '../../components';
import Colors from '../../constants/colors';

import { useStartGameScreen } from './useStartGameScreen';

const StartGameScreen = ({ onNumberConfirm }) => {


  const { resetInputHandler, confirmInputHandler, numberInputHandler, enteredNumber } = useStartGameScreen({ onNumberConfirm });

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        selectionColor='#d7d7d7'
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    color: Colors.yellow,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});

export default StartGameScreen;
