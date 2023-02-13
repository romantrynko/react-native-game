import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  root: {
    borderWidth: 4,
    borderColor: Colors.yellow,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'center'
  },
  number: {
    color: Colors.yellow,
    fontSize: 36,
    fontWeight: 'bold',
  },
});