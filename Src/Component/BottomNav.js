import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Features/CryptoPage/Home';
import History from '../Features/HistoryPay/History';
import Foundation from 'react-native-vector-icons/Foundation';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Foundation name="bitcoin" color="gold" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: () => (
            <Foundation name="clipboard" color="gold" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
