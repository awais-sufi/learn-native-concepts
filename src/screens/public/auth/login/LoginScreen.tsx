import React, { useState } from 'react';
import { View, Alert, Text } from 'react-native';
import { AppButton } from '../../../../components/atoms/AppButton';
import { AppInput } from '../../../../components/atoms/AppInput';
import { useAuth } from '../../../../providers/AuthProvider';
import { styles } from './LoginScreen.styles';

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      await login(email.trim(), password);
    } catch (e: any) {
      Alert.alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Login with your email to continue</Text>

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
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        <View style={styles.spacer} />

        <AppButton
          title={loading ? 'Logging in...' : 'Login'}
          onPress={onLogin}
          disabled={loading}
        />

        <View style={styles.footerButton} />

        <AppButton
          title="Create new account"
          onPress={() => navigation.navigate('Signup')}
          variant="text"
        />
      </View>
    </View>
  );
}
