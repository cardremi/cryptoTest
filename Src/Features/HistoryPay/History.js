import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ms} from 'react-native-size-matters';
import CardBuy from '../../Component/CardBuy'
import {connect} from 'react-redux';

function History(props) {
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.text1}>Transaction History</Text>
      <FlatList
        data={props.ListHistory}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
          <CardBuy name={item.name}
          total={item.totalPrice}
          />
        )}
      />
    </View>
  );
}
const mapStateToProps = (state) => ({
  ListHistory: state.historyReducer.ListHistory,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps,mapDispatchToProps)(History)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: ms(10),
    paddingVertical: ms(30),
  },
  text1: {
    color: 'gold',
    fontWeight: '700',
    fontSize: ms(20),
    paddingBottom: ms(15),
  },
});
