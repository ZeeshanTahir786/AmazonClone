import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../../screens/ProductScreen';

import {useState} from 'react';
import HeaderComponent from '../HeaderComponent';

const Stack = createStackNavigator();

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
        }}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductScreen" />
    </Stack.Navigator>
  );
};

export default HomeStack;
