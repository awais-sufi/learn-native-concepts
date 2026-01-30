import { StyleSheet } from 'react-native';
import { I18nManager } from 'react-native';
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
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  card: {
    backgroundColor: COLORS.background,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  cardText: {
    marginBottom: 6,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },

  cardSubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },

  time: {
    fontSize: 11,
    color: COLORS.tabInactive,
    alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 160,
    marginBottom: 16,
  },

  emptyText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
