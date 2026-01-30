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

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 8,
  },

  header: {
    marginBottom: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  card: {
    backgroundColor: COLORS.background,
    borderRadius: 20,
    padding: 20,
    marginTop: 16,

    // iOS shadow
    shadowColor: COLORS.black,
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },

    // Android
    elevation: 4,

    alignItems: 'center',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },

  email: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },

  infoText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    textAlign: 'left',
  },

  linkRow: {
    marginTop: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  linkText: {
    fontSize: 16,
    color: COLORS.info, // replaces iOS blue
    fontWeight: '500',
  },
});
