import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import countryList from 'country-list';
import {Picker} from '@react-native-picker/picker';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

const countries = countryList.getData();
const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fulName, setFulName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [addressError, setAddressError] = useState('sff');

  const onCheckout = () => {
    if (!fulName) {
      Alert.alert('Please fill Full Name');
      return;
    }
    if (!phone) {
      Alert.alert('Please fill in phone');
      return;
    }
    if (!address) {
      Alert.alert('Please fill in address');
      return;
    }
    if (!!addressError) {
      Alert.alert('Fix all Fields errors');
      return;
    }
  };
  const validateAddress = () => {
    if (address.length < 4) {
      setAddressError('Address is too short');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker onValueChange={setCountry} selectedValue={country}>
            {countries.map((contry, ind) => (
              <Picker.Item key={ind} value={contry.code} label={contry.name} />
            ))}
          </Picker>
        </View>
        <InputText
          Label="Full name (First and Last name)"
          value={fulName}
          placeholder="Full name"
          onChangeText={setFulName}
          keyboardType={'default'}
        />
        <InputText
          Label="Phone number"
          value={phone}
          placeholder="Phone number"
          onChangeText={setPhone}
          keyboardType={'number-pad'}
        />
        <InputText
          Label="Address"
          value={address}
          placeholder="Enter Address"
          onEndEditing={validateAddress}
          onChangeText={text => {
            setAddress(text);
            setAddressError('');
          }}
        />
        <InputText
          Label="Address 2"
          value={address}
          placeholder="Enter Address"
          onEndEditing={validateAddress}
          onChangeText={text => {
            setAddress(text);
            setAddressError('');
          }}
        />
        {!!addressError && <Text style={styles.error}>{addressError}</Text>}
        <InputText
          Label="City"
          value={city}
          placeholder="City Name"
          onChangeText={setCity}
        />
        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 5,
  },
  error: {color: 'red'},
});
