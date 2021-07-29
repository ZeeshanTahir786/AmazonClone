import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface QuantitySelector {
  quantity: string;
  setQuantity: () => {};
}

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onMinus} style={styles.button}>
        <Text style={styles.buttontext}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={onPlus} style={styles.button}>
        <Text style={styles.buttontext}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
