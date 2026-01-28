import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { AppButton } from '../../../../components/atoms/AppButton';

export default function ContactUsScreen() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitContact = () => {
    if (!subject.trim() || !message.trim()) {
      Alert.alert('Missing info', 'Please fill all fields.');
      return;
    }

    // 🔥 Later: send to Firebase / backend / email service
    console.log('Contact Us:', { subject, message });

    Alert.alert('Message sent', 'Our team will get back to you soon.');

    setSubject('');
    setMessage('');
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 8 }}>
        Contact Us
      </Text>

      <Text style={{ color: '#666', marginBottom: 20 }}>
        Have a question or issue? Send us a message.
      </Text>

      <TextInput
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 12,
          marginBottom: 12,
        }}
      />

      <TextInput
        placeholder="Write your message..."
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

      <AppButton title="Send Message" onPress={submitContact} />
    </View>
  );
}
