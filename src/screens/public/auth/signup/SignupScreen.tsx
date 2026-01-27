import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../../../providers/AuthProvider';
import { AppInput } from '../../../../components/atoms/AppInput';
import { AppButton } from '../../../../components/atoms/AppButton';
import { styles } from './SignupScreen.styles';
import { signupSchema } from './signupSchema';

type SignupFormData = {
  email: string;
  password: string;
};

export default function SignupScreen({ navigation }: any) {
  const { register } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSignup = async (data: SignupFormData) => {
    try {
      setAuthError(null);
      await register(data.email.trim(), data.password);
    } catch (e: any) {
      switch (e.code) {
        case 'auth/email-already-in-use':
          setAuthError('This email is already registered');
          break;

        case 'auth/invalid-email':
          setAuthError('Invalid email address');
          break;

        case 'auth/weak-password':
          setAuthError('Password is too weak');
          break;

        default:
          setAuthError('Unable to create account. Try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>
      <Text style={styles.subtitle}>
        Sign up with your email to get started
      </Text>

      <View style={styles.form}>
        {/* EMAIL */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Email"
              value={value}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(text: string) => {
                setAuthError(null);
                onChange(text);
              }}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        <View style={styles.spacer} />

        {/* PASSWORD */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Password (min 6 chars)"
              value={value}
              secureTextEntry
              onChangeText={(text: string) => {
                setAuthError(null);
                onChange(text);
              }}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        {/* FIREBASE ERROR */}
        {authError && <Text style={styles.errorText}>{authError}</Text>}

        <View style={styles.spacer} />

        <AppButton
          title={isSubmitting ? 'Creating...' : 'Sign Up'}
          onPress={handleSubmit(onSignup)}
          disabled={isSubmitting}
        />

        <View style={styles.footerButton} />

        <AppButton
          title="Already have an account? Login"
          onPress={() => navigation.navigate('Login')}
          variant="text"
        />
      </View>
    </View>
  );
}
