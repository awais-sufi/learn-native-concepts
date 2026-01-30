import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors/colors';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },

  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 16,
  },

  greeting: {
    fontSize: Platform.OS === 'ios' ? 13 : 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },

  title: {
    fontSize: Platform.OS === 'ios' ? 26 : 28,
    fontWeight: Platform.OS === 'ios' ? '600' : '700',
    color: COLORS.textPrimary,
  },

  cartBadge: {
    backgroundColor: COLORS.primary,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  safe: {
    backgroundColor: '#fff',
  },

  // Featured Coffee Styles
  featuredContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 20,
    padding: 20,
    marginTop: 16,
    // Changed to column layout
    shadowColor: COLORS.black,
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  featuredContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  featuredImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginRight: 16,
  },

  featuredInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  featuredName: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  featuredDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
    lineHeight: 20,
  },

  featuredPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
  },

  featuredQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 8,
    alignSelf: 'stretch',
  },

  featuredQuantityButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  featuredQuantityButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.primary,
  },

  featuredQuantityText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginHorizontal: 24,
    minWidth: 30,
    textAlign: 'center',
  },

  disabledButton: {
    color: COLORS.border,
  },

  // Coffee List Styles
  listContainer: {
    marginTop: 32,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },

  listContent: {
    paddingBottom: 8,
  },

  coffeeCard: {
    width: 160,
    backgroundColor: COLORS.background,
    borderRadius: 20,
    padding: 12,
    marginRight: 16,
    // Soft shadow
    shadowColor: COLORS.black,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    // Add subtle border for definition
    borderWidth: 1,
    borderColor: COLORS.border + '20', // 20 = ~12% opacity
  },

  selectedCoffeeCard: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },

  coffeeThumbnail: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
  },

  coffeeInfo: {
    flex: 1,
  },

  coffeeName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },

  coffeePrice: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 6,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  rating: {
    fontSize: 12,
    color: COLORS.warning,
    fontWeight: '600',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 6,
  },

  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
  },

  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    minWidth: 20,
    textAlign: 'center',
  },

  // Cart Summary Styles
  cartSummary: {
    backgroundColor: COLORS.background,
    borderRadius: 20,
    padding: 20,
    marginTop: 32,
    marginBottom: 20,
    shadowColor: COLORS.black,
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  cartTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },

  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  cartItemName: {
    fontSize: 15,
    color: COLORS.textSecondary,
  },

  cartItemPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },

  cartTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },

  cartTotalText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  cartTotalPrice: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primary,
  },

  // Security Card
  securityCard: {
    backgroundColor: COLORS.info + '15', // 15 = ~10% opacity
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: COLORS.info + '30',
  },

  securityText: {
    fontSize: 14,
    color: COLORS.info,
    textAlign: 'center',
  },
  // Add these to your existing styles

  // Heart Icon Styles
  heartIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 12,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  heartIcon: {
    fontSize: 16,
  },

  heartIconActive: {
    color: '#EF4444', // Red color for active heart
  },

  // Header Heart Icon
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  favoritesButton: {
    position: 'relative',
  },

  heartIconHeader: {
    fontSize: 24,
  },

  favoritesBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#EF4444',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  favoritesBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },

  // Featured Coffee Heart
  featuredHeart: {
    padding: 8,
  },

  featuredHeartIcon: {
    fontSize: 24,
  },

  // Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  viewAllText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },

  // Coffee Card Wrapper
  coffeeCardWrapper: {
    position: 'relative',
    marginRight: 16,
  },
});
