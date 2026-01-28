import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../providers/AuthProvider';
import { AppButton } from '../../../components/atoms/AppButton';
import { styles } from './rofileScreen.styles';
import { Images } from '../../../assets/images';

export default function ProfileScreen() {
  const { logout, user } = useAuth();
  const navigation = useNavigation<any>();

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
          <Image source={Images.profileAvatar} style={styles.avatar} />
          <Text style={styles.name}>{user?.email ?? 'User'}</Text>
          <Text style={styles.email}>Securely authenticated with Firebase</Text>
        </View>

        {/* Security Info */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Security</Text>
          <Text style={styles.infoText}>
            Your session is protected using device Keychain / Keystore.
          </Text>
        </View>

        {/* Feedback Link */}
        <Pressable
          style={styles.linkRow}
          onPress={() => navigation.navigate('Feedback')}
        >
          <Text style={styles.linkText}>💬 Send Feedback</Text>
        </Pressable>
        <Pressable
          style={styles.linkRow}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.linkText}>📞 Contact Us</Text>
        </Pressable>
      </View>

      {/* Logout */}
      <View style={styles.footer}>
        <AppButton title="Logout" onPress={logout} />
      </View>
    </View>
  );
}
