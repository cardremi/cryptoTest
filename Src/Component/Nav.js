import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Features/Auth/Login';
import Buy from '../Features/BuyPage/Buy'
import BottomNav from '../Component/BottomNav';

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Buy}
        name="Buy"
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        component={BottomNav}
        name="BottomNav"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Nav;
