import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNAv';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen component={BottomTabNav} name="HomeTabs" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
