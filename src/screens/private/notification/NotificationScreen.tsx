// screens/private/notification/NotificationScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { styles } from './NotificationScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  isRead?: boolean;
};

/* ---------------- MOCK DATA ---------------- */

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Login Alert',
    description: 'New login detected on your device',
    time: '2 min ago',
    isRead: false,
  },
  {
    id: '2',
    title: 'Security Update',
    description: 'Biometric protection enabled successfully',
    time: '1 hour ago',
    isRead: true,
  },
  {
    id: '3',
    title: 'Password Changed',
    description: 'Your password was updated successfully',
    time: '3 hours ago',
    isRead: true,
  },
  {
    id: '4',
    title: 'New Device Detected',
    description: 'A new device signed into your account',
    time: 'Yesterday',
    isRead: false,
  },
  {
    id: '5',
    title: 'Session Expired',
    description: 'You were logged out for security reasons',
    time: 'Yesterday',
    isRead: true,
  },
  {
    id: '6',
    title: 'Profile Updated',
    description: 'Your profile information was updated',
    time: '2 days ago',
    isRead: true,
  },
  {
    id: '7',
    title: 'Email Verified',
    description: 'Your email address has been verified',
    time: '2 days ago',
    isRead: true,
  },
  {
    id: '8',
    title: 'Login Alert',
    description: 'Login from a new location detected',
    time: '3 days ago',
    isRead: false,
  },
  {
    id: '9',
    title: 'Security Tip',
    description: 'Enable 2-step verification for extra safety',
    time: '3 days ago',
    isRead: true,
  },
  {
    id: '10',
    title: 'Biometric Disabled',
    description: 'Biometric authentication was turned off',
    time: '4 days ago',
    isRead: false,
  },
  {
    id: '11',
    title: 'Biometric Enabled',
    description: 'Biometric authentication was enabled',
    time: '5 days ago',
    isRead: true,
  },
  {
    id: '12',
    title: 'Account Activity',
    description: 'Multiple failed login attempts detected',
    time: '5 days ago',
    isRead: false,
  },
  {
    id: '13',
    title: 'Welcome 🎉',
    description: 'Thanks for joining our app!',
    time: '1 week ago',
    isRead: true,
  },
  {
    id: '14',
    title: 'Reminder',
    description: 'Update your password regularly to stay secure',
    time: '1 week ago',
    isRead: true,
  },
  {
    id: '15',
    title: 'Logout Alert',
    description: 'You logged out from another device',
    time: '1 week ago',
    isRead: true,
  },
  {
    id: '16',
    title: 'Security Check',
    description: 'We ran a security check on your account',
    time: '8 days ago',
    isRead: true,
  },
  {
    id: '17',
    title: 'New Feature',
    description: 'Dark mode is now available 🎨',
    time: '9 days ago',
    isRead: true,
  },
  {
    id: '18',
    title: 'Policy Update',
    description: 'Our privacy policy has been updated',
    time: '10 days ago',
    isRead: true,
  },
  {
    id: '19',
    title: 'Suspicious Activity',
    description: 'Unusual activity detected on your account',
    time: '11 days ago',
    isRead: false,
  },
  {
    id: '20',
    title: 'Account Secure',
    description: 'No security issues found in recent scan',
    time: '2 weeks ago',
    isRead: true,
  },
];

export default function NotificationScreen() {
  const [notifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);

  const renderItem = ({ item }: { item: Notification }) => (
    <View style={styles.card}>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.description}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>Security & activity updates</Text>
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
              <Text style={styles.emptyText}>
                No notifications yet. You’re all caught up ☕️
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
