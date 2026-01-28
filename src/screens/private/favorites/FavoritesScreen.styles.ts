import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors/colors';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 24,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  countBadge: {
    backgroundColor: COLORS.primary,
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 13,
    fontWeight: '600',
  },

  listContent: {
    paddingBottom: 30,
  },

  // Coffee Card Styles
  card: {
    backgroundColor: COLORS.background,
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    // Soft, rounded shadow
    shadowColor: COLORS.black,
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  coffeeImage: {
    width: '100%',
    height: 160,
  },

  cardContent: {
    padding: 16,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  coffeeName: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },

  coffeeType: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  heartButton: {
    padding: 8,
  },

  heartIcon: {
    fontSize: 20,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  rating: {
    fontSize: 14,
    color: COLORS.warning,
    fontWeight: '600',
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
  },

  lastOrdered: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontStyle: 'italic',
  },

  orderButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },

  orderButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },

  // Empty State
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },

  emptyImage: {
    width: 200,
    height: 150,
    borderRadius: 20,
    marginBottom: 24,
    opacity: 0.8,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 22,
  },
});
