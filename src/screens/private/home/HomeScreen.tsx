import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './HomeScreen.styles';
import { getAuthToken } from '../../../services/auth/secureStorage.service';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../../../store/context/FavoritesContext';

// Coffee data with Unsplash images
const COFFEE_MENU = [
  {
    id: '1',
    name: 'Espresso',
    price: 3.5,
    description: 'Strong and bold',
    image: {
      uri: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04',
    },
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Cappuccino',
    price: 4.25,
    description: 'Creamy & frothy',
    image: {
      uri: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
    },
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Latte',
    price: 4.5,
    description: 'Smooth and milky',
    image: { uri: 'https://images.unsplash.com/photo-1561047029-3000c68339ca' },
    rating: 4.6,
  },
  {
    id: '4',
    name: 'Mocha',
    price: 5.0,
    description: 'Chocolate delight',
    image: {
      uri: 'https://images.unsplash.com/photo-1568978831366-e56a6f5511c5',
    },
    rating: 4.9,
  },
  {
    id: '5',
    name: 'Americano',
    price: 3.75,
    description: 'Classic black',
    image: {
      uri: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb',
    },
    rating: 4.5,
  },
  {
    id: '6',
    name: 'Macchiato',
    price: 4.0,
    description: 'Espresso stained',
    image: {
      uri: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472',
    },
    rating: 4.4,
  },
  {
    id: '7',
    name: 'Flat White',
    price: 4.75,
    description: 'Velvety texture',
    image: {
      uri: 'https://images.unsplash.com/photo-1510707577715-2c3e55064f48',
    },
    rating: 4.8,
  },
  {
    id: '8',
    name: 'Cold Brew',
    price: 4.5,
    description: 'Smooth & refreshing',
    image: { uri: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8' },
    rating: 4.7,
  },
  {
    id: '9',
    name: 'Iced Latte',
    price: 5.25,
    description: 'Chilled perfection',
    image: {
      uri: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    },
    rating: 4.9,
  },
  {
    id: '10',
    name: 'Caramel Macchiato',
    price: 5.5,
    description: 'Sweet caramel twist',
    image: {
      uri: 'https://images.unsplash.com/photo-1510707577715-2c3e55064f48',
    },
    rating: 4.9,
  },
];

type CoffeeItem = (typeof COFFEE_MENU)[0];
type CartItem = { coffee: CoffeeItem; quantity: number };

export default function HomeScreen() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const navigation = useNavigation<any>();
  const [token, setToken] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeItem>(
    COFFEE_MENU[0],
  );

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await getAuthToken();
      console.log('🔐 TOKEN FROM KEYCHAIN:', storedToken);
      setToken(storedToken);
    };

    loadToken();
  }, []);

  const addToCart = (coffee: CoffeeItem) => {
    setCart(prev => {
      const existing = prev.find(item => item.coffee.id === coffee.id);
      if (existing) {
        return prev.map(item =>
          item.coffee.id === coffee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { coffee, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (coffeeId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.coffee.id === coffeeId);
      if (existing && existing.quantity > 1) {
        return prev.map(item =>
          item.coffee.id === coffeeId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        return prev.filter(item => item.coffee.id !== coffeeId);
      }
    });
  };

  const getCoffeeQuantity = (coffeeId: string) => {
    const item = cart.find(items => items.coffee.id === coffeeId);
    return item ? item.quantity : 0;
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.coffee.price * item.quantity,
      0,
    );
  };

  // Navigate to Favorites tab
  const goToFavorites = () => {
    // Pass favorites data to Favorites screen
    navigation.navigate('Favorites');
  };

  const renderCoffeeItem = ({ item }: { item: CoffeeItem }) => (
    <View style={styles.coffeeCardWrapper}>
      <TouchableOpacity
        style={[
          styles.coffeeCard,
          selectedCoffee.id === item.id && styles.selectedCoffeeCard,
        ]}
        onPress={() => setSelectedCoffee(item)}
      >
        {/* Heart Icon */}
        <TouchableOpacity
          style={styles.heartIconContainer}
          onPress={() => toggleFavorite(item)}
        >
          <Text
            style={[
              styles.heartIcon,
              isFavorite(item.id) && styles.heartIconActive,
            ]}
          >
            {isFavorite(item.id) ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>

        <Image source={item.image} style={styles.coffeeThumbnail} />
        <View style={styles.coffeeInfo}>
          <Text style={styles.coffeeName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.coffeePrice}>${item.price.toFixed(2)}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
          </View>

          {/* Quantity Controls */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => removeFromCart(item.id)}
              disabled={getCoffeeQuantity(item.id) === 0}
            >
              <Text
                style={[
                  styles.quantityButtonText,
                  getCoffeeQuantity(item.id) === 0 && styles.disabledButton,
                ]}
              >
                -
              </Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>
              {getCoffeeQuantity(item.id)}
            </Text>

            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning! ☀️</Text>
            <Text style={styles.title}>What would you like to drink?</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              style={styles.favoritesButton}
              onPress={goToFavorites}
            >
              <Text style={styles.heartIconHeader}>
                {favorites.length > 0 ? '❤️' : '🤍'}
              </Text>
              {favorites.length > 0 && (
                <View style={styles.favoritesBadge}>
                  <Text style={styles.favoritesBadgeText}>
                    {favorites.length}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{getTotalItems()}</Text>
            </View>
          </View>
        </View>

        {/* Selected Coffee Preview */}
        <View style={styles.featuredContainer}>
          <View style={styles.featuredHeader}>
            <Text style={styles.featuredName}>{selectedCoffee.name}</Text>
            <TouchableOpacity
              style={styles.featuredHeart}
              onPress={() => toggleFavorite(selectedCoffee)}
            >
              <Text
                style={[
                  styles.featuredHeartIcon,
                  isFavorite(selectedCoffee.id) && styles.heartIconActive,
                ]}
              >
                {isFavorite(selectedCoffee.id) ? '❤️' : '🤍'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featuredContent}>
            <Image source={selectedCoffee.image} style={styles.featuredImage} />
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredDescription}>
                {selectedCoffee.description}
              </Text>
              <Text style={styles.featuredPrice}>
                ${selectedCoffee.price.toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={styles.featuredQuantityContainer}>
            <TouchableOpacity
              style={styles.featuredQuantityButton}
              onPress={() => removeFromCart(selectedCoffee.id)}
              disabled={getCoffeeQuantity(selectedCoffee.id) === 0}
            >
              <Text
                style={[
                  styles.featuredQuantityButtonText,
                  getCoffeeQuantity(selectedCoffee.id) === 0 &&
                    styles.disabledButton,
                ]}
              >
                -
              </Text>
            </TouchableOpacity>

            <Text style={styles.featuredQuantityText}>
              {getCoffeeQuantity(selectedCoffee.id)}
            </Text>

            <TouchableOpacity
              style={styles.featuredQuantityButton}
              onPress={() => addToCart(selectedCoffee)}
            >
              <Text style={styles.featuredQuantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Horizontal Coffee List */}
        <View style={styles.listContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Drinks</Text>
            <TouchableOpacity onPress={goToFavorites}>
              <Text style={styles.viewAllText}>
                Favorites ({favorites.length}) →
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={COFFEE_MENU}
            renderItem={renderCoffeeItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <View style={styles.cartSummary}>
            <Text style={styles.cartTitle}>Your Order</Text>
            {cart.map(item => (
              <View key={item.coffee.id} style={styles.cartItem}>
                <Text style={styles.cartItemName}>
                  {item.coffee.name} × {item.quantity}
                </Text>
                <Text style={styles.cartItemPrice}>
                  ${(item.coffee.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            ))}
            <View style={styles.cartTotal}>
              <Text style={styles.cartTotalText}>Total:</Text>
              <Text style={styles.cartTotalPrice}>
                ${getTotalPrice().toFixed(2)}
              </Text>
            </View>
          </View>
        )}

        {/* Secure Session Info */}
        {token && (
          <View style={styles.securityCard}>
            <Text style={styles.securityText}>
              🔒 Your session is protected with industry-grade encryption
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
