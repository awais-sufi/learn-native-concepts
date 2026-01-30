import React from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../providers/AuthProvider';
import { AppButton } from '../../../components/atoms/AppButton';
import { styles } from './ProfileScreen.styles';
import { Images } from '../../../assets/images';
import i18n, { applyLanguage } from '../../../utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { logout, user } = useAuth();
  const navigation = useNavigation<any>();

  const changeLanguage = async (lang: 'en' | 'ur') => {
    await AsyncStorage.setItem('APP_LANGUAGE', lang);
    applyLanguage(lang);

    Alert.alert(
      'Restart Required',
      'App will restart to apply language changes.',
      [
        {
          text: 'OK',
          onPress: () => RNRestart.restart(),
        },
      ],
    );
  };

  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top', 'bottom']} // ✅ SAME behavior on iOS & Android
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{i18n.t('profileTitle')}</Text>
            <Text style={styles.subtitle}>{i18n.t('profileSubtitle')}</Text>
          </View>

          {/* Profile Card */}
          <View style={styles.card}>
            <Image source={Images.profileAvatar} style={styles.avatar} />
            <Text style={styles.name}>{user?.email ?? 'User'}</Text>
            <Text style={styles.email}>
              Securely authenticated with Firebase
            </Text>
          </View>

          {/* Language Section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>{i18n.t('language')}</Text>

            <Pressable onPress={() => changeLanguage('en')}>
              <Text style={styles.linkText}>{i18n.t('english')}</Text>
            </Pressable>

            <Pressable onPress={() => changeLanguage('ur')}>
              <Text style={styles.linkText}>{i18n.t('urdu')}</Text>
            </Pressable>
          </View>

          {/* Security Info */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>{i18n.t('security')}</Text>
            <Text style={styles.infoText}>{i18n.t('securityInfo')}</Text>
          </View>

          {/* Links */}
          <Pressable
            style={styles.linkRow}
            onPress={() => navigation.navigate('Feedback')}
          >
            <Text style={styles.linkText}>💬 {i18n.t('sendFeedback')}</Text>
          </Pressable>

          <Pressable
            style={styles.linkRow}
            onPress={() => navigation.navigate('Contact')}
          >
            <Text style={styles.linkText}>📞 {i18n.t('contactUs')}</Text>
          </Pressable>
        </View>

        {/* Logout */}

        <AppButton title={i18n.t('logout')} onPress={logout} />
      </View>
    </SafeAreaView>
  );
}
