// navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../providers/AuthProvider';
import PrivateStack from './PrivateStack/PrivateStack';
import AuthStack from './AuthStack/AuthStack';

export default function AppNavigator() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // splash screen later

  return (
    <NavigationContainer>
      {isAuthenticated ? <PrivateStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
