import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function AppInput(props: any) {
  return (
    <TextInput
      {...props}
      editable={props.editable !== false}
      placeholderTextColor="#999"
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    color: '#000', // 👈 IMPORTANT (Android)
  },
});
