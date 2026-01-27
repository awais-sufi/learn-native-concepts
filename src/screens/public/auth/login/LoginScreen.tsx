import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppButton } from '../../../../components/atoms/AppButton';
import { AppInput } from '../../../../components/atoms/AppInput';
import { useAuth } from '../../../../providers/AuthProvider';
import { styles } from './LoginScreen.styles';
import { loginSchema } from './login.schema';

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth();
  const [authError, setAuthError] = React.useState<string | null>(null);

  type LoginFormValues = {
    email: string;
    password: string;
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLogin = async (data: { email: string; password: string }) => {
    try {
      setAuthError(null);
      await login(data.email.trim(), data.password);
    } catch (e: any) {
      switch (e.code) {
        case 'auth/invalid-credential':
          setAuthError('Incorrect email or password');
          break;

        case 'auth/user-not-found':
          setAuthError('No account found with this email');
          break;

        case 'auth/invalid-email':
          setAuthError('Invalid email address');
          break;

        case 'auth/too-many-requests':
          setAuthError('Too many attempts. Try again later.');
          break;

        default:
          setAuthError('Unable to log in. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Login with your email to continue</Text>

      <View style={styles.form}>
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

        <View style={styles.spacer} />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Password"
              value={value}
              secureTextEntry
              onChangeText={(text: string) => {
                setAuthError(null);
                onChange(text);
              }}
            />
          )}
        />

        {authError && <Text style={styles.authError}>{authError}</Text>}

        <View style={styles.spacer} />

        <AppButton
          title={isSubmitting ? 'Logging in...' : 'Login'}
          onPress={handleSubmit(onLogin)}
          disabled={isSubmitting}
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
