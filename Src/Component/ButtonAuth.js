import React from 'react'
import {TouchableOpacity ,StyleSheet ,Text} from 'react-native'
import {ms} from 'react-native-size-matters'

export default function ButtonAuth ({buttonName,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonSubContainer}>
        <Text style={{color:"white",fontSize:ms(14)}}>{buttonName}</Text>
      </TouchableOpacity>
        )
}
const styles = StyleSheet.create({

    buttonSubContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:ms(14),
        width: ms(344),
        height: ms(46),
        backgroundColor: '#4859EF',
        borderRadius: 35,
        elevation:5
    },

})