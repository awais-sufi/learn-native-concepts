import React, { createContext, useContext, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  signUpWithEmail,
  loginWithEmail,
  logout,
} from '../services/auth/auth.service';
import {
  clearAuthToken,
  getAuthToken,
  setAuthToken,
} from '../services/auth/secureStorage.service';
import {
  authenticateWithBiometrics,
  isBiometricAvailable,
} from '../services/auth/biometrics.service';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  user: FirebaseAuthTypes.User | null;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const bootstrap = async () => {
      const token = await getAuthToken();

      if (token) {
        const biometricSupported = await isBiometricAvailable();

        if (biometricSupported) {
          const unlocked = await authenticateWithBiometrics();

          if (!unlocked) {
            await clearAuthToken();
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }
        }

        setIsAuthenticated(true);
      }

      setLoading(false);
    };

    bootstrap();
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async currentUser => {
      if (currentUser) {
        const token = await currentUser.getIdToken(true); // force refresh
        await setAuthToken(token);
        setUser(currentUser);
        setIsAuthenticated(true);
      } else {
        await clearAuthToken();
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email: string, password: string) => {
    const token = await signUpWithEmail(email, password);
    await setAuthToken(token);
    setIsAuthenticated(true);
  };

  const login = async (email: string, password: string) => {
    const token = await loginWithEmail(email, password);
    await setAuthToken(token);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await logout();
    await clearAuthToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout: signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
