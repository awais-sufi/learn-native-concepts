// navigation/AppNavigator.tsx
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../providers/AuthProvider';
import PrivateStack from './PrivateStack/PrivateStack';
import AuthStack from './AuthStack/AuthStack';
import SplashScreen from '../screens/public/SplashScreen/SplashScreen';
import RNBootSplash from 'react-native-bootsplash';

export default function AppNavigator() {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      RNBootSplash.hide({ fade: true });
    }
  }, [loading]);

  if (loading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {isAuthenticated ? <PrivateStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
