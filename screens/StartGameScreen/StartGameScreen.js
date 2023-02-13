import { StyleSheet, Text, TextInput, View } from 'react-native';

import { PrimaryButton, Title } from '../../components/ui';
import Colors from '../../constants/colors';

import { useStartGameScreen } from './useStartGameScreen';

const StartGameScreen = ({ onNumberConfirm }) => {


  const { resetInputHandler, confirmInputHandler, numberInputHandler, enteredNumber } = useStartGameScreen({ onNumberConfirm });

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <View style={styles.root}>
        <Text style={styles.instructionText}>Enter number</Text>
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
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    paddingVertical: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 16,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  instructionText: {
    color: Colors.primary500,
    fontSize: 18,
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
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flex: 1,
  }
});

