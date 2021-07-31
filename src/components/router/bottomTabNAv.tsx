import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShoppingCartScreen from '../../screens/ShoppingCartScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={ShoppingCartScreen} name="ShoppingCartScreen" />
      <Tab.Screen component={HomeScreen} name="Profile" />
      <Tab.Screen component={HomeScreen} name="More" />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
