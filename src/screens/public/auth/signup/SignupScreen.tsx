import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useAuth } from '../../../../providers/AuthProvider';
import { AppInput } from '../../../../components/atoms/AppInput';
import { AppButton } from '../../../../components/atoms/AppButton';
import { styles } from './SignupScreen.styles';

export default function SignupScreen({ navigation }: any) {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      await register(email.trim(), password);
    } catch (e: any) {
      Alert.alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>
      <Text style={styles.subtitle}>
        Sign up with your email to get started
      </Text>

      <View style={styles.form}>
        <AppInput
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <View style={styles.spacer} />

        <AppInput
          placeholder="Password (min 6 chars)"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        <View style={styles.spacer} />

        <AppButton
          title={loading ? 'Creating...' : 'Sign Up'}
          onPress={onSignup}
          disabled={loading}
        />

        <View style={styles.footerButton} />

        <AppButton
          title="Already have an account? Login"
          onPress={() => navigation.navigate('Login')}
          variant="text" // if your AppButton supports it
        />
      </View>
    </View>
  );
}
