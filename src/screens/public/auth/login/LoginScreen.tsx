import React from 'react';
import { View, Text, I18nManager } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppButton } from '../../../../components/atoms/AppButton';
import { AppInput } from '../../../../components/atoms/AppInput';
import { useAuth } from '../../../../providers/AuthProvider';
import { styles } from './LoginScreen.styles';
import { loginSchema } from './login.schema';
import i18n from '../../../../utils/i18n';

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

  const onLogin = async (data: LoginFormValues) => {
    try {
      setAuthError(null);
      await login(data.email.trim(), data.password);
    } catch (e: any) {
      switch (e.code) {
        case 'auth/invalid-credential':
          setAuthError(i18n.t('errorInvalidCredential'));
          break;

        case 'auth/user-not-found':
          setAuthError(i18n.t('errorUserNotFound'));
          break;

        case 'auth/invalid-email':
          setAuthError(i18n.t('errorInvalidEmail'));
          break;

        case 'auth/too-many-requests':
          setAuthError(i18n.t('errorTooManyRequests'));
          break;

        default:
          setAuthError(i18n.t('errorGeneric'));
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('welcomeBack')}</Text>

      <Text style={styles.subtitle}>{i18n.t('loginSubtitle')}</Text>

      <View style={styles.form}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder={i18n.t('email')}
              value={value}
              autoCapitalize="none"
              keyboardType="email-address"
              textAlign={I18nManager.isRTL ? 'right' : 'left'}
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
              placeholder={i18n.t('password')}
              value={value}
              secureTextEntry
              textAlign={I18nManager.isRTL ? 'right' : 'left'}
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
          title={isSubmitting ? i18n.t('loggingIn') : i18n.t('login')}
          onPress={handleSubmit(onLogin)}
          disabled={isSubmitting}
        />

        <View style={styles.footerButton} />

        <AppButton
          title={i18n.t('createAccount')}
          onPress={() => navigation.navigate('Signup')}
          variant="text"
        />
      </View>
    </View>
  );
}
