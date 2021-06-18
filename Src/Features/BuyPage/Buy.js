import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ms} from 'react-native-size-matters';
import {connect} from 'react-redux';
import ButtonCard from '../../Component/ButtonCard';
import {putListHistory} from '../HistoryPay/Action';

function Buy(props) {
  const {navigation, route} = props;
  const [data, setData] = useState(props.ListHistory);
  const {name, price} = route.params;
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const total = () => price * count;
  const totalPrice = total();
  let newData = [{name: name, count: count, totalPrice: totalPrice}];
  console.log('hdhydhyw', newData);
  const buyBtc = index => {
    props.putListHistory(newData);
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: ms(10),
        }}>
        <Text style={{fontSize: ms(20)}}>Name</Text>
        <Text style={{fontSize: ms(20)}}>Quantity</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingTop: ms(8),
        }}>
        <Text style={{fontSize: ms(20)}}>{name}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={decrementCount}>
            <Text style={{fontSize: ms(30)}}>-</Text>
          </TouchableOpacity>
          <Text
            style={{fontSize: ms(30), paddingHorizontal: ms(7), color: 'blue'}}>
            {count}
          </Text>
          <TouchableOpacity onPress={incrementCount}>
            <Text style={{fontSize: ms(30)}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingTop: ms(20), paddingHorizontal: ms(10)}}>
        <Text style={{fontSize: ms(18)}}>Total Price</Text>
        <Text style={{fontSize: ms(20)}}>${total()}</Text>
      </View>
      <View
        style={{
          flexDirection:'row',
          paddingTop: ms(40),
          paddingHorizontal: ms(10),
          alignItems: 'center',
          justifyContent:'space-evenly'
        }}>
        <ButtonCard buttonName="Go back" onPress={()=> navigation.navigate('Home')} />
        <ButtonCard buttonName="Buy" onPress={buyBtc} />
      </View>
    </View>
  );
}
const mapStateToProps = state => ({
  ListHistory: state.historyReducer.ListHistory,
});

const mapDispatchToProps = {
  putListHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
