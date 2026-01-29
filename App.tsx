import React, { useEffect } from 'react';
import { AuthProvider } from './src/providers/AuthProvider';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyLanguage } from './src/utils/i18n';

export default function App() {
  useEffect(() => {
    const loadLanguage = async () => {
      const lang = await AsyncStorage.getItem('APP_LANGUAGE');
      if (lang) {
        applyLanguage(lang as 'en' | 'ur');
      }
    };

    loadLanguage();
  }, []);

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
