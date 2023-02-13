import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';


const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={
          ({ pressed }) => pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    padding: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  }
});