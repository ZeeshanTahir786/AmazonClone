import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyle?: object;
}

const Button = ({text, onPress, containerStyle}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={{...styles.root, ...containerStyle}}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 16,
  },
});
