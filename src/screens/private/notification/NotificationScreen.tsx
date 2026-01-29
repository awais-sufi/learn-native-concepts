// screens/private/notification/NotificationScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { styles } from './NotificationScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from '../../../utils/i18n';

type Notification = {
  id: string;
  titleKey: string;
  descKey: string;
  time: string;
  isRead?: boolean;
};

/* ---------------- MOCK DATA ---------------- */

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    titleKey: 'notif_login_alert',
    descKey: 'notif_login_alert_desc',
    time: '2 min ago',
    isRead: false,
  },
  {
    id: '2',
    titleKey: 'notif_security_update',
    descKey: 'notif_security_update_desc',
    time: '1 hour ago',
    isRead: true,
  },
  {
    id: '3',
    titleKey: 'notif_password_changed',
    descKey: 'notif_password_changed_desc',
    time: '3 hours ago',
    isRead: true,
  },
  {
    id: '4',
    titleKey: 'notif_new_device',
    descKey: 'notif_new_device_desc',
    time: 'Yesterday',
    isRead: false,
  },
  {
    id: '5',
    titleKey: 'notif_session_expired',
    descKey: 'notif_session_expired_desc',
    time: 'Yesterday',
    isRead: true,
  },
  {
    id: '6',
    titleKey: 'notif_profile_updated',
    descKey: 'notif_profile_updated_desc',
    time: '2 days ago',
    isRead: true,
  },
  {
    id: '7',
    titleKey: 'notif_email_verified',
    descKey: 'notif_email_verified_desc',
    time: '2 days ago',
    isRead: true,
  },
  {
    id: '8',
    titleKey: 'notif_login_alert',
    descKey: 'notif_login_location_desc',
    time: '3 days ago',
    isRead: false,
  },
  {
    id: '9',
    titleKey: 'notif_security_tip',
    descKey: 'notif_security_tip_desc',
    time: '3 days ago',
    isRead: true,
  },
  {
    id: '10',
    titleKey: 'notif_biometric_disabled',
    descKey: 'notif_biometric_disabled_desc',
    time: '4 days ago',
    isRead: false,
  },
];

export default function NotificationScreen() {
  const [notifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);

  const renderItem = ({ item }: { item: Notification }) => (
    <View style={styles.card}>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{i18n.t(item.titleKey)}</Text>

        <Text style={styles.cardSubtitle}>{i18n.t(item.descKey)}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{i18n.t('notifications')}</Text>
          <Text style={styles.subtitle}>{i18n.t('notificationsSubtitle')}</Text>
        </View>

        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1502920514313-52581002a659',
                }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.emptyText}>{i18n.t('noNotifications')}</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
