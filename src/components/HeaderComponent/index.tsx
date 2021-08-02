import {SetStateAction} from 'react';
import React from 'react';
import {Dispatch} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons//Feather';

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#48a3c6'}}>
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{height: 40, marginLeft: 10}}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};
export default HeaderComponent;
