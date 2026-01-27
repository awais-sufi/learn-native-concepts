import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Images } from '../../../assets/images';
import { AppButton } from '../../../components/atoms/AppButton';
import { useAuth } from '../../../providers/AuthProvider';
import { styles } from './HomeScreen.styles';
import { getAuthToken } from '../../../services/auth/secureStorage.service';

export default function HomeScreen() {
  const { logout } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await getAuthToken();
      console.log('🔐 TOKEN FROM KEYCHAIN:', storedToken);
      setToken(storedToken);
    };

    loadToken();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Welcome ☕️</Text>
          <Text style={styles.subtitle}>
            You’re logged in securely using Firebase with Keychain / Keystore
          </Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Image
            source={Images.locationMap}
            style={styles.image}
            resizeMode="contain"
          />

          {token && (
            <Text style={styles.subtitle}>
              Your session is protected with industry-grade encryption and
              secure device storage.
            </Text>
          )}
        </View>
      </View>

      {/* Footer Action */}
      <View style={styles.footer}>
        <AppButton title="Logout" onPress={logout} />
      </View>
    </View>
  );
}
