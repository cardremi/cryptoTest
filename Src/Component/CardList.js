import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import ButtonCard from './ButtonCard';

export default function CardList({name, price, volume, onTap}) {
  return (
    <View style={styles.container}>
      <View style={styles.name1}>
        <Text style={styles.text1}>Name</Text>
        <Text style={styles.text1}>Price</Text>
        {/* <Text style={styles.text1}>Volume(24H)</Text> */}
      </View>
      <View style={styles.name2}>
        <Text style={styles.text2}>{name}</Text>
        <Text style={styles.text2}>${price}</Text>
        {/* <Text style={styles.text1}>{volume}</Text> */}
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCard buttonName="buy" onPress={onTap} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    borderRadius: 6,
    shadowRadius: 5,
    width: ms(350),
    height: ms(150),
    paddingTop: ms(20),
  },
  name1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  name2: {
    paddingTop: ms(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text1: {
    fontSize: ms(18),
  },
  text2: {
    fontSize: ms(18),
    color: 'green',
  },
  buttonContainer: {
    paddingTop: ms(15),
    alignSelf: 'center',
  },
});
