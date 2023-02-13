import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../../constants/colors';

const Title = ({ children }) => {
  return (
    <Text style={styles.root}>{children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  root: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.yellow,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.yellow,
    borderRadius: 15,
    padding: 12,
  }
});