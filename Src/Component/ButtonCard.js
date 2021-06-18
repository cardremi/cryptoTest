import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {ms} from 'react-native-size-matters';

export default function ButtonCard({buttonName, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonSubContainer}>
      <Text style={{color: 'white', fontSize: ms(16)}}>{buttonName}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonSubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: ms(100),
    height: ms(40),
    backgroundColor: '#4859EF',
    borderRadius: 35,
    elevation: 5,
  },
});
