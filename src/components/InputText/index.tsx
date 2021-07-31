import React, {Dispatch, SetStateAction} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputEndEditingEventData,
  View,
} from 'react-native';

interface InputTextProps {
  placeholder: string;
  value: string;
  Label: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: Dispatch<SetStateAction<string>>;
  containerStyle?: object;
  onEndEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => void;
}

const InputText = ({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  Label,
  keyboardType,
  onEndEditing,
}: InputTextProps) => {
  return (
    <View style={[styles.row, containerStyle]}>
      <Text style={styles.label}>{Label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
  },
  row: {
    marginVertical: 5,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    padding: 5,
    marginVertical: 5,
  },
});
