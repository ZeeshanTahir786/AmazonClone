import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCartScreen from '../../screens/ShoppingCartScreen';
import AddressScreen from '../../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoppingCartScreen}
        name="ShoppingCartScreen"
        options={{
          title: 'Shoppng Cart',
        }}
      />
      <Stack.Screen
        component={AddressScreen}
        name="AddressScreen"
        options={{
          title: 'Address',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
