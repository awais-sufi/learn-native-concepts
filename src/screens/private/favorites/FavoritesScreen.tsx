import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './FavoritesScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type FavoriteItem = {
  id: string;
  title: string;
  subtitle: string;
  time: string;
};

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // MOCK DATA (replace with API / Firebase later)
  useEffect(() => {
    const mockData: FavoriteItem[] = [
      {
        id: '1',
        title: 'React Native Guide',
        subtitle: 'Build iOS & Android apps',
        time: '2 days ago',
      },
      {
        id: '2',
        title: 'Firebase Authentication',
        subtitle: 'Login, signup & security',
        time: '5 days ago',
      },
      {
        id: '3',
        title: 'In-App Purchases',
        subtitle: 'Subscriptions & payments',
        time: '1 week ago',
      },
    ];

    setFavorites(mockData);
  }, []);

  const renderItem = ({ item }: { item: FavoriteItem }) => (
    <View style={styles.card}>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Favorites</Text>
          <Text style={styles.subtitle}>Your saved items in one place</Text>
        </View>

        {/* List */}
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                You haven’t added any favorites yet
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
