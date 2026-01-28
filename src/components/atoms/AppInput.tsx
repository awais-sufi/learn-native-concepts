import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors/colors';

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
    borderColor: COLORS.border, // was '#ddd'
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    color: COLORS.textPrimary, // was '#000' (Android safe)
  },
});
