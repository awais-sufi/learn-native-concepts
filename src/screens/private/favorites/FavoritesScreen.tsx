import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './FavoritesScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorites } from '../../../store/context/FavoritesContext';

// Assuming CoffeeItem type from your context looks like this:
type CoffeeItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: { uri: string };
  rating: number;
};

export default function FavoritesScreen() {
  const { favorites, toggleFavorite } = useFavorites();

  const renderItem = ({ item }: { item: CoffeeItem }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.coffeeImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.coffeeName}>{item.name}</Text>
            <Text style={styles.coffeeType}>{item.description}</Text>
          </View>
          <TouchableOpacity
            onPress={() => toggleFavorite(item)}
            style={styles.heartButton}
          >
            <Text style={styles.heartIcon}>❤️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>
          <Text style={styles.lastOrdered}>Tap to order</Text>
        </View>

        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Favorites ☕️</Text>
            <Text style={styles.subtitle}>Your most-loved coffee drinks</Text>
          </View>
          <Text style={styles.countBadge}>{favorites.length} items</Text>
        </View>

        {/* Coffee List */}
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
                }}
                style={styles.emptyImage}
              />
              <Text style={styles.emptyTitle}>No favorites yet</Text>
              <Text style={styles.emptyText}>
                Start adding your favorite coffees from the menu
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
