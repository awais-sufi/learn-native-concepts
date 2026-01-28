import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { AppButton } from '../../../../components/atoms/AppButton';

export default function FeedbackScreen() {
  const [message, setMessage] = useState('');

  const submitFeedback = () => {
    if (!message.trim()) {
      Alert.alert('Feedback required', 'Please write something.');
      return;
    }

    // 🔥 Later you can send this to Firebase / API
    console.log('User feedback:', message);

    Alert.alert('Thank you!', 'Your feedback has been submitted.');
    setMessage('');
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 12 }}>
        App Feedback
      </Text>

      <Text style={{ color: '#666', marginBottom: 16 }}>
        Tell us what you like or what we can improve.
      </Text>

      <TextInput
        placeholder="Write your feedback here..."
        value={message}
        onChangeText={setMessage}
        multiline
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 12,
          minHeight: 120,
          textAlignVertical: 'top',
          marginBottom: 20,
        }}
      />

      <AppButton title="Submit Feedback" onPress={submitFeedback} />
    </View>
  );
}
