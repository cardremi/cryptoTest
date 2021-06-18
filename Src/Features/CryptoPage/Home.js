import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {ms} from 'react-native-size-matters';
import {connect} from 'react-redux';
import CardList from '../../Component/CardList';
import {getListData} from './Action';

function Home(props) {
  const {navigation, route} = props;

  useEffect(() => {
    props.getListData();
  }, []);
  const getBuy = data => {
    navigation.navigate('Buy', {
      name: data.name,
      price: data.quote.USD.price,
    });
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={styles.text1}>Crypto Currency Price</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize: ms(20)}}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={props.ListData}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
          <CardList
            name={item.name}
            price={item.quote.USD.price}
            onTap={() => getBuy(item)}
          />
        )}
      />
    </View>
  );
}
const mapStateToProps = state => ({
  ListData: state.dataReducer.ListData,
});

const mapDispatchToProps = {
  getListData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
