// screens/private/profile/ProfileScreen.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useAuth } from '../../../providers/AuthProvider';
import { AppButton } from '../../../components/atoms/AppButton';
import { styles } from './rofileScreen.styles';
import { Images } from '../../../assets/images';

export default function ProfileScreen() {
  const { logout, user } = useAuth(); // user optional

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Your Profile</Text>
          <Text style={styles.subtitle}>Manage your account and session</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.card}>
          <Image
            source={Images.profileAvatar} // use placeholder image
            style={styles.avatar}
          />

          <Text style={styles.name}>{user?.email ?? 'User'}</Text>

          <Text style={styles.email}>Securely authenticated with Firebase</Text>
        </View>

        {/* Info Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Security</Text>
          <Text style={styles.infoText}>
            Your session is protected using device Keychain / Keystore with
            industry-grade encryption.
          </Text>
        </View>
      </View>

      {/* Logout */}
      <View style={styles.footer}>
        <AppButton title="Logout" onPress={logout} />
      </View>
    </View>
  );
}
